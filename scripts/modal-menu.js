var modalSection = document.querySelector(".modal-section");
var modalSectionDisplay = window.getComputedStyle(modalSection).getPropertyValue("display");
var headerZIndex = document.querySelector('.header')
var closeBtn = document.querySelector(".modal-menu__close");
var headerZIndexDisplay = window.getComputedStyle(headerZIndex).getPropertyValue("display");


var openBtn = document.querySelector(".header__more-button");

openBtn.onclick = function () {
    // console.log(modalSectionDisplay);
    if (modalSectionDisplay === "none") {
        console.log("open")
        headerZIndex.style.display = "none";
        modalSection.style.display = "flex";
    }
}

closeBtn.addEventListener("click", function () {
    console.log("close")
    headerZIndex.style.display = "block";
    modalSection.style.display = "none";

});




