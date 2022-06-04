function myFunction100() {
    var x = document.getElementById("myDIV");
    if (x.innerHTML === "THIS IS A HIDDEN WEBSITE!") {
      x.innerHTML = "KJO ËSHTË NJË FAQE E FSHEHUR!";
    } else {
      x.innerHTML = "THIS IS A HIDDEN WEBSITE!";
    }
  }
  function myFunction() {
    alert("WARNING, THIS IS A HTML, CSS, JAVACRIPT TEST WEBSITE!");
  }
  let slideIndex = 0;
  showSlides();
  
  function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
  }