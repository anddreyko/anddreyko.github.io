var screen = $(window);
var h = screen.height();
var w = screen.width();
var k = 1900/w;
var scrollTop;
var scrollBottom;
var scrollBegin;
var scrollEnd;
var wrap;

$(function(){
    Resize();
    Scroll();
    $('.start').removeClass('start');
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
    $('.text h2').css({'font-size':(45/k)+'px'});
    $('.text p').css({'font-size':(22/k)+'px'});
    $('.frame').each(function(i, e){
        $(e).css({'height': $(e).attr('height')/k+'px'});
    });
}
function Scroll(){
    scrollTop = $(window).scrollTop();
    scrollBottom = scrollTop + h;
    scrollBegin = 0;
    scrollEnd = $('.f1').height();
    if (scrollTop <= scrollEnd
     && scrollBottom >= scrollBegin) {
        $('.f1l1').css({'top':Path(24,6) +'%'});
        $('.f1l3').css({'top':Path(24,13) +'%'});
    }
    scrollBegin = scrollEnd;
    scrollEnd += $('.f2').height();
    if (scrollTop <= scrollEnd
     && scrollBottom >= scrollBegin) {
        $('.f2l1').css({'top':Path(-9,-27) +'%'});
    }
    scrollBegin = scrollEnd;
    scrollEnd += $('.f3').height();
    if (scrollTop <= scrollEnd
     && scrollBottom >= scrollBegin) {
        $('.f3l1').css({'top':Path(-1,-17) +'%'});
    }    
    scrollBegin = scrollEnd;
    scrollEnd += $('.f4').height();
    if (scrollTop <= scrollEnd
     && scrollBottom >= scrollBegin) {
        $('.f4l4').css({'top':Path(-5,-19) +'%'});
        $('.f4l2').css({'top':Path(-9,-30) +'%'});
        $('.f4l1').css({'top':Path(-20,20) +'%'});
    }
    scrollBegin = scrollEnd;
    scrollEnd += $('.f5').height();
    if (scrollTop <= scrollEnd
     && scrollBottom >= scrollBegin) {
        $('.f5l1').css({'top':Path(13,29) +'%'});
    }
}
function Path(pathEnd,pathBegin){
    //              (нижняя граница окна минус начало скролла на странице)  //путь анимации делить на путь скроллаscrollEnd-scrollBegin
    var r=pathBegin+(scrollBottom-scrollBegin/*scrollEnd-scrollTop*/)*(pathEnd-pathBegin)/(scrollEnd - scrollBegin + h);
    /*if(r<pathBegin) r=pathBegin;
    else if(r>pathEnd) r=pathEnd;*/
    return r;
}