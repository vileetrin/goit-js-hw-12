import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery a', {});

export function createMarkup(hits, gallery) {
  const markup = hits
    .map(
      hit => `<div class="section">
        <a href="${hit.largeImageURL}"
          ><img
            src="${hit.webformatURL}"
            alt="${hit.tags}"
            class="gallery-image"
        /></a>
        <div class="params">
          <div>
            <h3>Likes</h3>
            <p>${hit.likes}</p>
          </div>
          <div>
            <h3>Views</h3>
            <p>${hit.views}</p>
          </div>
          <div>
            <h3>Comments</h3>
            <p>${hit.comments}</p>
          </div>
          <div>
            <h3>Downloads</h3>
            <p>${hit.downloads}</p>
          </div>
        </div>
      </div>`
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}
