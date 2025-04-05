import { toggleAccordion } from './faq-accordion.js';
import { openAnswersTab } from './faq-tabs.js';

const initFaqModule = () => {
  document.addEventListener('DOMContentLoaded', () => {
    // Обработчики вкладок
    document.querySelectorAll('.faq__tab').forEach((tab) => {
      tab.addEventListener('click', (event) => {
        openAnswersTab(event, tab.dataset.target);
      });
    });

    // Обработчики аккордеонов
    document.querySelectorAll('.faq__answers-list').forEach((list) => {
      list.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
          toggleAccordion(event.target);
        }
      });
    });

    // Открываем вкладку по умолчанию
    document.getElementById('default-answers-open').click();
  });
};

export { initFaqModule };
