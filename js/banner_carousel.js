const width = document.querySelector('.visible-gallery').offsetWidth; // width gallery
const count = 1; // number of slides

const carousel = document.querySelector('.carousel');
const list = carousel.querySelector('.gallery');
const listElems = carousel.querySelectorAll('.banner__text');

let position = 0; // current left shift

const showNextSlide = () => {
  position = Math.min(position + width * count, 0);
  list.style.marginLeft = `${position}px`;
};

const showPreviousSlide = () => {
  position = Math.max(position - width * count, -width * (listElems.length - count));
  list.style.marginLeft = `${position}px`;
};

carousel.querySelector('.arrow__prev').addEventListener("click", showNextSlide, false);
carousel.querySelector('.arrow__next').addEventListener("click", showPreviousSlide, false);