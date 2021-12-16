let hidden = document.querySelector(".hidden");
let modal = document.querySelector(".modal");
let modalContent = document.querySelector(".modal__content");


window.onclick = function(e) {
    console.log(e.target.className)
    if (e.target.className.includes("modal__item") && screen.width > 800) {
        modalContent.style.backgroundImage = 'url(' + e.target.getAttribute('src') + ')';
        console.log(screen.width);
        hidden.classList.toggle("hidden");
    }
};

modal.onclick = function(e) {
    if (e.target.className != "") {
        hidden.classList.toggle("hidden");
    }
};