const openMenuBtn = document.getElementById("open-menu");

const closeMenuButton = document.getElementById("close-menu");

const listItem0 = document.getElementsByClassName("list-items-0")[0];

const listItem1 = document.getElementsByClassName("list-items-1")[0];

openMenuBtn.addEventListener("click", () => {
  closeMenuButton.style.display = "block"
  openMenuBtn.style.display = "none"
  // alert("clicked")
  listItem0.style.display = "grid"
  listItem1.style.display = "grid"
})

closeMenuButton.addEventListener("click", () => {
  openMenuBtn.style.display = "block"
  closeMenuButton.style.display = "none"
  // alert("clicked")
  listItem0.style.display = "none"
  listItem1.style.display = "none"
})