// Declare variables for each slide and corresponding info elements
let slideOne = document.getElementById("slide-1");
let slideTwo = document.getElementById("slide-2");
let slideThree = document.getElementById("slide-3");

let information = document.getElementById("info-1");
let information2 = document.getElementById("info-2");
let information3 = document.getElementById("info-3");

// Spot indicators for each slide
let spot1 = document.getElementById("spot-1");
let spot2 = document.getElementById("spot-2");
let spot3 = document.getElementById("spot-3");

// Variable to keep track of the current slide
let currentSlide = 1;

// Variable to control whether the time bar animation should play
let x = true;

// Time bar element for transition between slides
let timeBar = document.getElementById("time-bar");

// Function to switch to the next slide
function switchToNext() {
  // Reset time bar animation
  timeBar.classList.remove("bar-anim");
  timeBar.classList.add("bar-anim");

  // Transition from slide 1 to 2
  if (currentSlide == 1) {
    // Add animation classes for slide and info elements
    slideOne.classList.add("out-left");
    information.classList.add("out-fade-down");
    information2.classList.remove("out-fade-down");
    information3.classList.add("out-fade-down");
    slideTwo.classList.remove("out-right");
    slideThree.classList.add("out-right");

    // Update active spot indicator
    spot1.classList.remove("active-spot");
    spot2.classList.add("active-spot");
    spot3.classList.remove("active-spot");

    // Update current slide
    currentSlide = 2;
    return;
  }

  // Transition from slide 2 to 3
  if (currentSlide == 2) {
    information.classList.add("out-fade-down");
    information2.classList.add("out-fade-down");
    information3.classList.remove("out-fade-down");
    slideOne.classList.add("out-left");
    slideTwo.classList.add("out-left");
    slideThree.classList.remove("out-right");

    // Update active spot indicator
    spot1.classList.remove("active-spot");
    spot2.classList.remove("active-spot");
    spot3.classList.add("active-spot");

    // Update current slide
    currentSlide = 3;
    return;
  }

  // Transition from slide 3 to 1
  if (currentSlide == 3) {
    information.classList.remove("out-fade-down");
    information2.classList.add("out-fade-down");
    information3.classList.add("out-fade-down");
    slideOne.classList.remove("out-left");
    slideOne.classList.remove("out-right");
    slideTwo.classList.add("out-right");
    slideTwo.classList.remove("out-left");
    slideThree.classList.add("out-right");
    slideThree.classList.remove("out-left");

    // Update active spot indicator
    spot1.classList.add("active-spot");
    spot2.classList.remove("active-spot");
    spot3.classList.remove("active-spot");

    // Update current slide
    currentSlide = 1;
    return;
  }
}

// Function to switch to the previous slide
function switchToPrev() {
  // Transition from slide 1 to 3
  if (currentSlide == 1) {
    information.classList.add("out-fade-down");
    information2.classList.add("out-fade-down");
    information3.classList.remove("out-fade-down");
    slideOne.classList.add("out-left");
    slideTwo.classList.add("out-left");
    slideThree.classList.remove("out-left");
    slideThree.classList.remove("out-right");

    // Update active spot indicator
    spot1.classList.remove("active-spot");
    spot2.classList.remove("active-spot");
    spot3.classList.add("active-spot");

    // Update current slide
    currentSlide = 3;
    return;
  }

  // Transition from slide 3 to 2
  if (currentSlide == 3) {
    information.classList.add("out-fade-down");
    information2.classList.remove("out-fade-down");
    information3.classList.add("out-fade-down");
    slideOne.classList.add("out-left");
    slideTwo.classList.remove("out-left");
    slideTwo.classList.remove("out-right");
    slideThree.classList.add("out-right");

    // Update active spot indicator
    spot1.classList.remove("active-spot");
    spot2.classList.add("active-spot");
    spot3.classList.remove("active-spot");

    // Update current slide
    currentSlide = 2;
    return;
  }

  // Transition from slide 2 to 1
  if (currentSlide == 2) {
    information.classList.remove("out-fade-down");
    information2.classList.add("out-fade-down");
    information3.classList.add("out-fade-down");
    slideOne.classList.remove("out-left");
    slideOne.classList.remove("out-right");
    slideTwo.classList.add("out-right");
    slideTwo.classList.remove("out-left");
    slideThree.classList.add("out-right");
    slideThree.classList.remove("out-left");

    // Update active spot indicator
    spot1.classList.add("active-spot");
    spot2.classList.remove("active-spot");
    spot3.classList.remove("active-spot");

    // Update current slide
    currentSlide = 1;
    return;
  }
}

// Set interval for automatic slide transition (9000 milliseconds)
window.setInterval(function () {
  switchToNext();
}, 9000);
