import React from "react";
import { Link, NavLink } from "react-router-dom";
import style from "./Sidebar.module.scss";

interface IProps {
    className?: string
}

function Sidebar({ className }: IProps) {
    return (
        <div className={`${className}`}>
            <nav className={style.sidebar}>
                <ul className={style.sidebar_menu}>
                    <li className={style.menu_link}><Link to="/">Profile</Link></li>
                    <li className={style.menu_link}><Link to="#">News</Link></li>
                    <li className={style.menu_link}><Link to="/blog-page">Blog</Link></li>
                    <li className={style.menu_link}><Link to="/weather">Weather</Link></li>
                </ul>
            </nav>
        </div>
    )
}


export default Sidebar;