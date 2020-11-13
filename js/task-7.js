// =============================================
// Напиши скрипт, который реагирует на изменение значения input#font-size-control
// (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size.
//  В результате при перетаскивании ползунка будет меняться размер текста.
//  ============================================

const sizeControlRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

function changeFontSize(event) {
  //   console.log(event.target.value);

  textRef.setAttribute('style', `font-size: ${event.target.value}px`);
}

sizeControlRef.addEventListener('input', changeFontSize);
