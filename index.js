const steps = Array.from(document.querySelectorAll('form .step'))
const addPetBtn = document.querySelectorAll('form .btn-add-pet')
const prevPetBtn = document.querySelectorAll('form .btn-prev-pet')
const form = document.getElementsByClassName('form-page ')
const dog = document.getElementsByClassName('dog')

dog.addEventListener('click', (ev) => {
  TweenMax.to(dog, 1, { x: 200 })
})

addPetBtn.forEach((button) => {
  button.addEventListener('click', (e) => {
    changeStep('next')
    scrollTo(0, 0)
  })
})

prevPetBtn.forEach((button) => {
  button.addEventListener('click', () => {
    changeStep('prev')
    scrollTo(0, 0)
  })
})

function changeStep(btn) {
  let index = 0
  const active = document.querySelector('form .step.activePage')
  index = steps.indexOf(active)
  steps[index].classList.remove('activePage')

  if (btn === 'next') {
    index++
  } else if (btn == 'prev') {
    index--
  }
  steps[index].classList.add('activePage')
  scrollTo(0, 0)
}

console.log('this is a test of textastic')
