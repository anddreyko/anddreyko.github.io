var screen = $(window)
  , h = screen.height()
  , w = screen.width()
  , k = 1900/w
  , scrollTop
  , scrollBottom
  , scrollBegin
  , scrollEnd
  , wrap;

$(function(){
    Resize();
    screen.resize(function(){
    	Resize();
    });
    screen.scroll(function(){
    	Scroll();
    });
});

function Resize(){
    h = screen.height();
    w = screen.width();
    wrap = $('.wrap');
    wrap.css('max-width','100%');
    k = 1920/wrap.width();
    $('.header').css({'font-size':(90/k)+'px'});
    $('.frame').each(function(i, e){
        $(e).css({'height': $(e).attr('height')/k+'px'});
    });
}
function Scroll(){
    scrollTop = $(window).scrollTop();
    scrollBottom = scrollTop + h;
    scrollBegin = 1;
    scrollEnd = 820/k;
    if (scrollBottom >= scrollBegin
     && scrollTop <= scrollEnd) {
        $('.f1l1').css({'top':Path(24,6) +'%'});
    console.log(Path(24,6));
    }
    /*scrollBegin = scrollEnd;
    scrollEnd = 3200/k+scrollEnd;
    if (scrollTop >= scrollBegin
     && scrollBottom <= scrollEnd) {
        $('.l5').css({'y':Path(250,320) +'px'});
        $('.l6').css({'y':Path(2500,2775) +'px'});
    }
    scrollBegin = scrollEnd;
    scrollEnd = 1900/k+scrollEnd;
    if (scrollTop >= scrollBegin
     && scrollBottom <= scrollEnd) {
        $('.l7').css({'y':Path(300,760) +'px'});
    }
    scrollBegin = scrollEnd;
    scrollEnd = 1900/k+scrollEnd;
    if (scrollTop >= scrollBegin
     && scrollBottom <= scrollEnd) {
        $('.l8').css({'y':Path(130,630) +'px'});
        $('.l9').css({'y':Path(780,900) +'px'});
        $('.l10').css({'y':Path(520,130) +'px'});
    }*/
}
function Path(pathEnd,pathBegin){
    //              (нижняя граница окна минус начало скролла на странице)  //путь анимации делить на путь скролла
    return pathBegin+(scrollBottom-scrollBegin)*(pathEnd-pathBegin)/(scrollEnd-scrollBegin);
}