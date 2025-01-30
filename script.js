function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const titles = [
  "Frontend Developer",
  "Data Analyst",
  "Full-Stack Development",
  "UI/UX Design",
  "Software Engineering",
];

let index = 0;

function changeTitle() {
  index = (index + 1) % titles.length; // Loop through array
  document.getElementById("dynamicTitle").textContent = titles[index];
}

setInterval(changeTitle, 2000);

document.getElementById("logo").addEventListener("click", function () {
  window.location.href = "index.html"; // Change "index.html" to your actual homepage URL
});
