// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galeryEl = document.querySelector('.gallery');
const murkup = galleryItems.map(
  ({ preview, original, description }) => `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
  </li>`
);
galeryEl.insertAdjacentHTML('beforeend', murkup.join(''));

new SimpleLightbox('.gallery__link', {
  captionsData: 'alt',
  captionDelay: 250,
});

galeryEl.style.listStyle = 'none';
