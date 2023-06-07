$(function () {

    // 메인배너 슬라이드 

    setInterval(function () {

      $('#mainslide').fadeOut( function() {
         $('#mainslide > div:first-child').appendTo('#mainslide');
      });
      $('#mainslide').fadeIn();

    }, 2000);
    

    // 최저가항공권 슬라이드 
    setInterval(function () {

        $('#ticketlist').animate({
            left: '-223px'
        }, 'slow', function () {
            $('#ticketlist > div:first-child').appendTo('#ticketlist');
            $('#ticketlist').css('left,0');
        });

    }, 2000);

    //버튼 클릭시 슬라이드 이동  
    $('#prev').click(function () {

        $('#ticketlist > div:first-child').appendTo('#ticketlist')

    });

    $('#next').click(function () {

        $('#ticketlist > div:last-child').prependTo('#ticketlist')

    });
});