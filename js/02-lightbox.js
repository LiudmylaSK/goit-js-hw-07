import { galleryItems } from "./gallery-items.js";

const listEl = document.querySelector(".gallery");

const renderList = (arr, container) => {
  const markup = arr
    .map(
      ({ original, preview, description }) =>
        `<li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </li>`
    )
    .join("");
  container.insertAdjacentHTML("beforeend", markup);
};

renderList(galleryItems, listEl);

const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionDelay: 250,
  captionsData: "alt",
  captionPosition: "bottom",
});

console.log(galleryItems);
