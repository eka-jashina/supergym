import { Swiper } from '../vendor/swiper.js';

function initReviewsSwiper() {
  const reviewsSwiper = new Swiper('.reviews__swiper', {
    mousewheel: false,
    simulateTouch: false,
    autoHeight: true,
    speed: 1000,
    navigation: {
      nextEl: '.reviews__swiper-button-next',
      prevEl: '.reviews__swiper-button-prev',
    },
  });

  return reviewsSwiper;
}

export { initReviewsSwiper };
