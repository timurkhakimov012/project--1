// const { default: Swiper } = require("swiper");

window.onload = function () {
  const swiper = new Swiper(".swiper", {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });
};

// const swiperWrapper = document.querySelector(".swiper-wrapper"),
//   slides = document.querySelectorAll(".swiper-slide"),
//   prevButton = document.querySelector(".prev"),
//   nextButton = document.querySelector(".next"),
//   indicators = document.querySelectorAll(".carousel__indicators-item"),
//   winked = document.querySelector(".winked"),
//   hot = document.querySelector(".hot"),
//   hotButton = document.querySelector(".hot__button");

// let currentIndex = 0;
// let startX = 0;
// let currentX = 0;
// let isSwiping = false;

// //slider
// function slide(index) {
//   slides.forEach((slide, i) => {
//     slide.style.display = i === index ? "block" : "none";
//   });
//   updateIndicators(index);
// }

// prevButton.addEventListener("click", () => {
//   currentIndex = (currentIndex - 1 + slides.length) % slides.length;
//   slide(currentIndex);
//   updateIndicators(currentIndex);
// });

// nextButton.addEventListener("click", () => {
//   currentIndex = (currentIndex + 1) % slides.length;
//   slide(currentIndex);
//   updateIndicators(currentIndex);
// });
// slide(currentIndex);

// //Modal Sophine
// setTimeout(() => {
//   winked.classList.add("show");
// }, 5000);

// //+18 section
// // hotButton.addEventListener('click', () => {
// //     hot.classList.add('hidden');
// // });

// //indicators
// function updateIndicators(index) {
//   indicators.forEach((indicator, i) => {
//     indicator.style.backgroundColor =
//       i === index ? "rgba(255, 255, 255)" : "#ccc";
//   });
// }

// //swiper mobile
// function handleSwipe() {
//   let diff = currentX - startX;
//   if (Math.abs(diff) > 50) {
//     if (diff > 0) {
//       currentIndex = (currentIndex - 1 + slides.length) % slides.length;
//     } else {
//       currentIndex = (currentIndex + 1) % slides.length;
//     }
//     slide(currentIndex);
//     updateIndicators(currentIndex);
//   }
// }

// swiperWrapper.addEventListener("touchstart", (e) => {
//   startX = e.touches[0].clientX;
//   isSwiping = true;
// });

// swiperWrapper.addEventListener("touchmove", (e) => {
//   if (!isSwiping) return;
//   event.preventDefault();
//   currentX = e.touches[0].clientX;
// });

// swiperWrapper.addEventListener("touchend", () => {
//   if (isSwiping) {
//     handleSwipe();
//     isSwiping = false;
//   }
// });
