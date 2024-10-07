
// Секция команды
// 
$(document).ready(function () {
    $('.crew-item__top-line').on('click', function (e) {
        let crewItem = $(this).closest('.crew-item');

        let allCrewItems = $('.crew-item');

        allCrewItems.each(function () {
            if ($(this).is(crewItem)) {
                return;
            }

            let underLine = $(this).find('.crew-item__under-line');
            let arrowAnim = $(this).find('.crew-item__name-png');
            let paddingActive = $(this).find('.crew-item__top-line');

            underLine.removeClass('crew-item__under-line--active');
            arrowAnim.removeClass('crew-item__name-png--active');
            paddingActive.removeClass('crew-item__top-line--active');
        });


        let underLine = crewItem.find('.crew-item__under-line');
        let arrowAnim = crewItem.find('.crew-item__name-png');
        let paddingActive = crewItem.find('.crew-item__top-line');

        paddingActive.toggleClass('crew-item__top-line--active');
        arrowAnim.toggleClass('crew-item__name-png--active');
        underLine.toggleClass('crew-item__under-line--active');
    });
});

