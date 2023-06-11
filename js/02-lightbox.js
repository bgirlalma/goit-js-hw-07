import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const container = document.querySelector('.gallery');

function markup(items) {
    return items.map((item) =>`<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
       <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a>
 </li>`).join('');
};

container.insertAdjacentHTML('beforeend', markup(galleryItems));

container.addEventListener('click', (ev) => {
 ev.preventDefault();

    if(ev.target.tagName !== "IMG") {
        return
    }

    new SimpleLightbox('.gallery a', {
        captionDelay: 250,
        captionsData: 'alt',
        captionPosition: 'bottom'
    }); 
});


