import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import { BookingButton, SectionCaption } from '../index.js';
import { offerPictureAnimation, offerTextAnimation } from './animations.js';
import css from './Offers.module.css';

const Offers = () => {
    const { t } = useTranslation();

    return (
        <section id={'specialOffers'}>
            <SectionCaption caption={t('specialOffers')}/>
            <div className={'content_wrapper'}>
                <div className={'card ' + css.offers_card}>
                    <motion.div className={css.offer_image}
                                custom={2}
                                initial={'hidden'}
                                whileInView={'visible'}
                                viewport={{ once: true }}
                                variants={offerPictureAnimation}/>
                    <motion.div className={css.offer}
                                custom={3}
                                initial={'hidden'}
                                whileInView={'visible'}
                                viewport={{ once: true }}
                                variants={offerTextAnimation}
                    >
                        <p><b>{t('of1')}</b></p>
                        <p>
                            {t('of2')}
                        </p>
                        <div className={css.center}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <p><i>{t('of3')}</i></p>
                                <BookingButton/>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Offers;