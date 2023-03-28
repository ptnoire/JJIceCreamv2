const display = document.querySelector('.img_displaycase');

const slider = function () {
    const dotContainer = document.querySelector('.dotContainer');
    const slides = document.querySelectorAll('.dc_i');
    const btnLeft = document.querySelector('.slider__btn--left');
    const btnRight = document.querySelector('.slider__btn--right');

    let curSlide = 0;
    const maxSlide = slides.length;
    const slideActivate = function(slide) {
      slides.forEach((s, i) => s.style.transform = `translateX(${115 * (i-slide)}%)`)
    }

    const createDots = function() {
      slides.forEach(function(_, i) {
        dotContainer.insertAdjacentHTML('beforeend', 
        `<button class="dots__dot" data-slide="${i}"><i class="fa-solid fa-cookie-bite"></i></button>`)
      })
    }

    const activateDot = function(slide) {
      document.querySelectorAll('.dots__dot').forEach(dot => dot.classList.remove('dots__dot--active'));
      document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active');
    }

    const nextSlide = function(){
      if(curSlide === maxSlide - 1) {
        curSlide = 0;
      }else{  curSlide++
      }
      slideActivate(curSlide);
      activateDot(curSlide);
    }

    const prevSlide = function(){
      if(curSlide === 0) {
        curSlide = maxSlide -1;
      } else{  curSlide--;
      }
      slideActivate(curSlide);
      activateDot(curSlide);
    }

    const startUp = function () {
        createDots();
        activateDot(0)
        slideActivate(0);
    }

    startUp();

    btnRight.addEventListener('click', nextSlide)
    btnLeft.addEventListener('click', prevSlide)
    document.addEventListener('keydown', function (e) {
      e.key === 'ArrowRight' && nextSlide();
      e.key === 'ArrowLeft' && prevSlide();
    })

    dotContainer.addEventListener('click', function(e) {
      if(e.target.classList.contains('dots__dot')) {
        const {slide} = e.target.dataset;
        slideActivate(slide);
        activateDot(slide);
      }
    })
  }
slider();