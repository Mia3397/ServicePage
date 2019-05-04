const services = document.querySelector('.services');
const arrayOfServices = services.querySelector('.services__list').querySelectorAll('.service');
let activeService = 1;

arrayOfServices[activeService].classList.add('active');

const toggleActiveService = () => {
  arrayOfServices.forEach(el => el.classList.remove('active'));
  arrayOfServices[activeService].classList.add('active');
};

services.querySelector('.button_prev').addEventListener('click', () => {
  --activeService;
  if (activeService < 0) activeService = arrayOfServices.length -1;
  toggleActiveService();
});

services.querySelector('.button_next').addEventListener('click', () => {
  ++activeService;
  if (activeService > (arrayOfServices.length - 1)) activeService = 0;
  toggleActiveService()
});

