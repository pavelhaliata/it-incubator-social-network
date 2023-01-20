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
                    <li className={s.link}><Link to="/">Profile</Link></li>
                    <li className={s.link}><a href="#">News</a></li>
                    <li className={s.link}><Link to="/blogpage">Blog</Link></li>
                    <li className={s.link}><a href="#">more info</a></li>
                </ul>
            </nav>
        </div>
    )
}


export default Sidebar;