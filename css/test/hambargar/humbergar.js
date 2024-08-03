let hamburger = document.querySelector(".hamburger-button");
let bar1 = document.querySelector(".bar1");
let bar2 = document.querySelector(".bar2");
let bar3 = document.querySelector(".bar3");

hamburger.addEventListener("click", () => {
  bar1.classList.toggle("animatedBar1");
  bar2.classList.toggle("animatedBar2");
  bar3.classList.toggle("animatedBar3");
});
