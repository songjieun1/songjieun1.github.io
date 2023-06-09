$(function(){
   

    $(".active").click(function(e){
      e.preventDefault();
      $("#popup").addClass("block");
    });
    $("#popup > button:first-child").click(function() {
        $("#popup").removeClass("block")
    });
});