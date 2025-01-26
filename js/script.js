window.onload = function () {
  const swiper = new Swiper(".swiper", {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.next',
      prevEl: '.prev'
    },
    on: {
      init: function() {
        updateIndicators(this.realIndex);
      },
      slideChange: function() {
        updateIndicators(this.realIndex);
      }
    }
  });

  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");

  prevButton.addEventListener('click', () => {
    swiper.slidePrev();
    
  });

  nextButton.addEventListener('click', () => {
    swiper.slideNext(); 
  });
};

// //indicators
const swiperWrapper = document.querySelector(".swiper-wrapper");
const indicators = document.querySelectorAll(".carousel__indicators-item");
function updateIndicators(index) {
  indicators.forEach((indicator, i) => {
    indicator.style.backgroundColor = 
      i === index ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.4)";
  });
}


//Фон для изображений
document.addEventListener('DOMContentLoaded', () => {
    const girlImages = document.querySelectorAll('.girl__img');
    
    girlImages.forEach(container => {
      const img = container.querySelector('img');
      if (img) {
          const imgPath = img.getAttribute('src');
          
          container.classList.add('girl-container'); 
          container.style.backgroundImage = `url('${imgPath}')`;

            const overlay = document.createElement('div');
            overlay.classList.add('overlay-bg'); 
            container.appendChild(overlay);
            
            container.classList.add('container'); 
            img.classList.add('image'); 
        }
    });
});

// Sophine вам подмегнула 
  const winked = document.querySelector('.winked');
    setTimeout(() => {
      winked.classList.add("show");
    }, 5000)

// //+18 section
// const hot = document.querySelector(".hot");
// const hotButton = document.querySelector(".hot__button");
// hotButton.addEventListener('click', () => {
//     hot.classList.add('hidden');
// });

