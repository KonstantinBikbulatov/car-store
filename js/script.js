const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
let timeOut = true;
swiper.on('slideChange', function() {
    console.log(swiper.realIndex);
    let header = document.querySelector("header");
    header.style.backgroundImage = 'url(' + './img/header/' + swiper.realIndex + '.avif)';

});

document.querySelector("header").style.backgroundImage = 'url(' + './img/header/0.avif)';