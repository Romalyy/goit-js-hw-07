import { galleryItems } from './gallery-items.js';
 // Change code below this line

const gallery = document.querySelector('.gallery');


const galleryMarkup = createGallery(galleryItems);

gallery.insertAdjacentHTML("beforeend", galleryMarkup);
gallery.addEventListener('click', galleryItemClick);

function createGallery(img) {
  return img
    .map(({ original, preview, description }) => {
      return `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </div>
    `;
    })
    .join("");
  };

function galleryItemClick(e) {
  e.preventDefault();
  if (!e.target.classList.contains('gallery__image')) {
        return ;
  }

  let image = e.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src="${image}" width="800" height="600">
`);

  instance.show();

    function PressKeyESC(e) {
  if (e.code === 'Escape') {
    instance.close();
}
}

  if (instance.visible()) {
    window.addEventListener('keydown', PressKeyESC);
  }
};
