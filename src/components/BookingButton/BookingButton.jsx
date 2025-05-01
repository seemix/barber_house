import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import { bookingButtonAnimation } from './animations.js';
import css from './BookingButton.module.css';

const BookingButton = () => {
    const { t } = useTranslation();

    return (
        <motion.button className={css.booking_button + ' booking'}
                       variants={bookingButtonAnimation}
                       initial={'hidden'}
                       animate={'visible'}
                       exit={'quit'}
                       whileHover={'hover'}
                       whileTap={'tap'}
        >
            {t('book')}
        </motion.button>
    );
};

export default BookingButton;