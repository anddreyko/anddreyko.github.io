$(function(){
    var pContainerHeight = $('.frame').height();
    var wScroll = 0;
    $(window).scroll(function(){
        wScroll = $(this).scrollTop();
        if (wScroll <= pContainerHeight) {
            $('.l40').attr('y', -50-wScroll/40 +'%');
            $('.l42').attr('y', '-'+ wScroll/40 +'%');
            $('.l153').attr('x', 50-wScroll/20 +'%');
            $('.l41').attr('x', wScroll/10 +'%');
            console.log(wScroll);
        }
    });
});
