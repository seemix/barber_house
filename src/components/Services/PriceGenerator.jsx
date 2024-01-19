import { IoTimeOutline } from 'react-icons/io5';
import { useTranslation } from 'react-i18next';

import { assets } from '../../assets/index.js';
import css from './Services.module.css';

const PriceGenerator = ({ data }) => {
    const { t } = useTranslation();
    return (
        <>
            {
                data.map(item => <div key={item.id} className={css.price_item_wrapper}>
                    <h4>{t(`${item.name}`)}</h4>
                    <div className={css.price_item}>
                        <IoTimeOutline size={'1.2em'}/>
                        <div>{item.time} min.</div>
                        <div></div>
                        <div className={css.price}>
                            <h4>{item.price} {assets.currency}</h4>
                        </div>
                    </div>
                </div>)
            }
        </>
    );
};

export default PriceGenerator;