import { useTranslation } from 'react-i18next';

import { SectionCaption } from '../index.js';
import css from './Faq.module.css';

const Faq = () => {
    const { t } = useTranslation();
    return (
        <section id={'faq'}>
            <SectionCaption caption={'FAQ'}/>
            <div className={css.faq_wrapper}>
                <div className={css.faq_content}>
                    <div className={css.c}>
                        <input type="checkbox" id="faq-1"/>
                        <h3><label htmlFor="faq-1">{t('fq1')}</label></h3>
                        <div className={css.p}>
                            <p>{t('fa1')}</p>
                        </div>
                    </div>
                    <div className={css.c}>
                        <input type="checkbox" id="faq-2"/>
                        <h3><label htmlFor="faq-2">{t('fq2')}</label></h3>
                        <div className={css.p}>
                            <p>{t('fa2')}</p>
                        </div>
                    </div>
                    <div className={css.c}>
                        <input type="checkbox" id="faq-3"/>
                        <h3><label htmlFor="faq-3">{t('fq3')}</label></h3>
                        <div className={css.p}>
                            <p>{t('fa3')} </p>
                        </div>
                    </div>
                    <div className={css.c}>
                        <input type="checkbox" id="faq-4"/>
                        <h3><label htmlFor="faq-4">{t('fq4')}</label></h3>
                        <div className={css.p}>
                            <p>{t('fa4')} </p>
                        </div>
                    </div>
                    <div className={css.c}>
                        <input type="checkbox" id="faq-5"/>
                        <h3><label htmlFor="faq-5">{t('fq5')}</label></h3>
                        <div className={css.p}>
                            <p>{t('fa5')} </p>
                        </div>
                    </div>
                    <div className={css.c}>
                        <input type="checkbox" id="faq-6"/>
                        <h3><label htmlFor="faq-6">{t('fq6')}</label></h3>
                        <div className={css.p}>
                            <p>{t('fa6')} </p>
                        </div>
                    </div>
                    <div className={css.c}>
                        <input type="checkbox" id="faq-7"/>
                        <h3><label htmlFor="faq-7">{t('fq7')}</label></h3>
                        <div className={css.p}>
                            <p>{t('fa7')} </p>
                        </div>
                    </div>
                    <div className={css.c}>
                        <input type="checkbox" id="faq-8"/>
                        <h3><label htmlFor="faq-8">{t('fq8')}</label></h3>
                        <div className={css.p}>
                            <p>{t('fa8')} </p>
                        </div>
                    </div>
                    <div className={css.c}>
                        <input type="checkbox" id="faq-9"/>
                        <h3><label htmlFor="faq-9">{t('fq9')}</label></h3>
                        <div className={css.p}>
                            <p>{t('fa9')} </p>
                        </div>
                    </div>
                    <div className={css.c}>
                        <input type="checkbox" id="faq-10"/>
                        <h3><label htmlFor="faq-10">{t('fq10')}</label></h3>
                        <div className={css.p}>
                            <p>{t('fa10')} </p>
                        </div>
                    </div>
                    <div className={css.c}>
                        <input type="checkbox" id="faq-11"/>
                        <h3><label htmlFor="faq-11">{t('fq11')}</label></h3>
                        <div className={css.p}>
                            <p>{t('fa11')} </p>
                        </div>
                    </div>
                    <div className={css.c}>
                        <input type="checkbox" id="faq-12"/>
                        <h3><label htmlFor="faq-12">{t('fq12')}</label></h3>
                        <div className={css.p}>
                            <p>{t('fa12')} </p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Faq;