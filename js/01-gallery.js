import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

function createGallaryItems(items) {
    return items.map((item) =>  `<li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
          <img
            class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="${item.description}"
          />
        </a>
      </li>`).join('')
};

galleryContainer.insertAdjacentHTML('beforeend', createGallaryItems(galleryItems));

galleryContainer.addEventListener('click', openModalImg);

function openModalImg(ev) {
    ev.preventDefault()

    if(ev.target.nodeName  !=='IMG' ){
        return
    }

    const source = ev.target.dataset.source;
    const instance = basicLightbox.create(`
    <img src="${source}" width="800" height="600">
`)
instance.show()

galleryContainer.addEventListener('keydown',(ev) => {
    if(ev.code === 'Escape'){
        instance.close()
    }
});

}
