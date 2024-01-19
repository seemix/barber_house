import { GiRazor } from 'react-icons/gi';
import { RiScissors2Fill } from 'react-icons/ri';
import { TbDiscountCheck } from 'react-icons/tb';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { motion } from 'framer-motion';

import { SectionCaption } from '../index.js';
import { block1, block2 } from './data.js';
import PriceGenerator from './PriceGenerator.jsx';
import { cardAnimation } from './animations.js';
import css from './Services.module.css';

const Services = () => {
    return (
        <section id={'services'}>
            <SectionCaption caption={'Services'}/>
            <div className={'content_wrapper'}>
                    <motion.div className={'card ' + css.service_card}
                                custom={2}
                                initial={'hidden'}
                                whileInView={'visible'}
                                viewport={{ once: true }}
                                variants={cardAnimation}
                    >
                        <div className={css.card_icon_wrap}>
                            <RiScissors2Fill/>
                        </div>
                        <PriceGenerator data={block1}/>
                    </motion.div>

                    <motion.div className={'card ' + css.service_card}
                                custom={2.5}
                                initial={'hidden'}
                                whileInView={'visible'}
                                viewport={{ once: true }}
                                variants={cardAnimation}
                    >
                        <div className={css.card_icon_wrap}>
                            <GiRazor/>
                        </div>
                        <PriceGenerator data={block2}/>
                    </motion.div>

                    <motion.div className={'card ' + css.service_card}
                                custom={3}
                                initial={'hidden'}
                                whileInView={'visible'}
                                viewport={{ once: true }}
                                variants={cardAnimation}
                    >
                        <div className={css.card_icon_wrap}>
                            <TbDiscountCheck/>
                        </div>
                        <h4>Prices are according to the client's frequency:</h4>
                        <p><IoIosCheckmarkCircleOutline size={'1.2em'}/> every second week 10% discount</p>
                        <p><IoIosCheckmarkCircleOutline size={'1.2em'}/> every week 20% discount</p>
                    </motion.div>
            </div>
        </section>
    );
};

export default Services;