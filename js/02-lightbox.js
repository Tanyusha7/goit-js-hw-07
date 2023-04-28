import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryPictures = document.querySelector(".gallery");

const newGallery = createPicturesMarkup(galleryItems);

galleryPictures.insertAdjacentHTML("beforeend", newGallery);

galleryPictures.addEventListener("click", onGalleryPictures);

console.log(galleryPictures);

function createPicturesMarkup(picture) {
  return picture
    .map(({ preview, original, description }) => {
      return `
      <li class="gallery__item">
   <a class="gallery__link" href="${original}"  >
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>
`;
    })
    .join(" ");
}
function onGalleryPictures(evt) {
  evt.preventDefault();

  const lightbox = new SimpleLightbox(".gallery__link", {
    captionsData: "alt",
    captionDelay: "250",
  });

  console.log(lightbox);
}

console.log(galleryItems);
