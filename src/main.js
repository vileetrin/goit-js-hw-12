import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchImages } from './js/pixaby-api.js';
import { createMarkup } from './js/render-functions.js';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

form.addEventListener('submit', onButtonClick);

function onButtonClick(event) {
  event.preventDefault();

  gallery.innerHTML = '';

  loader.style.display = 'inline-block';

  const searchInput = form.elements.searchInput.value.trim();

  if (searchInput === '') {
    loader.style.display = 'none';
    iziToast.error({
      title: 'Error',
      message: 'Please enter word to search!',
      position: 'topRight',
    });
    return;
  }

  fetchImages(searchInput)
    .then(data => {
      if (data.length === 0) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }
      createMarkup(data, gallery);
    })
    .catch(error => {
      console.error('Error:', error);
    }).finally(() => {
            loader.style.display = 'none';
        });;
}
