var swiper = new Swiper(".swiper", {
    spaceBetween: 30,
    navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
    },
    pagination: {
      	el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
});

var swiper2 = new Swiper(".mySwipper", {
  effect: 'cube',
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94
  },
  speed: 800,
  spaceBetween: 100,
  navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
  },
  pagination: {
      el: ".swiper-pagination",
  },
});

// экспортировать не нужно так как самовызывающая функция в CDN swiper