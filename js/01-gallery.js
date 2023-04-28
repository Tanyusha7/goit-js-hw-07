import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryPictures = document.querySelector(".gallery");

const newGallery = createPicturesMarkup(galleryItems);

galleryPictures.insertAdjacentHTML("beforeend", newGallery);

galleryPictures.addEventListener("click", onGalleryPictures);
let selectedPicture = null;

// console.log(galleryPictures);

function createPicturesMarkup(picture) {
  return picture
    .map(({ preview, original, description }) => {
      return `
      <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
`;
    })
    .join(" ");
}

function onGalleryPictures(evt) {
  evt.preventDefault();

  window.addEventListener("keydown", onEscPress);

  const isPicture = evt.target.classList.contains("gallery__image");
  if (!isPicture) {
    return;
  }

  const largePicture = evt.target.dataset.source;
  // console.log(largePicture);

  selectedPicture = basicLightbox.create(`<img src = ${largePicture}>`);
  selectedPicture.show();
  // selectedPicture.show(() => console.log("lightbox now visible"));

  // console.log(selectedPicture);
}

console.log(galleryItems);

function onEscPress(evt) {
  selectedPicture.close();
  window.removeEventListener("keydown", onEscPress);
  // console.log(evt);
}
