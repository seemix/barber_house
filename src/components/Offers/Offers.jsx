import { useQuery } from '@apollo/client';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Parser as HtmlToReactParser } from 'html-to-react';

import { BookingButton, Loader, SectionCaption } from '../index.js';
import { offerImageAnimation, offerTextAnimation } from './animations.js';
import { OFFERS, offersMapper } from './query.js';
import css from './Offers.module.css';

const Offers = () => {
    const { t, i18n } = useTranslation();
    const { data, loading } = useQuery(OFFERS(i18n.language));
    const parser = new HtmlToReactParser();

    const offers = data ? offersMapper(data) : [];

    return (
        <section id="specialOffers">
            <SectionCaption caption={t('specialOffers')}/>
            <div className="content_wrapper">
                <div className={`card ${css.offers_card}`}>
                    {!loading && <motion.div
                        className={css.offer_image}
                        custom={2}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={offerImageAnimation}
                    />}
                    {loading && <Loader/>}
                    {offers[0] && (
                        <motion.div
                            className={css.offer}
                            custom={3}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={offerTextAnimation}
                        >
                            <h3>{offers[0]?.title}</h3>
                            {parser.parse(offers[0]?.content || '')}
                            <div className={css.center}>
                                <div className={css.button_wrapper}>
                                    <BookingButton/>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Offers;
