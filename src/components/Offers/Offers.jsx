import { motion } from 'framer-motion';

import { BookingButton, SectionCaption } from '../index.js';
import { offerPictureAnimation, offerTextAnimation } from './animations.js';
import css from './Offers.module.css';

const Offers = () => {
    return (
        <section id={'specialOffers'}>
            <SectionCaption caption={'Special Offers'}/>
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
                        <p><b>Bring a Friend – Get Rewarded!</b></p>
                        <p>
                            Book your haircut together with a friend and you’ll both get 30% off your next visit.
                            Fresh fades, good vibes, and a deal worth sharing.</p>
                        <div className={css.center}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <p><i>Offer valid for a limited time. Don’t miss out!</i></p>
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