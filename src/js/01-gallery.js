import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line

import { galleryItems } from './gallery-items';
// Change code below this line
const galleryImg = document.querySelector('.gallery');
const cardImg = createGallery(galleryItems);

galleryImg.insertAdjacentHTML('beforeend', cardImg);

galleryImg.addEventListener('click', onCardImgClick);


function createGallery(galleryItems){
    return galleryItems.map(({preview, original, description}) =>{
        return `
            <a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        `
    })
    .join('');
}

const gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
  } );
function onCardImgClick(event){
    event.preventDefault();
    if (!event.target.classList.contains("gallery__image")) {
        return;
      }
      
      
   
  
};
console.log(galleryItems);
