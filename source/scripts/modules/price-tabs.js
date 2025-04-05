const priceLists = document.querySelectorAll('.price__list');
const priceTabs = document.querySelectorAll('.price__tab');

function openPriceTab(evt, priceId) {
  // Скрываем все списки цен
  priceLists.forEach((list) => {
    list.style.display = 'none';
  });

  // Убираем активное состояние у всех вкладок
  priceTabs.forEach((tab) => {
    tab.classList.remove('active');
  });

  // Показываем выбранную категорию цен
  const activeList = document.getElementById(priceId);
  if (activeList) {
    activeList.style.display = 'grid';
  }

  // Добавляем класс 'active' к нажатой вкладке
  evt.currentTarget.classList.add('active');
}

function initPriceTabs() {
  document.addEventListener('DOMContentLoaded', () => {
    // Добавляем обработчики ко всем вкладкам
    document.querySelectorAll('.price__tab').forEach((tab) => {
      tab.addEventListener('click', (event) => {
        openPriceTab(event, tab.dataset.target);
      });
    });

    // Открываем вкладку по умолчанию
    document.getElementById('default-price-open').click();
  });
}

export { initPriceTabs };
