jQuery(document).ready(function($){
    
    $('#btn1').on('click', function(){
        var textValue = $('#txt1').val();
        if(!textValue) {
            alert('I asked you to type some stuff');
            return;
        }   
            $(".tasks").prepend("<p>",textValue,"</p>");
          });
      
    
    });










  