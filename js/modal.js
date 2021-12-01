let hidden = document.querySelector(".hidden");
let modal = document.querySelector(".modal");
let modalContent = document.querySelector(".modal__content");
let collection = document.querySelector(".collection");

collection.onclick = function(e) {
    console.log(e.target.className)
    if (e.target.className.includes("collection__model") && e.target.className != "collection__models") {
        modalContent.style.backgroundImage = e.target.style.backgroundImage;
        hidden.classList.toggle("hidden");
    }
};

modal.onclick = function(e) {
    if (e.target.className != "") {
        hidden.classList.toggle("hidden");
    }
};