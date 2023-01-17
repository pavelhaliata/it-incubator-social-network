import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Sidebar.module.scss";

interface IProps {
    className: string
}

function Sidebar({ className }: IProps) {
    return (
        <div className={`${s.container} ${className}`}>
            <nav className={s.sidebar}>
                <ul className={s.sidebar__link}>
                    <li className={s.link}><a href="#">Profile</a></li>
                    <li className={s.link}><NavLink to={"/dialogs"}>Dialogs</NavLink></li>
                    <li className={s.link}><NavLink to={"/friends"}>Friends</NavLink></li>
                    <li className={s.link}><a href="#">Photos</a></li>

                </ul>
            </nav>
        </div>
    )
}


export default Sidebar;