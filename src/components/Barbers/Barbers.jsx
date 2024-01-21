import { motion } from 'framer-motion';

import { barberCardAnimation } from './animations.js';
import { SectionCaption } from '../index.js';
import barber1 from './barber1.webp';
import css from './Barbers.module.css';

const Barbers = () => {
    return (
        <section id={'barbers'}>
            <SectionCaption caption={'Barbers'}/>
            <motion.div className={'content_wrapper'}
                        custom={3}
                        initial={'hidden'}
                        whileInView={'visible'}
                        viewport={{ once: true }}
                        variants={barberCardAnimation}

            >
                <div className={'card'}>
                    <div className={css.barber_pic_wrapper}>
                        <div className={css.barber_pic} style={{ backgroundImage: `url(${barber1}` }}></div>
                    </div>
                    <div className={css.barber_bottom}>
                        <h3>Ciprian Maftei</h3>
                        <h4>top barber</h4>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Barbers;