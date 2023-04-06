//This part is for validations process
$(document).ready(function(){
  

    
   $('#userName').on('click keyup keydown', function (){
    if($(this).val() =="")
    {   $(this).removeClass('valid');
        $(this).addClass('invalid');
    }
    else if($(this).val()!="")
    {
        $(this).removeClass('invalid');
        $(this).addClass('valid');
    }
   });

   $('#userFirstName').on('click keyup keydown', function (){
    if($(this).val() =="")
    {   $(this).removeClass('valid');
        $(this).addClass('invalid');
    }
    else if($(this).val()!="")
    {
        $(this).removeClass('invalid');
        $(this).addClass('valid');
    }
   });

   $('#userLastName').on('click keyup keydown', function (){
    if($(this).val() =="")
    {   $(this).removeClass('valid');
        $(this).addClass('invalid');
    }
    else if($(this).val()!="")
    {
        $(this).removeClass('invalid');
        $(this).addClass('valid');
    }
   });

   $('#userEmail').on('click keyup keydown', function (){
    if($(this).val() =="")
    {   $(this).removeClass('valid');
        $(this).addClass('invalid');
    }
    else if($(this).val()!="")
    {
        $(this).removeClass('invalid');
        $(this).addClass('valid');
    }
   });

   $('#userConfirmEmail').on('click keyup keydown', function (){
    if($(this).val() =="")
    {   $(this).removeClass('valid');
        $(this).addClass('invalid');
    }
    else if($(this).val()!="")
    {
        $(this).removeClass('invalid');
        $(this).addClass('valid');
    }
   });

   $('#userPassword').on('click keyup keydown', function (){
    if($(this).val() =="")
    {   $(this).removeClass('valid');
        $(this).addClass('invalid');
    }
    else if($(this).val()!="")
    {
        $(this).removeClass('invalid');
        $(this).addClass('valid');
    }
   });

  $('#userConfirmEmail').on('click keyup keydown', function (){
    if($(this).val() =="")
    {   $(this).removeClass('valid');
        $(this).addClass('invalid');
    }
    else if($(this).val()!="")
    {
        $(this).removeClass('invalid');
        $(this).addClass('valid');
    }
   });

   $('#selectques').on('change click keyup keydown', function (){
   
    if($(this).val() =="")
    {   $(this).removeClass('valid');
        $(this).addClass('invalid');
    }
    else if($(this).val()!="")
    {
       
        $(this).removeClass('invalid');
        $(this).addClass('valid');
    }
   });

   $('#answer').on('click keyup keydown', function (){
    if($(this).val() =="")
    
    {   $(this).removeClass('valid');
        $(this).addClass('invalid');
    }
    else if($(this).val()!="")
    {
        $(this).removeClass('invalid');
        $(this).addClass('valid');
    }
   });

   $('input[name="male"]').on('click change', function() {
    if($('input[name="male"]').attr('checked')=='checked' ){
        $('#gender').append().html("<h2 id='invalid'>*</h2>");
       }
   });

  

   $("#male").change(function(){

    $("#female").prop("checked", false);

    });
    $("#female").change(function(){

        $("#male").prop("checked", false);

    });

    $("#general").change(function(){
        $("#agent").prop("checked",false);

    });
    $("#agent").change(function(){
        $("#general").prop("checked",false);
    });

});

