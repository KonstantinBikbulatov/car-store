let headerBtn = document.querySelector('.header__btn');

headerBtn.onclick = function() {
    localStorage.setItem("someNumber", swiper.realIndex);
    console.log(localStorage.getItem("someNumber"))
};