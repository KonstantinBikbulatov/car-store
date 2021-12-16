let index = localStorage.getItem("someNumber");

const cars = JSON.parse(data);
let placeolder = document.querySelector(".contents__placeholder").children;

document.querySelector(".header-second__title").textContent = cars[index].name;
document.querySelector(".contents__breadcrumbs-model").textContent = cars[index].name;
document.querySelector(".contents__title--red").textContent = cars[index].price;


for (var i = 0; i < placeolder.length; i++) {
    let img = document.createElement("IMG");
    img.classList.add('modal__item');
    img.src = './img/collection/' + cars[index].collection + '/' + i + '.jpg';
    placeolder[i].appendChild(img);

}