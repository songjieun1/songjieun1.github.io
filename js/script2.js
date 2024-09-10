$(function () {
    
    //  메인 배너 슬라이드 
    setInterval(function () {
        $('#slide').animate({
            left: '-100%'
        }, 'slow', function () {
            $('#slide > div:first-child').appendTo('#slide');
            $('#slide').css('left', 0);
        });
    }, 2500);

    setInterval(function () {
        $('#slide2').animate({
            left: '-100%'
        }, 'slow', function () {
            $('#slide2 > div:first-child').appendTo('#slide2');
            $('#slide2').css('left', 0);
        });
    }, 2500);

    setInterval(function () {
        $('#slide3').animate({
            left: '-100%'
        }, 'slow', function () {
            $('#slide3 > div:first-child').appendTo('#slide3');
            $('#slide3').css('left', 0);
        });
    }, 2500);

    setInterval(function () {
        $('#slide4').animate({
            left: '-100%'
        }, 'slow', function () {
            $('#slide4 > div:first-child').appendTo('#slide4');
            $('#slide4').css('left', 0);
        });
    }, 2500);

    // 디자인 슬라이드 

    var $imageList = $("#slide2 > div");
    var delay = 4000;
    var duration = 600;
    var timerId = 0;

    function nextImageSlide() {

        if ($imageList.is(":animated")) return;

        $imageList.animate({ left: "-100%" }, duration, function () {

            $(this).removeAttr("style")
                .children(":first").appendTo(this);
        });
    }


    function prevImageSlide() {
        if ($imageList.is(":animated")) return;


        $imageList.prepend($imageList.children(":last"))
            .css({ left: "-100%" })
            .animate({ left: 0 }, duration);

    }

    timerId = window.setInterval(nextImageSlide, delay);

    $("#list2").hover(
        function () {
            window.clearInterval(timerId);
        },

        function () {

            timerId = window.setInterval(nextImageSlide, delay);
        }
    );


    $("#next2").on("click", function () {

        window.clearInterval(timerId);
        timerId = window.setInterval(nextImageSlide, delay);


        nextImageSlide();
    });

    $("#prev2").on("click", function () {
        window.clearInterval(timerId);
        timerId = window.setInterval(nextImageSlide, delay);

        prevImageSlide();
    });

});