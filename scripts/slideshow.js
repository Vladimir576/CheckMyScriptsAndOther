
// Отзывы клиентов
// 
let reviewsSlides = document.querySelectorAll('.reviews__block-content');


let paginationCircles = document.querySelectorAll('.reviews__commentators-img');
let reviewsSlideIndex = 0;


function addActiveClass() {
    paginationCircles[reviewsSlideIndex].classList.add('reviews__commentators-img--active');
};

function removeActiveClass() {
    paginationCircles[reviewsSlideIndex].classList.remove('reviews__commentators-img--active');
};

function showSlide() {
    reviewsSlides[reviewsSlideIndex].classList.add('reviews__block-content--active');
};

function hideSlide() {
    reviewsSlides[reviewsSlideIndex].classList.remove('reviews__block-content--active');
};

function changeSlide(slideIndex) {
    removeActiveClass();
    hideSlide();
    reviewsSlideIndex = slideIndex;
    addActiveClass();
    showSlide();
};



function nextSlide() {
    let newSlideIndex = reviewsSlideIndex + 1;
    if (newSlideIndex > reviewsSlides.length - 1) {
        newSlideIndex = 0;
    }
    changeSlide(newSlideIndex);
};

function previousSlide(params) {
    let newSlideIndex = reviewsSlideIndex - 1;
    if (newSlideIndex < 0) {
        newSlideIndex = reviewsSlides.length - 1;
    };
    changeSlide(newSlideIndex);
};

function addPagination() {
    paginationCircles[0].classList.add("active");
    paginationCircles.forEach((circle, index) => {
        circle.addEventListener("click", () => changeSlide(index));
    });
}
addPagination();

