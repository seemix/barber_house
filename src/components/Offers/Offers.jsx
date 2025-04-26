import { useQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';

import { Loader, SectionCaption } from '../index.js';
import { OFFERS, offersMapper } from './query.js';
import OffersSlider from './OffersSlider/OffersSlider.jsx';
import css from './Offers.module.css';

const Offers = () => {
    const { t, i18n } = useTranslation();
    const { data, loading } = useQuery(OFFERS(i18n.language));
    let offers = data ? offersMapper(data) : [];

    return (
        <section id="specialOffers">
            <SectionCaption caption={t('specialOffers')}/>
            <div className={'content_wrapper'}>
                <div className={`card ${css.offers_card}`}>
                    {loading && <Loader/>}
                    {offers && <OffersSlider offers={offers}/>}
                </div>
            </div>
        </section>
    );
};

export default Offers;
