
const slides = document.querySelector('.slides');
const nextButton = document.querySelector('.next');

let index = 0;

nextButton.addEventListener('click', () => {
  index++;
  if (index >= slides.children.length) {
    index = 0;
  }
  slides.children[index].style.display = 'block';
  for (let i = 0; i < slides.children.length; i++) {
    if (i !== index) {
      slides.children[i].style.display = 'none';
    }
  }
});