import { galleryItems } from "./gallery-items.js";
// Change code below this line

const listEl = document.querySelector(".gallery");
let modalInstance;

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

listEl.addEventListener("click", handleImageClick);

function handleImageClick(event) {
  event.preventDefault();
  if (event.target.classList.contains("gallery__image")) {
    if (modalInstance) {
      modalInstance.close();
    }

    const largeImageUrl = event.target.getAttribute("data-source");
    modalInstance = basicLightbox.create(`<img src="${largeImageUrl}">`);
    modalInstance.show();

    document.addEventListener("keydown", handleKeyPress);
  }
}

function handleKeyPress(event) {
  if (event.key === "Escape") {
    modalInstance.close();
    document.removeEventListener("keydown", handleKeyPress);
  }
}

console.log(galleryItems);
