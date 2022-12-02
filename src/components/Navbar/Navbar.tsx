import React from "react";
import s from "./Navbar.module.scss";


function Navbar (props: any) {
    return (
        <nav className={s.container}>
            <ul className={s.navbar}>
                <li className={s.navbar__item}><img src="./img/menu_FILL0_wght400_GRAD0_opsz48.svg" alt="menu"/></li>
                <li className={s.navbar__item}><img src="./img/menu_news_FILL0_wght400_GRAD0_opsz48.svg" alt="news" /></li>
                <li className={s.navbar__item}><img src="./img/contacts_FILL0_wght400_GRAD0_opsz48.svg" alt="news" /></li>
            </ul>
        </nav>
    );
}

export default Navbar;