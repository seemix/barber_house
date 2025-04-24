import { useTranslation } from 'react-i18next';
import { useQuery } from '@apollo/client';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { BookingButton } from '../index.js';
import { buttonAnimation, headerAnimation } from './animations.js';
import { swiperSettings } from './swiperSettings.js';
import { ALL_SLIDES, slideMapper } from './query.js';
import css from './Slider.module.css';

const Slider = () => {
    const { data, loading, error } = useQuery(ALL_SLIDES);
    let slides;
    if (data) slides = slideMapper(data);
    {
        loading && <h2>loading...</h2>
    }
    {
        error && <h1>error</h1>
    }
    // const slides = [sl2, sl8, sl3, sl5, sl6, sl7, sl10, sl9];
    const { t } = useTranslation();
    return (
        <div className={css.slider} id={'top'}>
            <Swiper
                style={{ zIndex: 0 }}
                {...swiperSettings}
            >
                {slides &&
                    slides.map((slide, index) => <SwiperSlide key={index}>
                        <div className={css.slider_image} style={{ backgroundImage: `url(${slide})` }}/>
                        <div className={css.slider_overlay}/>
                    </SwiperSlide>)
                }
            </Swiper>
            <div className={css.button_wrapper}>
                <motion.h1
                    // key={showModal}
                    custom={1.5}
                    initial={'hidden'}
                    animate={'visible'}
                    variants={headerAnimation}
                >{t('welcome')}
                </motion.h1>
                <motion.div
                    // key={showModal}
                    custom={2.5}
                    initial={'hidden'}
                    animate={'visible'}
                    variants={buttonAnimation}>
                    <BookingButton/>
                </motion.div>
            </div>
            <div className={css.welcome_wrapper}>

            </div>
        </div>
    );
};

export default Slider;