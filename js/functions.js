$(function(){
    var frame = $('.frame')
      , wScroll = 0
      , frameTop = 0
      , frameHeight = 0
      , screen = $(window)
      , w = screen.width()
      , h = 0
      , k = 1900/w;
    resized();
    
    screen.resize(function(){
        resized();
    });
    
    screen.scroll(function(){
        wScroll = $(this).scrollTop();
        //обход списка фреймов
        animate(frame);
    });
    
    function resized(){
        w = screen.width();
        h = screen.height();
        frame
            .attr('width'
              , w)
            .attr('height'
              , frame.attr('height')/k);
             
        frameTop = frame.offset().top;
        frameHeight = frame.height();
    }
    
    function animate(frame){
        var frameHeight = frame.height()
          , frameTop = frame.offset().top;
            console.log((wScroll+h)/k);
        if (wScroll+h >= 1250/k) {                              //from 1250 to (2250-screenHeight)
            $('.l1').attr('y', (wScroll+h) +'px');              //to 2250
            $('.l2').attr('y', (wScroll+h)/1.1 +'px');          //from 785px to 1315px = 530px
            
            $('.l3').attr('y', (wScroll+h)/1.3 +'px');
            $('.l4').attr('y', (wScroll+h)/2 +'px');/**/
        }
    }
});
