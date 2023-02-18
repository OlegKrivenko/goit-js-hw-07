import { galleryItems } from "./gallery-items.js";
// Change code below this line

const ref = {
  gallery: document.querySelector(".gallery"),
};

ref.gallery.insertAdjacentHTML("beforeend", createGalleryItems(galleryItems));

function createGalleryItems(arrayGalleryItems) {
  return arrayGalleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
              </a>`;
    })
    .join("");
}

//      модальне вікно з великою фоткою SimpleLightbox
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
