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