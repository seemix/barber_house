import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { motion } from 'framer-motion';

import { arrowUpAnimation } from './animations.js';
import css from './ArrowUp.module.css';

const ArrowUp = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const updatePosition = () => {
            setScrollPosition(window.pageYOffset);
        };

        window.addEventListener('scroll', updatePosition);

        return () => window.removeEventListener('scroll', updatePosition);
    }, []);
    const scrollToTop = () => {
        document.documentElement.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <>
            {scrollPosition > 100 &&
                <motion.button className={css.arrow_up}
                               onClick={scrollToTop}
                               variants={arrowUpAnimation}
                               initial={'hidden'}
                               animate={'visible'}
                               exit={'quit'}
                               whileHover={'hover'}
                               whileTap={'tap'}
                >
                    <FaArrowUp/>
                </motion.button>
            }
        </>
    );
};

export default ArrowUp;