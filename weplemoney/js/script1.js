$(function() {


    // 메인이미지1 페이드인
    $('#title').fadeIn('4000');
    $('#mainimg').fadeIn('4000');
    

    //  메인이미지2 스크롤 슬라이드 
    $(window).scroll( function(){
        $('#title2').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'margin-left':'0px'},2000);
            }
            
        });

        $('#main2').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element/2 ){
                $(this).animate({'margin-right':'0px'},2000);
            }
            
        });


    });

});