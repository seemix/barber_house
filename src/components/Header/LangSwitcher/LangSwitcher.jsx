import { useEffect, useState } from 'react';
import i18n from 'i18next';

import { assets } from '../../../assets/assets.js';
import css from './LangSwitch.module.css';

const LangSwitcher = ({ scroll }) => {
    const [language, setLanguage] = useState('');
    useEffect(() => {
        setLanguage(i18n.language.slice(0, 2).toLowerCase());
    }, []);
    const changeLanguage = async (lang) => {
        await i18n.changeLanguage(lang);
        setLanguage(lang);
    }

    return (
        <div className={css.menu_wrapper}>
            <ul>
                <li>
                    <span className={css.menu_parent}>{language}<i className={css.arrow_right}></i></span>
                    <ul>
                        {assets.languages.filter(item => item !== language).map(item =>
                            <li className={scroll ? css.scroll_background : ''} key={item}>
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