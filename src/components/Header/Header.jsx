import { useEffect, useState } from 'react';
import { FaInstagram } from 'react-icons/fa';

import { useOutsideClick } from '../../hooks/outsideClick.js';
import { LangSwitcher, Menu, MenuButton } from '../index.js';
import logo from './logo.webp';
import css from './Header.module.css';

const Header = () => {

    const [openMenu, setOpenMenu] = useState(false);
    const [scroll, setScroll] = useState(false);
    const clickMenu = () => {
        setOpenMenu(prevState => !prevState);
    }
    const closeMenu = () => {
        setOpenMenu(false);
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 80) setScroll(true);
            else setScroll(false);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const menuRef = useOutsideClick(closeMenu);

    return (
        <div className={!scroll ? css.header_wrapper : css.header_wrapper + ' ' + css.scroll}>
            <div className={css.logo}>
                <img src={logo} alt={'logo'} width={140} height={50}/>
            </div>
            <div className={css.lang_switcher_wrapper}>
                <div>
                    <a href={'https://www.instagram.com/barbershouse.dk/'} target={'_blank'} rel={'noreferrer'}
                       aria-label={'instagram'}>
                        <FaInstagram size={'2em'}/>
                    </a>
                </div>
                <div><LangSwitcher scroll={scroll}/></div>
            </div>
            <div ref={menuRef}>
                <Menu openMenu={openMenu} setOpenMenu={setOpenMenu}/>
            </div>
            <div ref={menuRef} className={css.burger_button} onClick={clickMenu}>
                <MenuButton openMenu={openMenu}/>
            </div>
        </div>
    );
};

export default Header;