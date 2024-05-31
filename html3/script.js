const slider = document.querySelector('.slider');
const prevbutton = document.querySelector('.prev-button');
const nextbutton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('.s'));
const slidecount = slides.length;
let slideindex = 0;

prevbutton.addEventListener('click', ShowPrevSlide);
nextbutton.addEventListener('click', ShowNextSlide);

function ShowPrevSlide() {
  slideindex = (slideindex - 1 + slidecount) % slidecount;
  updateSlider();
}

function ShowNextSlide() {
  slideindex = (slideindex + 1) % slidecount;
  updateSlider();
}

function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideindex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });

// const tree = document.querySelector('.tree');
// const treeitems = Array.from(tree.querySelectorAll('a');

// treeitems.addEventListener('click', ShowSlide);

// function ShowSlide() {
//   slideindex = treeitemindex;
//   updateSlider();
// }