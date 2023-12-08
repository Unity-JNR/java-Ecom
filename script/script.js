let slideOne = document.getElementById("slide-1");
let slideTwo = document.getElementById("slide-2");
let slideThree = document.getElementById("slide-3");

let infoOne = document.getElementById("info-1");
let infoTwo = document.getElementById("info-2");
let infoThree = document.getElementById("info-3");

let spot1 = document.getElementById("spot-1");
let spot2 = document.getElementById("spot-2");
let spot3 = document.getElementById("spot-3");

let currentSlide = 1;

let x = true;

let timeBar = document.getElementById("time-bar");

function switchToNext() {
  timeBar.classList.remove("bar-anim");
  timeBar.classList.add("bar-anim");
  if (currentSlide == 1) {
    slideOne.classList.add("out-left");
    infoOne.classList.add("out-fade-down");
    infoTwo.classList.remove("out-fade-down");
    infoThree.classList.add("out-fade-down");
    slideTwo.classList.remove("out-right");
    slideThree.classList.add("out-right");
    spot1.classList.remove("active-spot");
    spot2.classList.add("active-spot");
    spot3.classList.remove("active-spot");
    currentSlide = 2;
    return;
  }
  if (currentSlide == 2) {
    infoOne.classList.add("out-fade-down");
    infoTwo.classList.add("out-fade-down");
    infoThree.classList.remove("out-fade-down");
    slideOne.classList.add("out-left");
    slideTwo.classList.add("out-left");
    slideThree.classList.remove("out-right");
    spot1.classList.remove("active-spot");
    spot2.classList.remove("active-spot");
    spot3.classList.add("active-spot");
    currentSlide = 3;
    return;
  }
  if (currentSlide == 3) {
    infoOne.classList.remove("out-fade-down");
    infoTwo.classList.add("out-fade-down");
    infoThree.classList.add("out-fade-down");
    slideOne.classList.remove("out-left");
    slideOne.classList.remove("out-right");
    slideTwo.classList.add("out-right");
    slideTwo.classList.remove("out-left");
    slideThree.classList.add("out-right");
    slideThree.classList.remove("out-left");
    spot1.classList.add("active-spot");
    spot2.classList.remove("active-spot");
    spot3.classList.remove("active-spot");
    currentSlide = 1;
    return;
  }
}
function switchToPrev() {
  if (currentSlide == 1) {
    infoOne.classList.add("out-fade-down");
    infoTwo.classList.add("out-fade-down");
    infoThree.classList.remove("out-fade-down");
    slideOne.classList.add("out-left");
    slideTwo.classList.add("out-left");
    slideThree.classList.remove("out-left");
    slideThree.classList.remove("out-right");
    spot1.classList.remove("active-spot");
    spot2.classList.remove("active-spot");
    spot3.classList.add("active-spot");
    currentSlide = 3;
    return;
  }
  if (currentSlide == 3) {
    infoOne.classList.add("out-fade-down");
    infoTwo.classList.remove("out-fade-down");
    infoThree.classList.add("out-fade-down");
    slideOne.classList.add("out-left");
    slideTwo.classList.remove("out-left");
    slideTwo.classList.remove("out-right");
    slideThree.classList.add("out-right");
    spot1.classList.remove("active-spot");
    spot2.classList.add("active-spot");
    spot3.classList.remove("active-spot");
    currentSlide = 2;
    return;
  }
  if (currentSlide == 2) {
    infoOne.classList.remove("out-fade-down");
    infoTwo.classList.add("out-fade-down");
    infoThree.classList.add("out-fade-down");
    slideOne.classList.remove("out-left");
    slideOne.classList.remove("out-right");
    slideTwo.classList.add("out-right");
    slideTwo.classList.remove("out-left");
    slideThree.classList.add("out-right");
    slideThree.classList.remove("out-left");
    spot1.classList.add("active-spot");
    spot2.classList.remove("active-spot");
    spot3.classList.remove("active-spot");
    currentSlide = 1;
    return;
  }
}

window.setInterval(function () {
  switchToNext();
}, 9000);
