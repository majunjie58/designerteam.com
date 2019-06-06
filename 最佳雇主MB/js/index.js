var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    slidesPerView: 1,
    paginationClickable: true,
    spaceBetween: 20,
    freeMode: true
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

$(".swiper-slide,.awards-picture").click(function(e){
  if($(this).hasClass('hover')){
    console.log(1);
    $(".swiper-slide,.awards-picture").removeClass("hover");
  }else{
    console.log(2);
    $(".swiper-slide,.awards-picture").removeClass("hover");
    $(this).addClass("hover");
  }
  e.stopPropagation();
});