$(document).ready(function () {
    var bannerSlider = new Swiper(".banner .box-wrap", {
        effect: "fade",
        navigation: {
          nextEl: ".banner .arrow .next",
          prevEl: ".banner .arrow .prev",
        },
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        }
    })

    var fixStart = $("main").offset().top;

    $(window).on("scroll", function() {
        var scr = $(this).scrollTop();

        if(scr >= fixStart){
            $(".aside-product, .aside-cart").css("position","fixed");
        } else {
            $(".aside-product, .aside-cart").css("position","absolute");    
        }
    });




    $(".offer .wrap .name li").click(function(){
        $(this).addClass("on").siblings().removeClass("on");
        $(this).addClass("on");
    });
    $(".offer .wrap .name li").on("click", function() {
        var i = $(this).index();
        $(".offer .wrap .cover .main .origin").eq(i).fadeIn();
        $(".offer .wrap .cover .main .origin").eq(i).siblings().fadeOut();
    })



    var mediaSliderTxt = new Swiper(".media .content .txt-slider", {
        spaceBetween: 10,
        controller: {
            control : ".media .content .img-slider"
        },
        slideToClickedSlide: true,
        loop: true,
    });
    var mediaSliderImg = new Swiper(".media .content .img-slider", {
        slidesPerView: 1,
        spaceBetween: 10,
        controller: {
            control : ".media .content .txt-slider"
        },
        slideToClickedSlide: true,
        loop: true,
    });


    mediaSliderTxt.controller.control = mediaSliderImg;
    mediaSliderImg.controller.control = mediaSliderTxt;
});