function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const titles = [
  "Frontend Development",
  "Backend Development",
  "Full-Stack Development",
  "UI/UX Design",
  "Software Engineering",
];

let index = 0; // Start index

function changeTitle() {
  index = (index + 1) % titles.length; // Loop through array
  document.getElementById("dynamicTitle").textContent = titles[index];
}

setInterval(changeTitle, 2000);
