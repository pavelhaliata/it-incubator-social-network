import React from "react";
import s from "./Sidebar.module.scss";

interface IProps{
    className: string
}

function Sidebar({className}:IProps) {
    return (
        <div className={`${s.container} ${className}`}>
            <nav className={s.sidebar}>
                <ul className={s.sidebar__link}>
                    <li className={s.link}>Profile</li>
                    <li className={s.link}>Dialogs</li>
                    <li className={s.link}>Friends</li>
                    <li className={s.link}>Photos</li>
                </ul>
            </nav>
        </div>
    )
}


export default Sidebar;