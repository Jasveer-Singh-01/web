$(document).ready(function()
{
    $('#agentlogin').click(function(e){
        e.preventDefault();
        if($('#userName').val() !="" && $('#password').val() !="")
        {   
            
            var username=$('#userName').val();
            var password=$('#password').val();
          
            $.ajax({
                url     :'./php/agentLogin.php',
                type    :'POST',
                data    :{uname:username, pass:password},
                success: function(data){
                    
                    if(data == 1)
                        {   
                            alert("login successful");
                            window.location = "//www.aspsnippets.com/";

                            //$('#msg').html("<h2>login success</h2>");
                        }
                    else 
                       {
                        $('#msg').html("<h2>else</h2>");
                       }
                }
            });
        }
    });

    $('.agn').click(function(){
        alert("this");
       
    });

});