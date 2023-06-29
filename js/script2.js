$(function() {

    setInterval(function() {
        $('#slide').animate({
            left:'-100%'
        },'slow' ,function() {
            $('#slide > div:first-child').appendTo('#slide');
            $('#slide').css('left',0);
        });
    },2500);

    setInterval(function() {
        $('#slide2').animate({
            left:'-100%'
        },'slow' ,function() {
            $('#slide2 > div:first-child').appendTo('#slide2');
            $('#slide2').css('left',0);
        });
    },2500);

    setInterval(function() {
        $('#slide3').animate({
            left:'-100%'
        },'slow' ,function() {
            $('#slide3 > div:first-child').appendTo('#slide3');
            $('#slide3').css('left',0);
        });
    },2500);

    setInterval(function() {
        $('#slide4').animate({
            left:'-100%'
        },'slow' ,function() {
            $('#slide4 > div:first-child').appendTo('#slide4');
            $('#slide4').css('left',0);
        });
    },2500);

});