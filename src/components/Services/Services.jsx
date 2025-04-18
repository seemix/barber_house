import { useTranslation } from 'react-i18next';
import { GiRazor } from 'react-icons/gi';
import { RiScissors2Fill } from 'react-icons/ri';
import { TbDiscountCheck } from 'react-icons/tb';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { motion } from 'framer-motion';

import { SectionCaption } from '../index.js';
import PriceGenerator from './PriceGenerator.jsx';
import { block1, block2 } from './data.js';
import { cardAnimation, highLightAnimation } from './animations.js';
import css from './Services.module.css';

const Services = () => {
    const { t } = useTranslation();

    return (
        <section id={'services'}>
            <SectionCaption caption={'Services'}/>
            <motion.div className={css.highlight}
                        initial={'hidden'}
                        whileInView={'visible'}
                        viewport={{ once: true }}
                        variants={highLightAnimation}
                        custom={3}

            >
                <big>{t('siHeader')}</big>
                <ul>
                    <li>✔ {t('si1')}</li>
                    <li>✔ {t('si2')}</li>
                    <li>✔ {t('si3')}</li>
                    <li>✔ {t('si4')}</li>
                </ul>
            </motion.div>
            <div className={'content_wrapper'}>
                <motion.div className={'card ' + css.service_card}
                            custom={2}
                            initial={'hidden'}
                            whileInView={'visible'}
                            viewport={{ once: true }}
                            variants={cardAnimation}
                >
                    <div className={css.card_icon_wrap}>
                        <RiScissors2Fill/>
                    </div>
                    <PriceGenerator data={block1}/>
                </motion.div>
                <motion.div className={'card ' + css.service_card}
                            custom={2.5}
                            initial={'hidden'}
                            whileInView={'visible'}
                            viewport={{ once: true }}
                            variants={cardAnimation}
                >
                    <div className={css.card_icon_wrap}>
                        <GiRazor/>
                    </div>
                    <PriceGenerator data={block2}/>
                </motion.div>

                <motion.div className={'card ' + css.service_card}
                            custom={3}
                            initial={'hidden'}
                            whileInView={'visible'}
                            viewport={{ once: true }}
                            variants={cardAnimation}
                >
                    <div className={css.card_icon_wrap}>
                        <TbDiscountCheck/>
                    </div>
                    <h4 style={{ fontSize: '1em', marginTop: 0 }}>{t('Prices')}</h4>
                    <div className={css.discounts}>
                        <p><IoIosCheckmarkCircleOutline size={'1.2em'}/> {t('every1')}</p>
                        <p><IoIosCheckmarkCircleOutline size={'1.2em'}/> {t('every2')}</p>
                        <p><IoIosCheckmarkCircleOutline size={'1.2em'}/> Here you can pay with MobilePay</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;