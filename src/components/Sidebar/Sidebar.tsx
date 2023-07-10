import { Component } from "react";
import { Link } from "react-router-dom";
import style from "./Sidebar.module.scss";

interface SidebarPropsType {
  className?: string;
}

export class Sidebar extends Component<SidebarPropsType> {
  render() {
    return (
      <div className={`${this.props.className} ${style.sidebar}`}>
        <Link to="/" className={style.logo}>
          <div className={style.img_wrap}>
            <img
              src="https://html.crumina.net/html-olympus/img/logo.webp"
              alt="logo"
            />
          </div>
        </Link>
        <nav className={style.sidebar_menu}>
          <ul className={style.menu}>
            <li className={style.menu_link}>
              <Link to="/">Profile</Link>
            </li>
            <li className={style.menu_link}>
              <Link to="/news">News</Link>
            </li>
            <li className={style.menu_link}>
              <Link to="/blog-page">Blog</Link>
            </li>
            <li className={style.menu_link}>
              <Link to="/weather">Weather</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
