// const menuItems = document.querySelectorAll('.fixed-menu__item');
// const anchorLinks = document.querySelectorAll('.nav__link');
// var modalLinks = document.querySelectorAll('.modal-item__link');
// const makeOrderButtons = document.querySelectorAll('.makeOrder');
// let itemsLength = menuItems.length * 100;
// let wrapperVH = document.getElementById('wrapper');
// let currentTranslateY = 0;
// let isAnimating = false;
// var modalSectionDisplay = window.getComputedStyle(modalSection).getPropertyValue("display");
// var headerZIndex = document.querySelector('.header')



// function toUp() {
//     $('html, body').animate({ scrollTop: 0 }, 'smooth');
// };

// toUp();


// // Функция для обновления активного элемента меню
// function updateActiveMenuItem(index) {
//     menuItems.forEach((item, i) => {
//         if (i === index) {
//             item.classList.add('fixed-menu__item--active');
//         } else {
//             item.classList.remove('fixed-menu__item--active');
//         }
//     });
// }
// // 



// // Обработчик клика по пунктам меню
// menuItems.forEach((item, index) => {
//     item.addEventListener('click', (e) => {
//         e.preventDefault();
//         if (isAnimating) return;


//         currentTranslateY = -index * 100;
//         wrapperVH.style.transform = `translateY(${currentTranslateY}vh)`;


//         updateActiveMenuItem(index);

//         isAnimating = true; 

//         setTimeout(() => {
//             isAnimating = false;
//         }, 1000);
//     });
// });

// // Обработчик прокрутки колесиком мыши
// document.addEventListener('wheel', function (event) {
//     if (isAnimating) {
//         event.preventDefault();
//         return;
//     }

//     // Прокрутка вниз
//     if (event.deltaY > 0 && currentTranslateY > -itemsLength + 100) {
//         currentTranslateY -= 100;
//         wrapperVH.style.transform = `translateY(${currentTranslateY}vh)`;
//         updateActiveMenuItem(Math.abs(currentTranslateY / 100)); 
//     }

//     // Прокрутка вверх
//     if (event.deltaY < 0 && currentTranslateY < 0) {
//         currentTranslateY += 100;
//         wrapperVH.style.transform = `translateY(${currentTranslateY}vh)`;
//         updateActiveMenuItem(Math.abs(currentTranslateY / 100));
//     }


//     isAnimating = true;


//     setTimeout(() => {
//         isAnimating = false;
//     }, 1000);
// });





// // Модальное меню при 768px  

// modalLinks.forEach((link, index) => {
//     link.addEventListener('click', (e) => {
//         e.preventDefault();
//         if (isAnimating) return;


//         link.addEventListener('click', function () {
//             headerZIndex.style.display = "block";
//             modalSection.style.display = "none";
//         })


//         if (index === 0) return;

//         if (index === 1) {
//             currentTranslateY = -200;
//             updateActiveMenuItem(2);
//         } else if (index === modalLinks.length - 1) {
//             currentTranslateY = -((index + 1) * 100 + 100);
//             updateActiveMenuItem(index + 2);
//         } else {
//             currentTranslateY = -((index + 1) * 100);
//             updateActiveMenuItem(index + 1);
//         }

//         wrapperVH.style.transform = `translateY(${currentTranslateY}vh)`;

//         isAnimating = true;


//         setTimeout(() => {
//             isAnimating = false;
//         }, 1000);
//     });
// });
// // 
// // 


// // Навигация в хедере
// // Обработчик клика по ссылкам с классом nav__link
// anchorLinks.forEach((link, index) => {
//     link.addEventListener('click', (e) => {
//         e.preventDefault();
//         if (isAnimating) return;


//         if (index === 0) return;

//         if (index === 1) {
//             currentTranslateY = -200;
//             updateActiveMenuItem(2);
//         } else if (index === anchorLinks.length - 1) {
//             currentTranslateY = -((index + 1) * 100 + 100);
//             updateActiveMenuItem(index + 2);
//         } else {
//             currentTranslateY = -((index + 1) * 100);
//             updateActiveMenuItem(index + 1);
//         }

//         wrapperVH.style.transform = `translateY(${currentTranslateY}vh)`;

//         isAnimating = true;

//         setTimeout(() => {
//             isAnimating = false;
//         }, 1000);
//     });
// });
// // 
// // 


// // Кнопки заказа переход на delivery
// // 
// makeOrderButtons.forEach((button) => {
//     button.addEventListener('click', (e) => {
//         e.preventDefault();
//         if (isAnimating) return;

//         currentTranslateY = -700;
//         wrapperVH.style.transform = `translateY(${currentTranslateY}vh)`;

//         updateActiveMenuItem(7);

//         isAnimating = true;


//         setTimeout(() => {
//             isAnimating = false;
//         }, 1000);
//     });
// });
// // 
// // 

// const sections = $('.section');
// const display = $('.wrapper');
// let inscroll = false;

// const performTransiton = sectionEq => {
//     if (inscroll) return;
//     inscroll = true;

//     const position = `${sectionEq * -100}vh`;

//     display.css({
//         transform: `translateY(${position})`,
//         transition: "transform 1s ease-in-out" // Явно указываем анимацию
//     });

//     setTimeout(() => {
//         sections.removeClass("active").eq(sectionEq).addClass("active");
//         inscroll = false;
//     }, 1450); // Время transition
// };


// const scrollToSection = direction => {
//     const activeSection = sections.filter('.active');
//     const nextSection = activeSection.next();
//     const prevSection = activeSection.prev();

//     if (direction === 'next' && nextSection.length) {
//         performTransiton(nextSection.index());
//     }

//     if (direction === 'prev' && prevSection.length) {
//         performTransiton(prevSection.index());
//     }
// }

// display.on('wheel', e => {
//     const deltaY = e.originalEvent.deltaY;

//     if (deltaY > 0) {
//         scrollToSection('next');
//     }

//     if (deltaY < 0) {
//         // performTransiton(3);
//         scrollToSection('prev');
//     }

//     // console.log
// })



const sections = $(".section");
const display = $(".wrapper");
let inscroll = false;
const switchActiveClassSideMenu = menuItemIndex => {
    $('.fixed-menu__item').eq(menuItemIndex).addClass('fixed-menu__item--active').siblings().removeClass('fixed-menu__item--active');
}

// Ставим .active на первую секцию при загрузке
sections.first().addClass("active");

const performTransition = (sectionEq) => {
    if (inscroll || sectionEq < 0 || sectionEq >= sections.length) return;
    inscroll = true;

    const position = `${sectionEq * -100}vh`;

    console.log(`Переход к секции: ${sectionEq}, Координата: ${position}`);

    // Обновляем .active перед анимацией
    sections.removeClass("active").eq(sectionEq).addClass("active");

    requestAnimationFrame(() => {
        display.css({
            transform: `translateY(${position})`,
            transition: "transform 1s ease-in-out"
        });

        setTimeout(() => {
            switchActiveClassSideMenu(sectionEq);
            inscroll = false;

        }, 1450);
    });
};

const scrollToSection = (direction) => {
    const activeIndex = sections.index($(".section.active"));
    let targetIndex = activeIndex;

    if (direction === "next" && activeIndex < sections.length - 1) {
        targetIndex++;
    } else if (direction === "prev" && activeIndex > 0) {
        targetIndex--;
    } else {
        return;
    }

    console.log(`Активная секция: ${activeIndex}, Целевая секция: ${targetIndex}`);

    performTransition(targetIndex);
};

display.on("wheel", (e) => {
    if (inscroll) return;

    const deltaY = e.originalEvent.deltaY;

    if (deltaY > 0) {
        scrollToSection("next");
    } else if (deltaY < 0) {
        scrollToSection("prev");
    }
});

$(document).on('keydown', e => {
    // console.log(e.keyCode);
    switch (e.keyCode) {

        case 38:
            scrollToSection('prev');
            break;

        case 40:
            scrollToSection('next');
            break;
    }
});

$("[data-scroll-to]").on('click', e => {
    e.preventDefault();

    const target = $(e.currentTarget).attr('data-scroll-to');

    performTransition(target);
})

$('.wrapper').on('touchmove', e=>{
    e.preventDefault();
})

$(window).swipe({
    swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
        // $(this).text("You swiped " + direction );  
        // alert(direction);
        const nextOrPrev = direction === 'up' ? 'next' : 'prev';
        scrollToSection(nextOrPrev);
    }
});