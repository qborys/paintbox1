function myFunction() {
    var readmore = document.getElementById("read_more");
    readmore.classList.toggle("hide");
    var wiecej = document.getElementById("wiecej");
    wiecej.classList.toggle("hide");
    var mniej = document.getElementById("mniej");
    mniej.classList.toggle("hide");
}


function zmianatla() {
    var guzik = document.getElementById("guzik");
    guzik.classList.toggle("bg_cherry");

}


function umowwizyte() {
    var popup = document.getElementById("popup");
    popup.classList.toggle("hide");

}





var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}