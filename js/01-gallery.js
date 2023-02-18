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
      return `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img 
          class="gallery__image"
          src="${preview}" 
          data-source="${original}" 
          alt="${description}" 
        />
      </a>
    </div>`;
    })
    .join("");
}

function getBigImgUrl(event) {
  event.preventDefault();

  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  //      початок модального вікна з великою фоткою basicLightbox
  const instance = basicLightbox.create(
    `<img src=${event.target.dataset.source} width="800" height="600">`,
    {
      onShow: () => {
        document.addEventListener("keydown", handleKeydown);
        console.log("addEventListener");
      },
      onClose: () => {
        document.removeEventListener("keydown", handleKeydown);
        console.log("removeEventListener");
      },
    }
  );
  instance.show();

  function handleKeydown(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
  //     кінець модального вікна
}
