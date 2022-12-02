import React from "react";
import s from "./Header.module.scss";

function Header (){
    return(
        <div className={s.container}>
            <div className={s.header}>
                <div className={s.header__item}>1</div>
                <div className={s.header__item}>32</div>
                <div className={s.header__item}>3</div>
                <div className={s.header__item}>4</div>
            </div>
        </div>
    );
}


export default Header