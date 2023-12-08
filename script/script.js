//declared each slide as a variable in order for it to be used
let slideOne = document.getElementById("slide-1");
let slideTwo = document.getElementById("slide-2");
let slideThree = document.getElementById("slide-3");
// the info are the information that appears on the carousel
let infoOne = document.getElementById("info-1");
let infoTwo = document.getElementById("info-2");
let infoThree = document.getElementById("info-3");

let spot1 = document.getElementById("spot-1");
let spot2 = document.getElementById("spot-2");
let spot3 = document.getElementById("spot-3");

let currentSlide = 1;

let x = true;
//this will be used for the timebar before it switches to the next slide
let timeBar = document.getElementById("time-bar");
/*

The specified JavaScript function is configured to run in response to a user-initiated event, namely, clicking on an HTML element that is identified as the "next" button on the page. 


*/
function switchToNext() {
  timeBar.classList.remove("bar-anim");
  timeBar.classList.add("bar-anim");
  //go from page 1 to 2
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
  //page 2 to 3
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
  // page 3 back to 1
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
/*

The specified JavaScript function is configured to run in response to a user-initiated event, namely, clicking on an HTML element that is identified as the "prev" button on the page.


*/
function switchToPrev() {
  // goes from slide 1 to 3
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
  //goes from 3 to 2
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
  //goes from 2 to 1
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
// setting how long it should take to get to the next page
window.setInterval(function () {
  switchToNext();
}, 9000);
