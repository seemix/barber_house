import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import { barberCardAnimation } from './animations.js';
import { SectionCaption } from '../index.js';
import barber1 from './barber1.webp';
import css from './Barbers.module.css';

const Barbers = () => {
    const { t } = useTranslation();
    return (
        <section id={'about us'}>
            <SectionCaption caption={'About us'}/>
            <motion.div className={'content_wrapper'}
                        custom={3}
                        initial={'hidden'}
                        whileInView={'visible'}
                        viewport={{ once: true }}
                        variants={barberCardAnimation}

            >
                {/*<div className={'card'}>*/}
                {/*    <div className={css.barber_pic_wrapper}>*/}
                {/*        <div className={css.barber_pic} style={{ backgroundImage: `url(${barber1}` }}></div>*/}
                {/*    </div>*/}
                {/*    <div className={css.barber_bottom}>*/}
                {/*        <h3>Ciprian Maftei</h3>*/}
                {/*        <h4>top barber</h4>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className={'card ' + css.about_card}>
                    <div className={css.barber_pic} style={{ backgroundImage: `url(${barber1}` }}></div>
                    <div>
                        <p>{t('about_p1')}</p>
                        <p>{t('about_p2')}</p>
                        <p>{t('about_p3')}</p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Barbers;