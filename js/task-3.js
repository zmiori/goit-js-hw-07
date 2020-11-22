// =========================================
// Используй массив объектов images для создания тегов img вложенных в li.
//  Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.
// ============================================

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryRef = document.querySelector('#gallery');
galleryRef.classList.add('gallery');

function insertImage(item) {
  const galleryItemRef = document.createElement('li');
  galleryItemRef.classList.add('gallery-item');

  const imageRef = document.createElement('img');
  galleryItemRef.appendChild(imageRef);
  imageRef.setAttribute('url', item.url);
  imageRef.setAttribute('alt', item.alt);
  imageRef.classList.add('gallery-image');

  return galleryRef.insertAdjacentElement('afterbegin', galleryItemRef);
}

// createImage(images[0]);

const addToGallery = array => array.forEach(item => insertImage(item));

addToGallery(images);
