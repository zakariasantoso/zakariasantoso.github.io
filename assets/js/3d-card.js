//Movement Animation to happen
const card = document.querySelector(".card-3d");
const container = document.querySelector(".card-container");
//Items
const title = document.querySelector(".title");
const myPhoto = document.querySelector(".myPhoto img");
const bottomBawah = document.querySelector(".bottomBawah");
// const description = document.querySelector(".info h3");
const links = document.querySelector(".links");

//Moving Animation Event
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.clientX / 1.3) / 25;
  let yAxis = (window.innerHeight / 2 - e.clientY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate In
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  //Popout
  title.style.transform = "translateZ(100px)";
  myPhoto.style.transform = "translateZ(80px) translateY(20px)";
  // description.style.transform = "translateZ(100px)";
  links.style.transform = "translateZ(100px)";
  bottomBawah.style.transform = "translateZ(65px)";
});
//Animate Out
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  title.style.transform = "translateZ(0px)";
  myPhoto.style.transform = "translateZ(0px) rotateZ(0deg)";
  // description.style.transform = "translateZ(0px)";
  links.style.transform = "translateZ(0px)";
  bottomBawah.style.transform = "translateZ(0px)";
});
