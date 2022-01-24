const examplesSlider = document.querySelector('.examples__slider');
if (examplesSlider) {
  const examplesSliders = new Swiper(examplesSlider, {
    wrapperClass: 'examples__list',
    slideClass: 'examples__slide',

    /* решение с box-shadow у слайдера */
    slideNextClass: 'examples__slide--next',
    slidePrevClass: 'examples__slide--prev',
    slideActiveClass: 'examples__slide--active',
    slideDuplicateClass: 'examples__slide--dupl',
    /*---------------------------------*/
    loop: true,
    slidesPerView: 2,

    // spaceBetween: 87,
    navigation: {
      nextEl: '.arrow--next',
      prevEl: '.arrow--prev',
    },
    pagination: {
      el: '.examples__fraction',
      currentClass: 'fraction__current',
      type: 'fraction',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 50,
      },
      556: {
        slidesPerView: 1,
        spaceBetween: 100,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 87,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 2,
      },
      1400: {
        slidesPerView: 2,
      },
    }
  })
}

const tesimonialsSlider = document.querySelector('.testimonials__slider');
if (tesimonialsSlider) {
  const tesimonialsSliders = new Swiper(tesimonialsSlider, {
    wrapperClass: 'testimonials__list',
    slideClass: 'testimonials__slide',

    /* решение с box-shadow у слайдера */
    slideNextClass: 'testimonials__slide--next',
    slideActiveClass: 'testimonials__slide--active',
    /*---------------------------------*/

    loop: true,
    slidesPerView: 1,
    spaceBetween: 80,
    navigation: {
      nextEl: '.arrow--next',
      prevEl: '.arrow--prev',
    },
    pagination: {
      el: '.testimonials__fraction',
      currentClass: 'fraction__current',
      type: 'fraction',
    },
    breakpoints: {
      576: {
        slidesPerView: 1.5,
        spaceBetween: 15,

      },
      768: {
        slidesPerView: 1.8,
        spaceBetween: 15,

      },
      1024: {
        spaceBetween: 15,
        slidesPerView: 3,
      }
    }
  })
}
