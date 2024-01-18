import { useState } from 'react';
import { FaInstagram } from 'react-icons/fa';

import { useOutsideClick } from '../../hooks/outsideClick.js';
import { LangSwitcher, Menu, MenuButton } from '../index.js';
import logo from './Logo_hor.png';
import css from './Header.module.css';

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const clickMenu = () => {
        setOpenMenu(prevState => !prevState);
    }
    const closeMenu = () => {
        setOpenMenu(false);
    }
    const menuRef = useOutsideClick(closeMenu);
    return (
        <div className={css.header_wrapper}>
            <div><img src={logo} alt={'logo'} height={78}/></div>
            <div className={css.lang_switcher_wrapper}>
                <a href={'https://barberhouse.vercel.app/'} target={'_blank'} rel="noreferrer"><FaInstagram size={'2em'}/></a>
                <div><LangSwitcher/></div>
            </div>
            <div ref={menuRef}>
                <Menu openMenu={openMenu} setOpenMenu={setOpenMenu}/>
            </div>
            <div>
                <div ref={menuRef} className={css.burger_button} onClick={clickMenu}>
                    <MenuButton openMenu={openMenu}/>
                </div>
            </div>
        </div>
    );
};

export default Header;