import { RiScissorsLine } from 'react-icons/ri';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import { captionAnimation, lefXAnimation, rightXAnimation } from './animations.js';
import css from './SectionCaption.module.css';

const SectionCaption = ({ caption }) => {
    const { t } = useTranslation();
    return (
        <>
            <div className={css.caption_top_line}>
                <motion.h4
                    custom={3}
                    initial={'hidden'}
                    whileInView={'visible'}
                    variants={lefXAnimation}
                >
                    <RiScissorsLine size={'1.3em'}/>
                </motion.h4>
                <motion.h4
                    custom={4}
                    initial={'hidden'}
                    whileInView={'visible'}
                    variants={rightXAnimation}
                >
                    The Barber&apos;s house
                </motion.h4>
            </div>
            <motion.h2
                custom={3}
                initial={'hidden'}
                whileInView={'visible'}
                variants={captionAnimation}
            >
                {t(`${caption}`)}
            </motion.h2>
        </>
    );
};

export default SectionCaption;
