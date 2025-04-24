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
    breakpoints: {
        '@0.00': {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        '@0.50': {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        '@0.60': {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        '@0.75': {
            slidesPerView: 2,
            spaceBetween: 0,
        },
        '@1.00': {
            slidesPerView: 2,
            spaceBetween: 0,
        },
        '@1.25': {
            slidesPerView: 3,
            spaceBetween: 0,
        },
        '@1.50': {
            slidesPerView: 3,
            spaceBetween: 0,
        },
        '@1.80': {
            slidesPerView: 3,
            spaceBetween: 0,
        },
    },
    loop: true,
    modules: [Pagination, Navigation, Autoplay],
};