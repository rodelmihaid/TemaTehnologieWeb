let SlideIndex1 = 1;
showSlidess(SlideIndex1);

function plusSlidess(n) {
  showSlidess((SlideIndex1 += n));
}

function currentSlidee(n) {
  showSlidess((SlideIndex1 = n));
}

function showSlidess(n) {
  let i;
  let slides = document.getElementsByClassName("mySlidess");
  let dots = document.getElementsByClassName("dott");
  if (n > slides.length) {
    SlideIndex1 = 1;
  }
  if (n < 1) {
    SlideIndex1 = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[SlideIndex1 - 1].style.display = "block";
  dots[SlideIndex1 - 1].className += " activee";
}
