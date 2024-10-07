// Аккордеон в меню гармошкой
// 
$(document).ready(function () {
    $('.carte__list-close').on('click', function (e) {
        let carteItem = $(this).closest('.carte__item'); 
        let allCarteItems = $('.carte__item'); 
        let carteListContent = carteItem.find('.carte__list-content'); 


        allCarteItems.each(function () {
            if ($(this).is(carteItem)) {
                return;
            }
           
            $(this).find('.carte__list-content').addClass('nonenone');
        });

        
        carteListContent.toggleClass('nonenone');
    });

    $('.carte__item-link').on('click', function (e) {
        e.preventDefault();
        let carteItem = $(this).closest('.carte__item'); 
        let allCarteItems = $('.carte__item'); 
        let carteListContent = carteItem.find('.carte__list-content'); 

       
        allCarteItems.each(function () {
            if ($(this).is(carteItem)) {
                return;
            }
            
            $(this).find('.carte__list-content').addClass('nonenone');
        });

        carteListContent.toggleClass('nonenone');
    });
});

