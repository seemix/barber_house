import { useTranslation } from 'react-i18next';

import { SectionCaption } from '../index.js';
import css from './Faq.module.css';

const Faq = () => {
    const { t } = useTranslation();
    const questions = Array.from({ length: 12 }, (_, i) => i + 1);
    return (
        <section id={'faq'}>
            <SectionCaption caption={'FAQ'}/>
            <div className={css.faq_wrapper}>
                <div className={css.faq_content}>
                    {questions.map((item) => (<div className={css.c} key={item}>
                        <input type="checkbox" id={'faq' + item}/>
                        <h3><label htmlFor={'faq' + item}>{t(`fq${item}`)}</label></h3>
                        <div className={css.p}>
                            <p>{t(`fa${item}`)}</p>
                        </div>
                    </div>))}
                </div>
            </div>
        </section>
    );
};

export default Faq;