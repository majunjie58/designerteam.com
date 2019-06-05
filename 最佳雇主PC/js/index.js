var swiper = new Swiper('.swiper-container', {
  autoplay:5111000,
  speed: 500,
  autoplayDisableOnInteraction : false,
  loop:true,
  loopAdditionalSlides : 5,
  centeredSlides : true,
  slidesPerView: 3,
  nextButton: '.swpier-button-next',
  prevButton: '.swpier-button-prev',
  onSlideChangeStart: function(swiper){
      var index = swiper.activeIndex - 5;
      if(index===-1){index=4}
      if(index===5){index=0}
      $(".swiper-slide:not([data-swiper-slide-index='"+index+"'])").removeClass('swiper-active');
      $(".swiper-slide[data-swiper-slide-index='"+index+"']").addClass('swiper-active');
  }
});

var checkFadeIn = function(){
    var scrollBottom = $(document).scrollTop() + $(window).height();
    $(".j_fadeIn").each(function(){
        if(scrollBottom >= $(this).offset().top){
            $(this).addClass("j_faded");
        }else{
            $(this).removeClass("j_faded");
        }
    });
};

checkFadeIn();

$(window).scroll(function(){
    checkFadeIn();
});
