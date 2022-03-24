const Swiper1 = new Swiper(".idc-swiper1", {
    // Default parameters
    loop: true,
    direction: "horizontal",
    slidesPerView: 1,
    spaceBetween: 25,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    touchReleaseOnEdges: true,
    allowTouchMove: true,
    /*    grabCursor: true, */
    watchOverflow: true,
    grabCursor: true,
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: ".idc-swiper1 .idc-swiper-pagination",
        type: "bullets",
        clickable: true,
    },
});
const Swiper2 = new Swiper(".idc-swiper2", {
    // Default parameters
    loop: false,
    direction: "horizontal",
    slidesPerView: 3,
    spaceBetween: 25,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    touchReleaseOnEdges: true,
    allowTouchMove: true,
    /*    grabCursor: true, */
    watchOverflow: true,
    grabCursor: false,
    navigation: {
        nextEl: ".idc-swiper2 .idc-swiper-button-next",
        prevEl: ".idc-swiper2 .idc-swiper-button-prev",
    },
});
const Swiper3 = new Swiper(".idc-swiper3", {
    // Default parameters
    loop: true,
    direction: "horizontal",
    slidesPerView: 1,
    spaceBetween: 25,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    touchReleaseOnEdges: true,
    allowTouchMove: true,
    /*    grabCursor: true, */
    watchOverflow: true,
    grabCursor: false,
    navigation: {
        nextEl: ".idc-subunit .idc-swiper-button-next",
        prevEl: ".idc-subunit .idc-swiper-button-prev",
    },
});
// const Swiper1 = new Swiper('.idc-swiper1', {
//     // Default parameters
//     loop: false,
//     direction: "horizontal",
//     slidesPerView: 1,
//     spaceBetween: 25,
//     watchSlidesVisibility: true,
//     watchSlidesProgress: true,
//     touchReleaseOnEdges: true,
//     allowTouchMove: true,
//     /*    grabCursor: true, */
//     watchOverflow: true,
//     grabCursor: true,

//     pagination: {
//         el: ".idc-swiper1 .idc-swiper-pagination",
//         type: "bullets",
//         clickable: true,
//     },
//     navigation: {
//         nextEl: ".idc-swiper1 .idc-swiper-button-next",
//         prevEl: ".idc-swiper-button-prev",

//     },
// });
