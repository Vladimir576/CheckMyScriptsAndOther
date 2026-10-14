var reviewsSlides = document.querySelectorAll('.reviews__block-content');
var paginationCircles = document.querySelectorAll('.reviews__commentators-img');
var reviewsSlideIndex = 0;

if (reviewsSlides.length === 0 || paginationCircles.length === 0) {
} else {
    function addActive() {
        var circle = paginationCircles[reviewsSlideIndex];
        if (circle) {
            circle.classList.add('reviews__commentators-img--active');
        }
    }

    function removeActive() {
        var circle = paginationCircles[reviewsSlideIndex];
        if (circle) {
            circle.classList.remove('reviews__commentators-img--active');
        }
    }

    function showSlide() {
        for (var i = 0; i < reviewsSlides.length; i++) {
            if (i === reviewsSlideIndex) {
                reviewsSlides[i].classList.add('reviews__block-content--active');
            } else {
                reviewsSlides[i].classList.remove('reviews__block-content--active');
            }
        }
    }

    function changeSlide(index) {
        removeActive();
        reviewsSlideIndex = index;
        addActive();
        showSlide();
    }

    function nextSlide() {
        var newIndex = reviewsSlideIndex + 1;
        if (newIndex >= reviewsSlides.length) {
            newIndex = 0;
        }
        changeSlide(newIndex);
    }

    function prevSlide() {
        var newIndex = reviewsSlideIndex - 1;
        if (newIndex < 0) {
            newIndex = reviewsSlides.length - 1;
        }
        changeSlide(newIndex);
    }

    for (var i = 0; i < paginationCircles.length; i++) {
        paginationCircles[i].addEventListener('click', function(index) {
            return function() {
                changeSlide(index);
            };
        }(i));
    }

    showSlide();
    addActive();

    window.reviewsSlider = {
        nextSlide: nextSlide,
        prevSlide: prevSlide,
        changeSlide: changeSlide
    };
}

