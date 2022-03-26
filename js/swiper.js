const slider = document.querySelector('.menu-slider');
const wrapper = document.querySelector('.menu-slider__wrapper');
let mySwiper;

function mobileSlider() {
  if (window.innerWidth < 768 && slider.dataset.mobile == 'false') {
    wrapper.classList.add('swiper-wrapper');
    slider.classList.add('swiper');
    mySwiper = new Swiper( slider, {
      
      loop: 'true',

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        
      },

      slidesPerView: 'auto',
      slideClass: 'menu-slider__slide',
    });
    slider.dataset.mobile = 'true';
  }

  if (window.innerWidth >= 768) {
    wrapper.classList.remove('swiper-wrapper');
    slider.classList.remove('swiper');
    slider.dataset.mobile = 'false';
    if (slider.classList.contains('swiper-initialized')) {
      mySwiper.destroy();
    }
    
    
  }
}

mobileSlider();
window.addEventListener('resize', function () {
  mobileSlider();
});

const expand = document.querySelector('.menu-slider__button-next');


expand.addEventListener('click', function(evt) {
  evt.preventDefault;
  wrapper.classList.toggle('menu-slider__wrapper--closed');
});