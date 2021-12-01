const btnRight = document.querySelector(".collection__btn--right");
const btnLeft = document.querySelector(".collection__btn--left");
let models = document.querySelector(".collection__models").children;

const slideRight = 1;
const slideLeft = -1;

const cars = JSON.parse(data);

function getCollection() {
    let currentCollection = 0;

    function getNumberCollection(x = 0) {
        currentCollection += x;
        if (currentCollection > 2) {
            currentCollection = 0;
        } else if (currentCollection < 0) {
            currentCollection = 2;
        }
        return currentCollection;
    }
    return getNumberCollection;
}

let slide = getCollection();

btnRight.onclick = function() {
    loadImage(slide(slideRight));
};

btnLeft.onclick = function() {
    loadImage(slide(slideLeft));
};

function loadImage(number = 0) {
    for (i = 0; i < models.length; i++) {
        models[i].style.backgroundImage = 'url(' + './img/collection/' + cars[number].collection + '/' + i + '.jpg)';
        console.log(models[i].style.backgroundImage)
    }
}

loadImage();