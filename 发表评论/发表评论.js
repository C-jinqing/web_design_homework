function getList(){
    $.get('http://www.liulongbin.top:3006/api/cmtlist',function(res){
        if(res.status !== 200){
            return alert(res.msg)
        }
        var rows = []
        $.each(res.data,function(i,item){
            var str = '<li class="list-group-item"><span class="badge">评论时间:'+ item.time +'</span><span class="badge">评论人:'+ item.username +'</span>'+ item.content +'</li>'
            rows.push(str)
        })
        $('#com_list').empty().append(rows.join(''))
    })
}
getList()

$(function(){
    $('#send').submit(function(e){
        e.preventDefault()
        var data = $(this).serialize()
        $.post('http://www.liulongbin.top:3006/api/addcmt',data,function(res){
            if(res.status !== 201){
                return alert(res.msg)
            }
            getList()
            $('#send')[0].reset()
        })
    })
})