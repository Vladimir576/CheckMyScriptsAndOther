// Слайдер батончиков
// 

var arrowLeft = document.querySelector('.choice__arrow--left');
var arrowRight = document.querySelector('.choice__arrow--right');
var slides = document.querySelectorAll('.choice__block');

let currentSlideIndex = 0;


function hideAllSlides() {
    slides.forEach(slide => slide.classList.remove('block'));
}


function showCurrentSlide() {
    slides[currentSlideIndex].classList.add('block');
}

function nextSlide() {
    currentSlideIndex++;

    if (currentSlideIndex > slides.length - 1) {
        currentSlideIndex = 0;
    }
    
    hideAllSlides();
    showCurrentSlide();
}

function previousSlide() {
    currentSlideIndex--;

    if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
    }

    hideAllSlides();
    showCurrentSlide();
}


showCurrentSlide();

arrowLeft.addEventListener('click', previousSlide);
arrowRight.addEventListener('click', nextSlide);

