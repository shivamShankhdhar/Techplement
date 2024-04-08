const openMenuBtn = document.getElementById("open-menu");
const closeMenuButton = document.getElementById("close-menu");
const navLinks = document.getElementsByClassName("nav-links")[0];

openMenuBtn.addEventListener("click", () => {
  closeMenuButton.style.display = "block"
  openMenuBtn.style.display = "none"
  navLinks.style.display = "block"
})

closeMenuButton.addEventListener("click", () => {
  openMenuBtn.style.display = "block"
  closeMenuButton.style.display = "none"
  navLinks.style.display = "none"
})