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


    //  intro 타이핑

    const txtWrap = document.querySelector('#intro');
    const txtString = '안녕하세요. 꾸준함과 노력은 저의 기본 값!\n 회사와 함께 성장해나가는 디자이너이자 퍼블리셔가 되고 싶은 송지은입니다. \n 아직은 부족한 결과물들이지만 한 번씩 들여다봐주세요 감사합니다😊';
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




    //  작업물영역 슬라이드 

    var $imageList = $("#slide > div");
    var delay = 4000;
    var duration = 600;
    var timerId = 0;

    // 다음 이미지로 슬라이드 이동
    function nextImageSlide() {
        // 슬라이드 함수가 한 번에 여러 번 호출될 경우
        // 한 번에 여러 이미지가 넘어가는 것을 방지하기 위해
        // 이미지 이동 중에는 animate 메서드가 호출되지 않도록 함수를 종료
        if ($imageList.is(":animated")) return;

        //  ul 요소를 #slide 요소의 너비만큼 왼쪽으로 천천히 이동
        $imageList.animate({ left: "-100%" }, duration, function () {
            // ul 요소의 움직임이 끝나면

            // ul 요소의 스타일 속성을 제거
            // ul 요소의 첫 번째 자식 요소를
            // ul 요소의 마지막 자식 요소로 이동
            $(this).removeAttr("style")
                .children(":first").appendTo(this);
        });
    }

    // 이전 이미지로 슬라이드 이동하는 함수
    function prevImageSlide() {
        if ($imageList.is(":animated")) return;

        // ul 요소의 마지막 자식 요소를
        // ul 요소의 첫 번째 자식 요소로 이동
        // ul 요소를 #slide 요소의 너비만큼 왼쪽으로 바로 이동
        // ul 요소를 원래 위치로 천천히 이동
        $imageList.prepend($imageList.children(":last"))
            .css({ left: "-100%" })
            .animate({ left: 0 }, duration);

    }

    timerId = window.setInterval(nextImageSlide, delay);

    $("#list").hover(
        // #list 요소의 영역에 마우스 커서가 들어가면
        function () {
            // ul 요소가 움직이지 않도록 한다.
            window.clearInterval(timerId);
        },
        // #list 요소의 영역에서 마우스 커서가 나오면
        function () {
            // ul 요소가 다시 움직이도록 한다.
            timerId = window.setInterval(nextImageSlide, delay);
        }
    );

    // #next 요소를 클릭하면
    $("#next").on("click", function () {
        // 기존의 타이머에 의한 슬라이드 이동이
        // 클릭 이벤트에 의한 슬라이드 이동과 
        // 거의 동시에 수행되는 경우가 생긴다.
        // → 버튼을 누를 때만 슬라이드 이동이 되어지고
        //   다음 이미지까지 일정 시간 보여지도록 타이머를 해제한 다음
        //   다시 등록한다.
        window.clearInterval(timerId);
        timerId = window.setInterval(nextImageSlide, delay);

        // 다음 이미지로 슬라이드 이동
        nextImageSlide();
    });

    $("#prev").on("click", function () {
        window.clearInterval(timerId);
        timerId = window.setInterval(nextImageSlide, delay);

        prevImageSlide();
    });




});