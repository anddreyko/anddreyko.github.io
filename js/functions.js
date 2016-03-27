$(function(){
    var frame = $('.frame')
      , frameHeight = frame.height()
      , frameTop = frame.offset().top
      , wScroll = 0
      , screen = $(window)
      , w = screen.width()
      , h = screen.height()
      , k = 1900/w;
    resized();
    
    screen.resize(function(){
        w = screen.width();
        h = screen.height();
        resized();
    });
    
    screen.scroll(function(){
        wScroll = $(this).scrollTop();
        //обход списка фреймов
        //animate(frame);
    });
    
    function resized(){
        frame
            .attr('width'
              , w)
            .attr('height'
              , frame.attr('height')/k)
    }
    
    function animate(frame){
        var frameHeight = frame.height()
          , frameTop = frame.offset().top;
        if (wScroll <= frameHeight+frameTop
         && wScroll+h >= frameTop) {
            $('.l40').attr('y', -50-(wScroll-frameTop)/40 +'%');
            $('.l42').attr('y', -(wScroll-frameTop)/40 +'%');
            $('.l153').attr('x', 50-(wScroll-frameTop)/20 +'%');
            $('.l41').attr('x', (wScroll-frameTop)/10 +'%');
            console.log(frameTop);
        }
    }
});
