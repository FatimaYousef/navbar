const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click' , function() {
  links.classList.add("show-links");
  links.classList.toggle("show-links");
})
