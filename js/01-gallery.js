import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const imagesList = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`
  })
  .join(" ");

  const galleryWrapper = document.querySelector('.gallery')

  galleryWrapper.innerHTML = imagesList;

  const handleThumbClick = (event) => {
    event.preventDefault();
    if (!event.target.classList.contains("gallery__image"))
    return;
    else {const imgSourceLink = event.target.dataset.source
      basicLightbox.create(`<img width="1400" height="900" src="${imgSourceLink}">`).show()
}};

  galleryWrapper.addEventListener("click", handleThumbClick);
