$(function(){
    var pContainerHeight = $('.frame').height();
    var wScroll = 0;
    $(window).scroll(function(){
        wScroll = $(this).scrollTop();
        if (wScroll <= pContainerHeight) {
            $('#l1').css({
              'transform' : 'translate(0, -'+ wScroll /40 +'%)'
            });
            $('#l11').css({
              'transform' : 'translate(0, -'+ wScroll /40 +'%)'
            });
            $('#l2').css({
              'transform' : 'translate('+ wScroll /5 +'%, 0)'
            });
        }
    });
});
