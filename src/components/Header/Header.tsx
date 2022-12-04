import React from "react";
import s from "./Header.module.scss";

interface IProps {
    className?: string
}


function Header({className}:IProps) {
   
    return (
        <div className={`${s.container} ${className}`}>
            <div className={s.header}>
                <div className={s.header__item}>
                    <div className={s.item__icon}>
                        <img className={s.icon} src="https://cdn-icons-png.flaticon.com/512/9108/9108806.png" alt="icon" />
                    </div>
                </div>
                <div className={s.header__item}>
                    <div className={s.item__buttons}>
                        <button className={`${s.item__btn} ${s.btn}`}>вход в аккаунт</button>
                        <button className={`${s.item__btn} ${s.btn}`}>регистрация аккаунта</button>
                    </div>

                </div>
            </div>
        </div>
    );
}


export default Header;