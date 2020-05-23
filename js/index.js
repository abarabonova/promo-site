//text
[...document.querySelectorAll('.fluid-text')].forEach((item) => {
  fitText(item, 0.305)
});

// статистика
//text
[...document.querySelectorAll('.statistics_heading')].forEach((item) => {
  fitText(item, 0.443)
});
//0.443

let animeStatistics = anime({
  targets: '.fluid-text',
  easing: 'linear',
  translateY: [0,-2500],
  duration: 10000,
  direction: 'alternate',
  loop: true,
  easing: 'easeInOutExpo'
})
