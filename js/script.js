const swiperWrapper = document.querySelector('.swiper-wrapper'),
      slides = document.querySelectorAll('.swiper-slide'), 
      prevButton = document.querySelector('.prev'),
      nextButton = document.querySelector('.next'),
      indicators = document.querySelectorAll('.carousel__indicators-item'),
      winked = document.querySelector('.winked'),
      hot = document.querySelector('.hot'),
      hotButton = document.querySelector('.hot__button');

let currentIndex = 0;

//slider
function slide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    slide(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    slide(currentIndex);
});

slide(currentIndex);

//Modal Sophine
setTimeout(() => {
    winked.classList.add('show');
    
    setTimeout(() => {
        winked.classList.remove('show');
    }, 3000); 
}, 5000); 


//hot
hotButton.addEventListener('click', () => {
    hot.classList.add('hidden'); 
});