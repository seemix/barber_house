import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import { buttonAnimation, headerAnimation } from './animations.js';
import css from './Slider.module.css';

const Slider = ({ showModal }) => {
    const { t } = useTranslation();
    return (
        <div className={css.slider} id={'top'}>
            <div className={css.slider_overlay}>
                <div className={css.welcome_wrapper}>
                    <motion.h1
                        key={showModal}
                        custom={1}
                        initial={'hidden'}
                        animate={'visible'}
                        variants={headerAnimation}
                    >{t('welcome')}
                    </motion.h1>
                </div>
                <div className={css.button_wrapper}>
                    <motion.div
                        key={showModal}
                        custom={2}
                        initial={'hidden'}
                        animate={'visible'}
                        variants={buttonAnimation}>
                        <button className={'booking_button'}>{t('book')}</button>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Slider;