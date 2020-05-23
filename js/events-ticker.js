// let ticker = ('.events__div'),
//     tickerItem = '.events__div__span'
//     itemCount = (tickerItem).length,
//     viewportWidth = 0;
//
// function setupViewport(){
//     ticker.find(tickerItem).clone().prependTo('.events__div');
//
//     for (i = 0; i < itemCount; i ++){
//         let itemWidth = (tickerItem).eq(i).outerWidth();
//         viewportWidth = viewportWidth + itemWidth;
//     }
//
//     ticker.css('width', viewportWidth);
// }
//
// function animateTicker(){
//     ticker.animate({
//         marginLeft: -viewportWidth
//       }, 30000, "linear", function() {
//         ticker.css('margin-left', '0');
//         animateTicker();
//       });
// }
//
// function initializeTicker(){
//     setupViewport();
//     animateTicker();
//
//     ticker.on('mouseenter', function(){
//         (this).stop(true);
//     }).on('mouseout', function(){
//         animateTicker();
//     });
// }
//
// initializeTicker();





// let ticker = anime.path('path')
let svgMotion = anime({
  targets: '.events__div__span',
  easing: 'linear',
  translateX: [0,-5000],
  duration: 20000,
  direction: 'alternate',
  loop: true
})


let svgMotion__2 = anime({
  targets: '#events__div__span__2',
  easing: 'linear',
  translateX: [0,-5000],
  duration: 15000,
  direction: 'alternate',
  loop: true
})

let svgMotion__3 = anime({
  targets: '#events__div__span__3',
  easing: 'linear',
  translateX: [0,-2000],
  duration: 25000,
  direction: 'alternate',
  loop: true
})




// statistics

let motionStatistics = anime({
  targets: '.statistics_heading',
  easing: 'linear',
  translateY: [0,-13000],
  duration: 40000,
  direction: 'alternate',
  loop: true
})





























///
