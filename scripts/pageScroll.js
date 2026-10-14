const sections = $(".section");
const display = $(".wrapper");
let inscroll = false;
const switchActiveClassSideMenu = menuItemIndex => {
    $('.fixed-menu__item').eq(menuItemIndex).addClass('fixed-menu__item--active').siblings().removeClass('fixed-menu__item--active');
}


sections.first().addClass("active");

const performTransition = (sectionEq) => {
    if (inscroll || sectionEq < 0 || sectionEq >= sections.length) return;
    inscroll = true;

    const position = `${sectionEq * -100}vh`;
   
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
$(".makeOrder").on('click', e => {
    e.preventDefault();
    performTransition(7);
});
$('.wrapper').on('touchmove', e=>{
    e.preventDefault();
})

$(window).swipe({
    swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
        const nextOrPrev = direction === 'up' ? 'next' : 'prev';
        scrollToSection(nextOrPrev);
    }
});