const slides = document.getElementsByClassName("imageSlide");
const slideRight = document.getElementsByClassName("arrowRight")[0];
const slideLeft= document.getElementsByClassName("arrowLeft")[0];
var slideIndex = slides.length+1;
var slideTimer;

function slideInterval (){
  slideTimer = setInterval(function(){changeSlide(1);
  }, 4000);
}

function showSlides(n){
  // console.log("shows lides n:",n);
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  } 

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
    
  slides[slideIndex-1].style.display = "block";
  // console.log("slideIndex:",slideIndex);
}

function changeSlide(n){
    // console.log("changeSlide:",n);
  clearInterval(slideTimer);
  if (n < 0){
    slideIndex = slideIndex-1;
    showSlides(slideIndex);
  } else {
    slideIndex = slideIndex+1;
   showSlides(slideIndex); 
  }
slideInterval();
}

window.addEventListener("load",function() {
  showSlides(slideIndex);
  slideInterval();
    
})

slideRight.addEventListener("click", function () {
  changeSlide(1);
});

slideLeft.addEventListener("click", function () {
  changeSlide(-1);
});