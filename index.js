<<<<<<< HEAD
const steps = Array.from(
  document.querySelectorAll('form .step')
);
const addPetBtn = document.querySelectorAll(
  'form .btn-add-pet'
);
const prevPetBtn = document.querySelectorAll(
  'form .btn-prev-pet'
);
const form = document.getElementsByClassName('form-page ');
const dog = document.getElementsByClassName('dog');

// dog.addEventListener('click', (ev) => {
//   TweenMax.to(dog, 1, { x: 200 })
// })
=======
const steps = Array.from(document.querySelectorAll('form .step'));
const addPetBtn = document.querySelectorAll('form .btn-add-pet');
const prevPetBtn = document.querySelectorAll('form .btn-prev-pet');
const form = document.getElementsByClassName('form-page ');
const dog = document.getElementsByClassName('dog');
>>>>>>> petPackages

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
<<<<<<< HEAD
  const active = document.querySelector(
    'form .step.activePage'
  );
=======
  const active = document.querySelector('form .step.activePage');
>>>>>>> petPackages
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

<<<<<<< HEAD
console.log('this is a test of textastic');
=======
// document
//   .getElementById('contactLink')
//   .addEventListener('click', function (event) {
//     event.preventDefault();
//     document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
//   });

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
    // event.preventDefault();
    document.getElementById('staff').scrollIntoView({ behavior: 'smooth' });
  });

function scrollToSection(sectionId) {
  event.preventDefault(); // Prevent the default link behavior
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', function () {
  var links = document.querySelectorAll('.prevent-url-change');
  links.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var href = this.getAttribute('href');
      var parts = href.split('#');
      var id = parts[1];
      document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    });
  });
});

// intersection observer
document.addEventListener('DOMContentLoaded', function () {
  const images = document.querySelectorAll('.img-blur');
  const stars = document.querySelectorAll('.fa-star');

  const options = {
    root: null, // using the viewport as the root
    rootMargin: '0px',
    threshold: 0.25, // 25% of the element is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('img-blur');
        if (entry.target.matches('.fa-star')) {
          entry.target.classList.add('animate');
        }
      } else {
        entry.target.classList.add('img-blur');
        if (entry.target.matches('.fa-star')) {
          entry.target.classList.remove('animate');
        }
      }
    });
  }, options);

  images.forEach((img) => {
    observer.observe(img);
  });

  stars.forEach((star) => {
    observer.observe(star);
  });
});
>>>>>>> petPackages
