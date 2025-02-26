// const menuItems = document.querySelectorAll('.fixed-menu__item');
// let itemsLength = menuItems.length * 100;
// let wrapperVH = document.getElementById('wrapper');
// let currentTranslateY = 0;
// let isAnimating = false;



// function updateActiveMenuItem(index) {
//     menuItems.forEach((item, i) => {
//         if (i === index) {
//             item.classList.add('fixed-menu__item--active');
//         } else { 
//             item.classList.remove('fixed-menu__item--active');
//         }
//     });
// }


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

// document.addEventListener('wheel', function (event) {
//     if (isAnimating) {
//         event.preventDefault();
//         return;
//     }

//     if (event.deltaY > 0 && currentTranslateY > -itemsLength + 100) {
//         currentTranslateY -= 100;
//         wrapperVH.style.transform = `translateY(${currentTranslateY}vh)`;
//         isAnimating = true;

//         setTimeout(() => {
//             isAnimating = false;
//         }, 1000);
//     }

//     else if (event.deltaY < 0 && currentTranslateY < 0) {
//         currentTranslateY += 100;
//         wrapperVH.style.transform = `translateY(${currentTranslateY}vh)`;
//         isAnimating = true;

//         setTimeout(() => {
//             isAnimating = false;
//         }, 1000);
//     }

//     let currentIndex = Math.abs(currentTranslateY / 100);
//     updateActiveMenuItem(currentIndex);


// });









const menuItems = document.querySelectorAll('.fixed-menu__item');
const anchorLinks = document.querySelectorAll('.nav__link');
var modalLinks = document.querySelectorAll('.modal-item__link');
const makeOrderButtons = document.querySelectorAll('.makeOrder');
let itemsLength = menuItems.length * 100;
let wrapperVH = document.getElementById('wrapper');
let currentTranslateY = 0;
let isAnimating = false;
var modalSectionDisplay = window.getComputedStyle(modalSection).getPropertyValue("display");
var headerZIndex = document.querySelector('.header')



function toUp() {
    $('html, body').animate({ scrollTop: 0 }, 'smooth');
};

toUp();


// Функция для обновления активного элемента меню
function updateActiveMenuItem(index) {
    menuItems.forEach((item, i) => {
        if (i === index) {
            item.classList.add('fixed-menu__item--active');
        } else {
            item.classList.remove('fixed-menu__item--active');
        }
    });
}
// 



// Обработчик клика по пунктам меню
menuItems.forEach((item, index) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        if (isAnimating) return;

     
        currentTranslateY = -index * 100;
        wrapperVH.style.transform = `translateY(${currentTranslateY}vh)`;


        updateActiveMenuItem(index);

        isAnimating = true; 

        setTimeout(() => {
            isAnimating = false;
        }, 1000);
    });
});

// Обработчик прокрутки колесиком мыши
document.addEventListener('wheel', function (event) {
    if (isAnimating) {
        event.preventDefault();
        return;
    }

    // Прокрутка вниз
    if (event.deltaY > 0 && currentTranslateY > -itemsLength + 100) {
        currentTranslateY -= 100;
        wrapperVH.style.transform = `translateY(${currentTranslateY}vh)`;
        updateActiveMenuItem(Math.abs(currentTranslateY / 100)); 
    }

    // Прокрутка вверх
    if (event.deltaY < 0 && currentTranslateY < 0) {
        currentTranslateY += 100;
        wrapperVH.style.transform = `translateY(${currentTranslateY}vh)`;
        updateActiveMenuItem(Math.abs(currentTranslateY / 100));
    }

  
    isAnimating = true;

   
    setTimeout(() => {
        isAnimating = false;
    }, 1000);
});





// Модальное меню при 768px  
// 
modalLinks.forEach((link, index) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        if (isAnimating) return;


        link.addEventListener('click', function () {
            headerZIndex.style.display = "block";
            modalSection.style.display = "none";
        })


        if (index === 0) return;

        if (index === 1) {
            currentTranslateY = -200;
            updateActiveMenuItem(2);
        } else if (index === modalLinks.length - 1) {
            currentTranslateY = -((index + 1) * 100 + 100);
            updateActiveMenuItem(index + 2);
        } else {
            currentTranslateY = -((index + 1) * 100);
            updateActiveMenuItem(index + 1);
        }

        wrapperVH.style.transform = `translateY(${currentTranslateY}vh)`;

        isAnimating = true;


        setTimeout(() => {
            isAnimating = false;
        }, 1000);
    });
});
// 
// 


// Навигация в хедере
// Обработчик клика по ссылкам с классом nav__link
anchorLinks.forEach((link, index) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        if (isAnimating) return;


        if (index === 0) return;

        if (index === 1) {
            currentTranslateY = -200;
            updateActiveMenuItem(2);
        } else if (index === anchorLinks.length - 1) {
            currentTranslateY = -((index + 1) * 100 + 100);
            updateActiveMenuItem(index + 2);
        } else {
            currentTranslateY = -((index + 1) * 100);
            updateActiveMenuItem(index + 1);
        }

        wrapperVH.style.transform = `translateY(${currentTranslateY}vh)`;

        isAnimating = true;

        setTimeout(() => {
            isAnimating = false;
        }, 1000);
    });
});
// 
// 


// Кнопки заказа переход на delivery
// 
makeOrderButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        if (isAnimating) return;

        currentTranslateY = -700;
        wrapperVH.style.transform = `translateY(${currentTranslateY}vh)`;

        updateActiveMenuItem(7);

        isAnimating = true;


        setTimeout(() => {
            isAnimating = false;
        }, 1000);
    });
});
// 
// 