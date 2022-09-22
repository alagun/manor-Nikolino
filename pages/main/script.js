const images = document.querySelectorAll(".sslider .sslider__line img");
const sliderLine = document.querySelector(".sslider__line");
let count = 0;
let width;

function init() {
  console.log("resize");
  width = document.querySelector(".sslider").offsetWidth;
  sliderLine.style.width = width * images.length + "px";
  images.forEach((item) => {
    item.style.width = width + "px";
    item.style.height = "auto";
  });
  rollSlider();
}

window.addEventListener("resize", init);
init();

document.querySelector(".sslider-prev").addEventListener("click", function () {
  count--;
  if (count < 0) {
    count = images.length - 1;
  }
  rollSlider();
});

document.querySelector(".sslider-next").addEventListener("click", function () {
  count++;
  if (count >= images.length) {
    count = 0;
  }
  rollSlider();
});

function rollSlider() {
  sliderLine.style.transform = "translate(-" + width * count + "px)";
}

const hamb = document.querySelector("#hamb");
const body = document.body;
const popup = document.querySelector("#popup");

// При клике на иконку hamb вызываем ф-ию hambHandler
hamb.addEventListener("click", hambHandler);

// Выполняем действия при клике ..
function hambHandler(e) {
  e.preventDefault();
  // Переключаем стили элементов при клике
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  // renderPopup();
}

// Клонируем меню, чтобы задать свои стили для мобильной версии
const story = document.querySelector("#link1");
const service = document.querySelector("#link2");
const slider = document.querySelector("#link3");
const customers = document.querySelector("#link4");
const contacts = document.querySelector("#link5");

story.addEventListener("click", closeOnClick);
service.addEventListener("click", closeOnClick);
slider.addEventListener("click", closeOnClick);
customers.addEventListener("click", closeOnClick);
contacts.addEventListener("click", closeOnClick);

// Код для закрытия меню при нажатии на ссылку
const links = Array.from(menu.children);

// Для каждого элемента меню при клике вызываем ф-ию
links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

// Закрытие попапа при клике на меню
function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}
