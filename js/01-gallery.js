import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
const galleryItem = document.querySelector('.gallery__item');
const galleryLink = document.querySelector('.gallery__link');
const galleryImage = document.querySelector('.gallery__image');

const galleryMarkup = createGallery(galleryItems);

gallery.insertAdjacentHTML("beforeend", galleryMarkup);
gallery.addEventListener('click', galleryItemClick)

function createGallery(images) {
    return images.map(({ preview, original, description }) => { 
        return `<div class="gallery__item">
          <a class="gallery__link" 
            href="${original}">
              <img class="gallery__image" 
                src="${preview}" 
                data-source="${original}" 
                alt="${description}" />
        </a>
      </div>`;
    }).join('');
}

function galleryItemClick(e) {
    if (!e.target.classList.contains('gallery__item')) {
        return;
    }
    console.log(e.target.src);
}

// function openModal(e) {

// }

const instance = basicLightbox.create(`
    <img src="${preview}" width="800" height="600">
`)

instance.show()

// createGallery(galleryItems)


// console.log(createGallery(galleryItems));


