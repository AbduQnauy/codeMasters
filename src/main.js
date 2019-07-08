// jQuery
$(document).ready(function() {
  // alert("hello word");
});
// vanilla JS
const btn = document.getElementById("btn");
const nav = document.getElementById("nav-links");
btn.addEventListener("click", function() {
  nav.classList.toggle("changeNav");
  btn.classList.toggle("change");
});
