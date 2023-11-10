var slideOne = document.getElementById('slide-1');
var slideTwo = document.getElementById('slide-2');
var slideThree = document.getElementById('slide-3');

var infoOne = document.getElementById('info-1');
var infoTwo = document.getElementById('info-2');
var infoThree = document.getElementById('info-3');

var pb1 = document.getElementById('pb-1');
var pb2 = document.getElementById('pb-2');
var pb3 = document.getElementById('pb-3');

var currentSlide = 1;

var x = true;

var timeBar = document.getElementById('time-bar');

function switchToNext(){
  timeBar.classList.remove('bar-anim');
  timeBar.classList.add('bar-anim');
  if(currentSlide == 1){
    slideOne.classList.add('out-left');
    infoOne.classList.add('out-fade-down');
    infoTwo.classList.remove('out-fade-down');
    infoThree.classList.add('out-fade-down');
    slideTwo.classList.remove('out-right');
    slideThree.classList.add('out-right');
    pb1.classList.remove('active-pb');
    pb2.classList.add('active-pb');
    pb3.classList.remove('active-pb');
    currentSlide = 2;
    return;
  }
    if(currentSlide == 2){
    infoOne.classList.add('out-fade-down');
    infoTwo.classList.add('out-fade-down');
    infoThree.classList.remove('out-fade-down');
    slideOne.classList.add('out-left');
    slideTwo.classList.add('out-left');
    slideThree.classList.remove('out-right');
          pb1.classList.remove('active-pb');
    pb2.classList.remove('active-pb');
    pb3.classList.add('active-pb');
    currentSlide = 3;
    return;
  }
      if(currentSlide == 3){
    infoOne.classList.remove('out-fade-down');
    infoTwo.classList.add('out-fade-down');
    infoThree.classList.add('out-fade-down');
    slideOne.classList.remove('out-left');
    slideOne.classList.remove('out-right');
    slideTwo.classList.add('out-right');
    slideTwo.classList.remove('out-left');
    slideThree.classList.add('out-right');
    slideThree.classList.remove('out-left');
    pb1.classList.add('active-pb');
    pb2.classList.remove('active-pb');
    pb3.classList.remove('active-pb');
    currentSlide = 1;
    return;
  }
}
function switchToPrev(){
  if(currentSlide == 1){
    infoOne.classList.add('out-fade-down');
    infoTwo.classList.add('out-fade-down');
    infoThree.classList.remove('out-fade-down');
    slideOne.classList.add('out-left');
    slideTwo.classList.add('out-left');
    slideThree.classList.remove('out-left');
    slideThree.classList.remove('out-right');
        pb1.classList.remove('active-pb');
    pb2.classList.remove('active-pb');
    pb3.classList.add('active-pb');
    currentSlide = 3;
    return;
  }
    if(currentSlide == 3){
    infoOne.classList.add('out-fade-down');
    infoTwo.classList.remove('out-fade-down');
    infoThree.classList.add('out-fade-down');
    slideOne.classList.add('out-left')
    slideTwo.classList.remove('out-left');
    slideTwo.classList.remove('out-right');
    slideThree.classList.add('out-right');
          pb1.classList.remove('active-pb');
    pb2.classList.add('active-pb');
    pb3.classList.remove('active-pb');
    currentSlide = 2;
    return;
  }
      if(currentSlide == 2){
    infoOne.classList.remove('out-fade-down');
    infoTwo.classList.add('out-fade-down');
    infoThree.classList.add('out-fade-down');
    slideOne.classList.remove('out-left');
    slideOne.classList.remove('out-right');
    slideTwo.classList.add('out-right');
    slideTwo.classList.remove('out-left');
    slideThree.classList.add('out-right');
    slideThree.classList.remove('out-left');
    pb1.classList.add('active-pb');
    pb2.classList.remove('active-pb');
    pb3.classList.remove('active-pb');
    currentSlide = 1;
    return;
  }
}



window.setInterval(function() {
  switchToNext()
}, 100000);