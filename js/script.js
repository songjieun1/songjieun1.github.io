$(function () {

    //  스크롤 이벤트

    window.addEventListener("wheel", function (e) {
        e.preventDefault();
    }, { passive: false });
    //-------------------------------------------------------
    // 한 페이지 단위로 스크롤 이동

    var $html = $("html");

    var page = 1;

    var lastPage = $(".page").length;

    $html.animate({ scrollTop: 0 }, 10);

    $(window).on("wheel", function (e) {

        if ($html.is(":animated")) return;

        if (e.originalEvent.deltaY > 0) {
            if (page == lastPage) return;

            page++;
        }
        else if (e.originalEvent.deltaY < 0) {
            if (page == 1) return;

            page--;
        }
        var posTop = (page - 1) * $(window).height();

        $html.animate({ scrollTop: posTop });

    });





    // //  타이핑효과 
    // var typingBool = false;
    // var typingIdx = 0;


    // var typingTxt = $("#content > p").text();

    // typingTxt = typingTxt.split(""); // 한글자씩 나오게자름 

    // if (typingBool == false) {
    //     // 타이핑이 진행되지 않았다면 
    //     typingBool = true;
    //     var tyInt = setInterval(typing, 100); // 반복동작 
    // };

    // function typing() {
    //     if (typingIdx < typingTxt.length) {
    //         // 타이핑될 텍스트 길이만큼 반복 
    //         $("#content").append(typingTxt[typingIdx]);
    //         // 한글자씩 이어주기 
    //         typingIdx++;
    //     } else {
    //         clearInterval(tyInt);
    //     }
    // };



    const txtWrap = document.querySelector('#intro');
    const txtString = '안녕하세요 어제보다 오늘 더 나아갈 디자이너 / 퍼블리셔 송지은입니다. \n 요즘은 사람들과 만나면 네컷필름 한장 쯤은 꼭 찍지 않나요? \n 네컷필름처럼 빼놓지 않고 봐주셨으면 하는 마음에 이렇게 만들어보았습니다. \n  그냥 나가지 마시고 한번 씩 들여다봐주세요 감사합니다 ^-^!';
    const txtSpeed = 100;
    const txtDelay = 1000;
    let txtIndex = 0;
    let typeCotrol = true;

    function typingEvent() {
        if (typeCotrol === true) {
            let txtNow = txtString[txtIndex++];
            txtWrap.innerHTML += txtNow === "\n" ? "<br>" : txtNow;
            console.log(txtIndex)
            if (txtIndex >= txtString.length) {
                txtIndex = 0;
                typeCotrol = false;
            }
        } else {
            clearInterval(setTyping);
            setTimeout(function () {
                txtWrap.innerHTML = '';
                typeCotrol = true;
                setTyping = setInterval(typingEvent, txtSpeed);
            }, txtDelay)
        }

    }

    let setTyping = setInterval(typingEvent, txtSpeed);



    // 스크롤 시 진행되는 애니메이션
    var observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animation");
                } else {
                    entry.target.classList.remove("animation");
                }
            });
        },
    );
    // 애니메이션이 작동할 대상
    var targetElements = document.querySelectorAll(".animation");
    targetElements.forEach((element) => {
        observer.observe(element);
    });


    // 슬라이드
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