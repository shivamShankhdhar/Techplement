const slides = document.querySelectorAll(".slides");
const prevButton = document.querySelector("#silder-prev-button");
const nextButton = document.querySelector("#silder-next-button");
var counter = 0;
if (counter === 0) {
  prevButton.disabled = true
}


prevButton.addEventListener("click", () => {
  if (nextButton.disabled == true) nextButton.disabled = false
  counter++;
  if (counter === 0) {
    prevButton.disabled = true;
  }
  getSlider();
})

nextButton.addEventListener("click", () => {
  if (prevButton.disabled == true) prevButton.disabled = false
  counter--;
  if (counter === -3) {
    nextButton.disabled = true;
  }
  getSlider();
})

const getSlider = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(${counter * 300}px)`;
  })
}

