$(function(){
    /* 点击注册去登陆页面 */
    $("#link-red").on('click',function(){
        $('.login-box').hide();
        $('.red-box').show();
    })
    $('#link-login').on('click',function(){
        $('.login-box').show()
        $('.red-box').hide()
    })
    //从 layui中获取form对象
     var form =layui.form
     //通过form.verfy()函数定义校验规则
     form.verify({

         //自定义一个叫做pwd校验规则
         pwd:[
            /^[\S]{6,12}$/
            ,'密码必须6到12位，且不能出现空格'
          ] ,
          //检验两次密码是否一致
           repwd:function(value){
              //通过形参拿到的是确认密码框的内容
              //还需要拿到密码框的内容
              //然后进行一次等于判断
              //如果判断失败，则return一个提示消息即可
              
         var pwd=$('#repsd').val()
     
         if(pwd!==value){
             return '两次密码不一致'
         }
          } 
     })
       //获取注册AJAX
        $('#form_reg').on('submit',function(e){
    e.preventDefault()//阻止事件默认行为
       $.ajax({
           type:'post',
           url:'http://ajax.frontend.itheima.net/api/reguser',
           data:{
            username:$('#form_reg [name=username]').val(),
            password:$('#form_reg [name=password]').val()
           },
           success:function(res){
             if(res.status!==0){
                return layer.msg(res.message)
             }layer.msg('注册成功')
             $('#link-login').click()
              
           }
       })
    
        })

        //获取登录AJAX
        $('#redlogin').on('submit',function(e){
            e.preventDefault()
            $.ajax({
                type:'post',
                url:'http://ajax.frontend.itheima.net/api/login',
                data:{
                    username:$('#redlogin [name=username]').val(),
                    password:$('#redlogin [name=password]').val()
                },
                success:function(res){
                    if(res.status!==0){
                    return layer.msg(res.message)
                    }
                    layer.msg('登陆成功')
                }
            })
        })
})
