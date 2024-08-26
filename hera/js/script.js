$(function () {


    // 메인배너 슬라이드
    setInterval(function () {

        $('#slidewrap').animate({
            left: '-200%'
        },'slow', function () {
            $('#slidewrap > div:first-child').appendTo('#slidewrap');
            $('#slidewrap').css('left', '-100%');
        });
        
    }, 3000);


    // 메인이미지 1 스크롤시,
    // 오른쪽에서 이미지 페이드인슬라이드
    // $(window).scroll(function () {
    //     $('#mainimg1').each(function (i) {

    //         var bottom_of_element = $(this).offset().top + $(this).outerHeight();
    //         var bottom_of_window = $(window).scrollTop() + $(window).height();

    //         if (bottom_of_window > bottom_of_element / 2) {
    //             $(this).animate({ 'opacity': '1', 'margin-right': '0px' }, 3000);
    //         }

    //     });
    // });

    // // 메인이미지2 스크롤시,
    // // 이미지 왼쪽에서 페이드인슬라이드

    // $(window).scroll(function () {
    //     $('#mainimg2').each(function (i) {

    //         var bottom_of_element = $(this).offset().top + $(this).outerHeight();
    //         var bottom_of_window = $(window).scrollTop() + $(window).height();

    //         if (bottom_of_window > bottom_of_element / 2) {
    //             $(this).animate({ 'opacity': '1', 'margin-left': '0px' }, 4000);
    //         }

    //     });
    // });


    // 헤라 모먼트 슬라이드 
    setInterval(function () {

        $('#heramomentimg').animate({
            left: '-286px'
        }, 'slow', function () {
            $('#heramomentimg > div:first-child').appendTo('#heramomentimg');
            $('#heramomentimg').css('left,0');
        });

    }, 2000);

    //버튼 클릭시 슬라이드 이동  
    $('#prev').click(function () {

        $('#heramomentimg > div:first-child').appendTo('#heramomentimg')

    });

    $('#next').click(function () {

        $('#heramomentimg > div:last-child').prependTo('#heramomentimg')

    });






});