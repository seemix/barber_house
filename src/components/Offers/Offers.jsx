import { BookingButton, SectionCaption } from '../index.js';
import css from './Offers.module.css';

const Offers = () => {
    return (
        <section id={'specialOffers'}>
            <SectionCaption caption={'Special Offers'}/>
            <div className={'content_wrapper'}>
                <div className={'card ' + css.offers_card}>
                    <h4>Special Offer</h4>

                    <p>Bring a Friend – Get Rewarded!
                        Book your haircut together with a friend and you’ll both get 30% off your next visit.
                        Fresh fades, good vibes, and a deal worth sharing.</p>

                    <div className={css.center}><p><b>Offer valid for a limited time. Don’t miss out!</b></p>
                        <BookingButton/></div>
                </div>
            </div>

        </section>
    );
};

export default Offers;