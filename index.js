const steps = Array.from(document.querySelectorAll('form .step'));
const addPetBtn = document.querySelectorAll('form .btn-add-pet');
const prevPetBtn = document.querySelectorAll('form .btn-prev-pet');
const form = document.getElementsByClassName('form-page ');
const dog = document.getElementsByClassName('dog');

addPetBtn.forEach((button) => {
  button.addEventListener('click', (e) => {
    changeStep('next');
    scrollTo(0, 0);
  });
});

prevPetBtn.forEach((button) => {
  button.addEventListener('click', () => {
    changeStep('prev');
    scrollTo(0, 0);
  });
});

function changeStep(btn) {
  let index = 0;
  const active = document.querySelector('form .step.activePage');
  index = steps.indexOf(active);
  steps[index].classList.remove('activePage');

  if (btn === 'next') {
    index++;
  } else if (btn == 'prev') {
    index--;
  }
  steps[index].classList.add('activePage');
  scrollTo(0, 0);
}

document
  .getElementById('contactLink')
  .addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  });

document
  .getElementById('serviceCards')
  .addEventListener('click', function (event) {
    event.preventDefault();
    document
      .getElementById('service-cards')
      .scrollIntoView({ behavior: 'smooth' });
  });

document
  .getElementById('testimonial-card')
  .addEventListener('click', function (event) {
    event.preventDefault();
    document
      .getElementById('testimonials')
      .scrollIntoView({ behavior: 'smooth' });
  });

document
  .getElementById('staffLink')
  .addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('staff').scrollIntoView({ behavior: 'smooth' });
  });
