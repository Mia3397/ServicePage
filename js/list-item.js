const services = document.querySelector('.services');
const arrayOfItems = services.querySelector('.services__list').querySelectorAll('.list__item');
let activeService = 1;

arrayOfItems[activeService].classList.add('active');

const toggleActiveService = () => {
  arrayOfItems.forEach(el => el.classList.remove('active'));
  arrayOfItems[activeService].classList.add('active');
};

services.querySelector('.button_prev').addEventListener('click', () => {
  --activeService;
  if (activeService < 0) activeService = arrayOfItems.length -1;
  toggleActiveService();
});

services.querySelector('.button_next').addEventListener('click', () => {
  ++activeService;
  if (activeService > (arrayOfItems.length - 1)) activeService = 0;
  toggleActiveService()
});
