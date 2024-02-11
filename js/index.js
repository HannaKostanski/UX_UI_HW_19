
 
 console.log("your index is just fine");

 $(document).ready(function(){
    $(".box, .box2, .box3").hover(
      function() {
        $(this).css("transform", "scale(1.1)"); 
      },
      function() {
        $(this).css("transform", "scale(1)"); 
      }
    );

    $(".box2, .box3").click(function(){
      var panelId = $(this).data('panel'); 
      var $panel = $("#panel" + panelId); 
      
      $panel.slideToggle(600);
    });
    $(".box").click(function(){
      var panelId = $(this).data('panel'); 
      var $panel = $("#panel"); 
      
      $panel.slideToggle(600);
    });
  });
