import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import { barberCardAnimation, barberPictureAnimation } from './animations.js';
import { SectionCaption } from '../index.js';
import barber1 from './barber1.webp';
import css from './Barbers.module.css';

const Barbers = () => {
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
                    <motion.div className={css.barber_pic} style={{ backgroundImage: `url(${barber1}` }}
                                custom={2}
                                initial={'hidden'}
                                whileInView={'visible'}
                                viewport={{ once: true }}
                                variants={barberPictureAnimation}
                    >

                    </motion.div>
                    <div>
                        <motion.p
                            custom={2.5}
                            initial={'hidden'}
                            whileInView={'visible'}
                            viewport={{ once: true }}
                            variants={barberCardAnimation}>{t('about_p1')}
                        </motion.p>
                        <motion.p
                            custom={3}
                            initial={'hidden'}
                            whileInView={'visible'}
                            viewport={{ once: true }}
                            variants={barberCardAnimation}
                        >{t('about_p2')}
                        </motion.p>
                        <motion.p
                            custom={3.5}
                            initial={'hidden'}
                            whileInView={'visible'}
                            viewport={{ once: true }}
                            variants={barberCardAnimation}
                        >
                            {t('about_p3')}
                        </motion.p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Barbers;