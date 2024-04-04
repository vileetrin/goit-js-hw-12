import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { fetchImages } from './js/pixaby-api.js';
import { createMarkup } from './js/render-functions.js';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const btn = document.querySelector('.load-button');


let page = 1;
let searchInput;
let maxPage = 0;

form.addEventListener('submit', onButtonClick);
btn.addEventListener('click', onLoadBtnClick);

async function onButtonClick(event) {
  event.preventDefault();

  gallery.innerHTML = '';
  page = 1;

  loader.classList.remove('hidden');

  searchInput = form.elements.searchInput.value.trim();

  if (searchInput === '') {
    loader.classList.add('hidden');
    iziToast.error({
      title: 'Error',
      message: 'Please enter word to search!',
      position: 'topRight',
    });
    return;
  }

  try {
    const data = await fetchImages(searchInput, page);
    maxPage = Math.ceil(data.total / 15);

    if (data.hits.length === 0) {
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      btn.classList.add('hidden');
      return;
    }

    createMarkup(data.hits, gallery);
    getBoundingClientRect();
    checkLoadButton();
  } catch (error) {
    console.error('Error:', error);
  } finally {
    loader.classList.add('hidden');;
  }
}


async function onLoadBtnClick() {
  const data = await fetchImages(searchInput, (page += 1));
  createMarkup(data.hits, gallery);
  getBoundingClientRect();
  checkLoadButton();
}


function checkLoadButton() {
  if (page >= maxPage) {
    btn.classList.add('hidden');
    iziToast.error({
      title: 'Error',
      message: 'We\'re sorry, but you\'ve reached the end of search results.',
      position: 'topRight',
    });
  } else {
    btn.classList.remove('hidden');
  }
}

function getBoundingClientRect() {
  scrollBy({
    top: 500,
    behavior: 'smooth'
  })
}


