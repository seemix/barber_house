import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import { barberCardAnimation, barberPictureAnimation } from './animations.js';
import { SectionCaption } from '../index.js';
import css from './About.module.css';

const About = () => {
    const { t } = useTranslation();
    return (
        <section id={'about us'}>
            <SectionCaption caption={'About us'}/>
            <motion.div className={'content_wrapper'}
                        custom={2}
                        initial={'hidden'}
                        whileInView={'visible'}
                        viewport={{ once: true }}
                        variants={barberCardAnimation}
            >
                <div className={'card ' + css.about_card}>
                    <motion.div className={css.about_text}
                                custom={3}
                                initial={'hidden'}
                                whileInView={'visible'}
                                viewport={{ once: true }}
                                variants={barberCardAnimation}>
                        <p>{t('about_p1')}</p>
                        <p>{t('about_p2')}  </p>
                        <p>{t('about_p3')}</p>
                        <p>{t('about_p4')}</p>
                        <p>{t('about_p5')}</p>
                    </motion.div>
                    <motion.div className={css.about_image}
                                custom={2}
                                initial={'hidden'}
                                whileInView={'visible'}
                                viewport={{ once: true }}
                                variants={barberPictureAnimation}/>
                </div>
            </motion.div>
        </section>
    );
};

export default About;