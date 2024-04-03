const slides = document.querySelectorAll(".slides");
const prevButton = document.querySelector("#silder-prev-button");
const nextButton = document.querySelector("#silder-next-button");

var counter = 0;

// slides.style.transform = "translateX(-500px)";
// console.log(slider)


// nextButton.addEventListener("click", () => {
//   slides.forEach((slide) => {
//     slide.style.transform = "translateX(500px)";
//   })
// })

prevButton.addEventListener("click", () => {
  if (nextButton.disabled == true) nextButton.disabled = false
  // if (counter > 0) counter = 0;
  counter++;
  if (counter === 0) {
    prevButton.disabled = true;
  }
  slides.forEach((slide) => {
    slide.style.transform = `translateX(${counter * 300}px)`;
  })
})

nextButton.addEventListener("click", () => {
  // if (counter < 0) counter = ;
  if (prevButton.disabled == true) prevButton.disabled = false
  counter--;
  if (counter === -3) {
    nextButton.disabled = true;
    // counter = -3;
  }
  slides.forEach((slide) => {
    slide.style.transform = `translateX(${counter * 300}px)`;
  })
})

