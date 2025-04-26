import { Autoplay, Navigation } from 'swiper/modules';

export const swiperSettings = {
    autoplay: {
        delay: 5500,
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
    loop: true,
    modules: [Navigation, Autoplay],
};