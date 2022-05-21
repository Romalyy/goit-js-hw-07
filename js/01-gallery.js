import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');


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
        return ;
  }
  const basicLightbox = e.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src="${original}" width="800" height="600">
`)

  instance.show();

}



// import { galleryItems } from "./gallery-items.js";

// const galleryRefs = document.querySelector(".gallery");
// galleryRefs.addEventListener("click", onShowBigImage);

// (function createMarkup() {
//   const itemMarkup = galleryItems
//     .map(({ original, preview, description }) => {
//       return `
//     <div class="gallery__item">
//         <a class="gallery__link" href="${original}">
//             <img
//                 class="gallery__image"
//                 src="${preview}"
//                 data-source="${original}"
//                 alt="${description}"
//             />
//         </a>
//     </div>
//     `;
//     })
//     .join("");
//   galleryRefs.insertAdjacentHTML("beforeend", itemMarkup);
// })();

// function onShowBigImage(e) {
//   e.preventDefault();
//   if (!e.target.classList.contains("gallery__image")) {
//     return;
//   }

//   let bigImageSrc = e.target.dataset.source;

//   const modal = basicLightbox.create(
//     `<img src="${bigImageSrc}" width="800" height="600">`
//   );
//   modal.show();

//   if (modal.visible()) {
//     window.addEventListener("keydown", onPressKeyESC);
//   }

//   function onPressKeyESC(e) {
//     if (e.code === "Escape") {
//       modal.close();
//       window.removeEventListener("keydown", onPressKeyESC);
//     }
//   }
// }