
// const idBtn = document.getElementById("icon");
// const list = document.getElementsByClassName("nav-links");
// const body = document.querySelector('li');
const idBtn = document.getElementById("icon");
const list = document.getElementsByClassName("nav-links");
const body = document.querySelector('ul');

 idBtn.addEventListener('click',() => {

     body.classList.toggle('showNav');
  
 })