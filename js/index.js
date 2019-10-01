// fun bus text query selector start //////
const navText = document.querySelector(".logo-heading");

navText.addEventListener("mouseenter", () => {
  navText.style.transform = "scale(1.3)";
  navText.style.transition = "all 0.7";
});
navText.addEventListener("mouseleave", () => {
  navText.style.transform = "scale(1.0)";
  navText.style.transition = "all 0.3s";
});

navText.addEventListener("click", () => {
  navText.style.color = "#8FB339";
});
// end of fun bus text query selector //////

//// start of nav prevent default ///////////
const navPrevent = document.querySelector(".nav-link");
navPrevent.addEventListener("click", event => {
  console.log("I stoped => ", event);
  event.preventDefault();
});
////// end of nav prevent default //////

const backgroundColor = document.querySelector("body");
backgroundColor.addEventListener("click", e => {
  backgroundColor.style.background = "#AFB5A6";
});
const backgroundColorDblClick = document.querySelector("body");
backgroundColorDblClick.addEventListener("dblclick", e => {
  backgroundColor.style.background = "#fff";
});

const blueWater = document.querySelectorAll("img").forEach(item => {
  item.addEventListener("click", event => {
    item.src = "img/sean-o-KMn4VEeEPR8-unsplash.jpg";
    item.alt = "blue water";
  });
});

const para = document.querySelectorAll("p");
para.forEach(event => {
  event.addEventListener("mouseover", () => {
    event.style.color = "#FF4500";
  });
});

const paraback = document.querySelectorAll("p");
para.forEach(event => {
  event.addEventListener("mouseleave", () => {
    event.style.color = "#000";
  });
});
const fontColor = document.querySelector("body");
fontColor.addEventListener("click", function(event) {
  console.log("clicked");
  fontColor.style.color = "#177B78";
  fontColor.style.transition = "color 1.5s";
  event.stopPropagation();
});
const footer = document.querySelector(".footer");

footer.addEventListener("mouseenter", () => {
  footer.style.backgroundColor = "#FF00FF";
});
footer.addEventListener("mouseleave", () => {
  footer.style.backgroundColor = "#663399";
});
