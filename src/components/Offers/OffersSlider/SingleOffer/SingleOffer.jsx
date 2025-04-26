import { Parser as HtmlToReactParser } from 'html-to-react';

import { BookingButton } from '../../../index.js';
import css from './SingleOffer.module.css';

const SingleOffer = ({ offer, isVertical }) => {
    const { image, title, content } = offer;
    const parser = new HtmlToReactParser();

    return (
        <div className={`${css.offer_container} ${isVertical ? css.vertical : ''}`}>
            <div
                className={css.offer_image}
                style={{ backgroundImage: `url(${image})` }}
            />
            <div className={css.offer}>
                <h3 style={{marginTop: 0}}>{title}</h3>
                <p>{parser.parse(content)}</p>
                <div className={css.center}><BookingButton/></div>
            </div>
        </div>)
};

export default SingleOffer;