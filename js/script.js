$(function () {

    var typingBool = false;
    var typingIdx = 0;

    
    var typingTxt = $("#header > h3").text();

    typingTxt = typingTxt.split(""); // 한글자씩 나오게자름 

    if (typingBool == false) {
        // 타이핑이 진행되지 않았다면 
        typingBool = true;
        var tyInt = setInterval(typing, 100); // 반복동작 
    };

    function typing() {
        if (typingIdx < typingTxt.length) {
            // 타이핑될 텍스트 길이만큼 반복 
            $("#header").append(typingTxt[typingIdx]);
            // 한글자씩 이어주기 
            typingIdx++;
        } else {
            clearInterval(tyInt);
        }
    };


    setInterval(function () {

        $('#slide').animate({
            left: '-360px'
        }, 'slow', function () {
            $('#slide > li:first-child').appendTo('#slide');
            $('#slide').css('left,0');
        });

    }, 2000);

    //버튼 클릭시 슬라이드 이동  
    $('#prev').click(function () {

        $('#slide > li:first-child').appendTo('#slide')

    });

    $('#next').click(function () {

        $('#slide > li:last-child').prependTo('#slide')

    });
});