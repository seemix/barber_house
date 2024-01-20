import { MdOutlinePhoneAndroid } from 'react-icons/md';
import { useTranslation } from 'react-i18next';

import logo from './logo_vertical.png';
import css from './Footer.module.css';
import { BookingButton } from '../index.js';

const Footer = () => {
    const { t } = useTranslation();
    return (
        <div className={css.footer_wrapper}>
            <div className={css.footer_content}>
                <div>
                    <img src={logo} alt={'footer_logo'} width={120}/>
                </div>
                <div>
                    <h4>{t('Address')}</h4>
                    <p>
                        Istedgade 28, 8700 Horsens
                    </p>
                    <MdOutlinePhoneAndroid size={'1.1em'}/> +(45) 52 64 42 96
                </div>
                <div>
                    <h4>Booking</h4>
                    <BookingButton/>
                </div>
                <div>
                    <h4>{t('Work hours')}</h4>
                    <p>{t('Mon-Sat')} 10:00-18:00</p>
                    <p>{t('Sun: closed')}</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;