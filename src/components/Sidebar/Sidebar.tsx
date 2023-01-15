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
                    <li className={s.link}><a href="#">Profile</a></li>
                    <li className={s.link}><a href="/dialogs">Dialogs</a></li>
                    <li className={s.link}><a href="/friends">Friends</a></li>
                    <li className={s.link}><a href="">Photos</a></li>
                </ul>
            </nav>
        </div>
    )
}


export default Sidebar;