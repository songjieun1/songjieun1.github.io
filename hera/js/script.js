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