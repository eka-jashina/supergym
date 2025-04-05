import { videoButton, loadVideo } from './modules/load-video.js';
import { initPriceTabs } from './modules/price-tabs.js';
import { initJuriSwiper } from './modules/juri-swiper.js';
import { initFaqModule } from './modules/faq-module.js';
import { initReviewsSwiper } from './modules/reviews-swiper.js';
import { validateForm } from './modules/validate-form.js';

videoButton.addEventListener('click', loadVideo);

initPriceTabs();

initJuriSwiper();

initFaqModule();

initReviewsSwiper();

validateForm();
