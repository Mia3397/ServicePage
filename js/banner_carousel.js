const galleryWidth = document.querySelector('.gallery').offsetWidth; // width gallery
const count = 1; // number of slides

const carousel = document.querySelector('.banner');
const list = carousel.querySelector('.gallery__viewer');
const listElems = carousel.querySelectorAll('.gallery__item');

let position = 0; // current left shift

const showNextSlide = () => {
  position = Math.min(position + galleryWidth * count, 0);
  list.style.marginLeft = `${position}px`;
};

const showPreviousSlide = () => {
  position = Math.max(position - galleryWidth * count, -galleryWidth * (listElems.length - count));
  list.style.marginLeft = `${position}px`;
};

carousel.querySelector('.arrow_prev').addEventListener("click", showNextSlide);
carousel.querySelector('.arrow_next').addEventListener("click", showPreviousSlide);
