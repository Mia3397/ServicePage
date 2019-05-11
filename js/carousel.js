const carousels = Array.from(document.querySelectorAll('.carousel'));

carousels.forEach(elem => {
  const gallery = elem.querySelector('.gallery');
  const galleryViewer = elem.querySelector('.gallery__viewer');
  const galleryList = galleryViewer.querySelectorAll('.gallery__item');
  const arrowPrev = elem.querySelector('.arrow_prev');
  const arrowNext = elem.querySelector('.arrow_next');
  const galleryWidth = gallery.offsetWidth;
  const count = 1;
  let position = 0;
  const carouselCounter = elem.querySelector('.carousel-navigation__counter');
  if(carouselCounter) {
    carouselCounter.textContent = `1/${galleryList.length}`;
  }

  const showPreviousSlide = () => {
    position = Math.min(position + galleryWidth * count, 0);
    galleryViewer.style.marginLeft = `${position}px`;
    if(carouselCounter) {
      carouselCounter.textContent = `${Math.abs(position)/galleryWidth + 1}/${galleryList.length}`;
    }
  };

  const showNextSlide = () => {
    position = Math.max(position - galleryWidth * count, -galleryWidth * (galleryList.length - count));
    galleryViewer.style.marginLeft = `${position}px`;
    if(carouselCounter) {
      carouselCounter.textContent = `${Math.abs(position)/galleryWidth + 1}/${galleryList.length}`;
    }
  };

  arrowNext.addEventListener('click', showNextSlide);
  arrowPrev.addEventListener('click', showPreviousSlide);
});
//
// function showNextSlideNew() {
//   position = Math.max(position - galleryWidth * count, -galleryWidth * (galleryList.length - count));
//   calculatePosition();
// }
//
// function showPreviousSlideNew() {
//   position = Math.min(position + galleryWidth * count, 0);
//   calculatePosition();
// }
//
// function calculatePosition() {
//   galleryViewer.style.marginLeft = `${position}px`;
//   if(carouselCounter) {
//     carouselCounter.textContent = `${Math.abs(position)/galleryWidth + 1}/${galleryList.length}`;
//   }
// }