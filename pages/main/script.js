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
