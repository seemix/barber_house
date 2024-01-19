import { useTranslation } from 'react-i18next';
import { MdOutlineLocationOn } from 'react-icons/md';
import { MdOutlinePhoneAndroid } from 'react-icons/md';
import { FaInstagram } from 'react-icons/fa';
import { AiOutlineSchedule } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { contactAnimation, mapAnimation } from './animations.js';
import { SectionCaption } from '../index.js';
import css from './Contacts.module.css';

const Contacts = () => {
    const { t } = useTranslation();
    return (
        <section id={'contacts'}>
            <SectionCaption caption={'Contacts'}/>
            <div className={'content_wrapper'}>
                <motion.div className={'card ' + css.contact_card}
                            custom={2}
                            initial={'hidden'}
                            whileInView={'visible'}
                            viewport={{ once: true }}
                            variants={contactAnimation}
                >
                    <div className={css.contact_block}>
                        <div>
                            <h4><MdOutlineLocationOn/> {t('Address')}</h4>
                            <p>Istedgade 28, 8700 Horsens</p>
                        </div>
                        <div>
                            <h4><MdOutlinePhoneAndroid/>{t('Phone')}</h4>
                            <p>+(45) 52 64 42 96</p>
                        </div>
                        <div>
                            <h4><FaInstagram/> Instagram</h4>
                            <a href={'https://www.instagram.com/cipthebarber/'} target={'_blank'} rel={'noreferrer'}>
                                <p>@cipthebarber</p>
                            </a>
                        </div>
                        <div>
                            <h4><AiOutlineSchedule/>{t('Work hours')} </h4>
                            <p> {t('Mon-Sat')} 10:00-18:00</p>
                            <p>{t('Sun: closed')}</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div className={css.map_wrapper}
                            custom={3}
                            initial={'hidden'}
                            whileInView={'visible'}
                            viewport={{ once: true }}
                            variants={mapAnimation}
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1119.235268577447!2d9.837897137360839!3d55.871852082814904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464c6313df98d777%3A0xe5656fd7b108cffd!2sIstedgade%2028%2C%208700%20Horsens%2C%20Denmark!5e0!3m2!1sen!2sua!4v1705695275012!5m2!1sen!2sua"
                        width="500px" height="450" style={{ border: 0, borderRadius: '6px' }} loading="lazy">
                    </iframe>
                </motion.div>
            </div>
        </section>
    );
};

export default Contacts;