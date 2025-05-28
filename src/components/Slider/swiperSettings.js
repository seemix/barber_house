import { Autoplay, Navigation, Pagination } from 'swiper/modules';

export const swiperSettings = {
    autoplay: {
        delay: 6500,
        disableOnInteraction: false,
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
    pagination: {
        clickable: true,
    },
    autoHeight: true,
    slidesPerView: 1,
    spaceBetween: 10,
    lazy: {
        loadPrevNext: true,
        loadOnTransitionStart: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },

    loop: true,
    preloadImages: false,
    modules: [Pagination, Navigation, Autoplay],
};