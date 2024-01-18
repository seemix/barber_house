import { AnimatePresence, motion } from 'framer-motion';
import { PiWarningOctagonBold } from 'react-icons/pi';

import css from './Modal.module.css';

const Modal = ({ showModal, setShowModal }) => {
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
                            <h2>Conditions</h2>
                            <p> If not showing up for the appointment: without 6 hours prior</p>
                            <p> 👉  A fee of 100% of the price of the treatment will be imposed.</p>

                            <button className={css.modal_button} onClick={() => setShowModal(false)}>
                                I agree to the terms
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>

    );
};

export default Modal;