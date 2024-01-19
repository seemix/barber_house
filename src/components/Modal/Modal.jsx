import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { PiWarningOctagonBold } from 'react-icons/pi';

import css from './Modal.module.css';

const Modal = ({ showModal, setShowModal }) => {
    const { t } = useTranslation();
    return (
        <>
            <AnimatePresence>
                {showModal && (
                    <div className={css.modal_background}>
                        <motion.div
                            className={css.modal_window}
                            initial={{ opacity: 0, scale: 0.8, x: '-50%', y: '-50%' }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.4 }}
                            transition={{ duration: 0.2, delay: 0.1 }}
                        >
                            <div className={css.warning_icon}><PiWarningOctagonBold size={'1.5em'}/></div>
                            <h2>{t('Conditions')}</h2>
                            <p>{t('cond1line')}</p>
                            <p> 👉 {t('cond2line')}</p>

                            <button className={css.modal_button} onClick={() => setShowModal(false)}>
                                {t('I agree to the terms')}
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>

    );
};

export default Modal;