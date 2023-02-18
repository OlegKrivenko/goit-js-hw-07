import { galleryItems } from "./gallery-items.js";
// Change code below this line

const ref = {
  gallery: document.querySelector(".gallery"),
};

ref.gallery.insertAdjacentHTML("beforeend", createGalleryItems(galleryItems));
ref.gallery.addEventListener("click", getBigImgUrl);

function createGalleryItems(arrayGalleryItems) {
  return arrayGalleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
              </a>`;
    })
    .join("");
}

function getBigImgUrl(event) {
  event.preventDefault();

  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  //      модальне вікно з великою фоткою SimpleLightbox
  const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
    //  fadeSpeed: 150,
  });
  //      модальне вікно з великою фоткою SimpleLightbox
}
