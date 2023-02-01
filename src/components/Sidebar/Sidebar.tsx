import React from "react";
import { Link, NavLink } from "react-router-dom";
import s from "./Sidebar.module.scss";

interface IProps {
    className?: string
}

function Sidebar({ className }: IProps) {
    return (
        <div className={`${s.container} ${className}`}>
            <nav className={s.sidebar}>
                <ul className={s.sidebar__link}>
                    <li className={s.link}><Link to="/">P</Link></li>
                    <li className={s.link}><Link to="#">N</Link></li>
                    <li className={s.link}><Link to="/blogpage">B</Link></li>
                    <li className={s.link}><Link to="/weather">W</Link></li>
                </ul>
            </nav>
        </div>
    )
}


export default Sidebar;