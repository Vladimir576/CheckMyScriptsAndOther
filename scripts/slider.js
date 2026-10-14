var arrowLeft = document.querySelector('.choice__arrow--left');
var arrowRight = document.querySelector('.choice__arrow--right');
var slides = document.querySelectorAll('.choice__block');
var currentSlide = 0;

if (slides.length !== 0) {

    function showSlide(index, direction) {

        for (var i = 0; i < slides.length; i++) {
            slides[i].classList.remove('block');
            slides[i].classList.remove('choice__block--from-left');
            slides[i].classList.remove('choice__block--from-right');
        }

        var slide = slides[index];

        slide.classList.add('block');

        if (direction === 'next') {
            slide.classList.add('choice__block--from-right');
        } else {
            slide.classList.add('choice__block--from-left');
        }
    }

    function nextSlide() {
        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        showSlide(currentSlide, 'next');
    }

    function prevSlide() {
        currentSlide--;

        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }

        showSlide(currentSlide, 'prev');
    }

    showSlide(currentSlide, 'next');

    if (arrowLeft) {
        arrowLeft.addEventListener('click', prevSlide);
    }

    if (arrowRight) {
        arrowRight.addEventListener('click', nextSlide);
    }
}