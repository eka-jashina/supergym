const nameInput = document.querySelector('.callback__input--name');
const telInput = document.querySelector('.callback__input--tel');
const nameError = nameInput.parentElement.querySelector('.error--name');
const telError = telInput.parentElement.querySelector('.error--tel');

// Функция для показа ошибки
const showError = (errorElement, message, input) => {
  errorElement.textContent = message;
  errorElement.style.display = 'inline-block';
  input.style.borderBottom = '1px solid #ff121f';
  input.value = '';
};

// Функция для скрытия ошибки
const hideError = (errorElement, input) => {
  errorElement.style.display = 'none';
  errorElement.textContent = '';
  input.style.borderBottom = '1px solid #74819c';
};

function validateForm(form) {
  form = document.querySelector('.callback__form');

  form.addEventListener('submit', (event) => {
    let isValid = true;

    // Валидация имени
    const namePattern = /^[a-zA-Zа-яА-ЯёЁ ]+$/;
    if (!namePattern.test(nameInput.value.trim())) {
      showError(nameError, 'Допустимы только буквы', nameInput);
      isValid = false;
    } else {
      hideError(nameError, nameInput);
    }

    // Валидация телефона
    const telPattern = /^[\d()+\-\s]+$/;
    if (!telPattern.test(telInput.value.trim())) {
      showError(telError, 'Неверный номер телефона', telInput);
      isValid = false;
    } else {
      hideError(telError, telInput);
    }

    if (!isValid) {
      event.preventDefault();
    }
  });

  // Добавить обработчик событий на поля ввода, чтобы скрывать ошибку, когда пользователь начинает вводить
  nameInput.addEventListener('input', () => hideError(nameError, nameInput));
  telInput.addEventListener('input', () => hideError(telError, telInput));
}

export { validateForm };
