import { openAccordion } from './faq-accordion.js';

function openAnswersTab(evt, answersContent) {
  const answersList = document.getElementsByClassName('faq__answers-list');
  const faqTab = document.getElementsByClassName('faq__tab');

  // Скрываем все списки ответов
  for (let i = 0; i < answersList.length; i++) {
    answersList[i].style.display = 'none';
  }

  // Убираем класс 'active' у всех табов
  for (let i = 0; i < faqTab.length; i++) {
    faqTab[i].classList.remove('active');
  }

  // Показываем выбранный список
  const activeList = document.getElementById(answersContent);
  activeList.style.display = 'block';

  // Делаем текущий таб активным
  evt.currentTarget.classList.add('active');

  // Открываем первый аккордеон в активном табе
  const firstAccordion = activeList.querySelector('.answer button');
  if (firstAccordion) {
    openAccordion(firstAccordion);
  }
}

export { openAnswersTab };
