import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

import { assets } from '../../../assets/assets.js/';
import css from './Langswitch.module.css';

const LangSwitcher = () => {
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang).then();
    }
    const { t } = useTranslation();

    return (
        <div className={css.menu_wrapper}>
            <ul>
                <li>
                    <span className={css.menu_parent}>{t('lang')}<i className={css.arrow_right}></i></span>
                    <ul>
                        {
                            assets.languages.filter(item => item !== i18n.language).map(item => <li key={item}>
                                <span onClick={() => changeLanguage(item)}>{item}</span>
                            </li>)
                        }
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default LangSwitcher;