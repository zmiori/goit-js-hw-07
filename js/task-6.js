// ========================================
// Напиши скрипт, который бы при потере фокуса на инпуте,
// проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество,
// то border инпута становится зеленым, если неправильное - красным.

// Для добавления стилей, используй CSS-классы valid и invalid.
// =========================================

const validationInputRef = document.querySelector('#validation-input');
console.log(validationInputRef.getAttribute('data-length'));

function isInputValid(event) {
  if (
    event.target.value.length > validationInputRef.getAttribute('data-length')
  ) {
    validationInputRef.classList.add('invalid');
  } else {
    validationInputRef.classList.replace('invalid', 'valid');
  }
}

validationInputRef.addEventListener('blur', isInputValid);
