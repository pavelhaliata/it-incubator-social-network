import {Component} from 'react';
import style from "./MainPage.module.scss";
import { NavLink, Outlet } from "react-router-dom";
import { MainPagePropsType } from "./MainPageContainer";
import { ProfileStatusContainer } from 'components/profileStatus/ProfileStatusContainer';

export class MainPage extends Component <MainPagePropsType> {

  componentDidMount() {
    document.title = "Profile Page";
    this.props.setHeaderTitle("profile page");
  }

  navLinkActive = ({ isActive }: any) => (isActive ? style.active : "");

  render() {
    return (
        <div className={`${style.profile_container}`}>
          <div className={style.profile_header}>
            <div className={style.header_banner}>
              <img
                  className={style.banner}
                  src="https://html.crumina.net/html-olympus/img/top-header1.webp"
                  alt="img"
              />
            </div>
            <div className={style.header_nav}>
              <div className={style.nav_item}>
                <ul className={style.item_menu}>
                  <li>
                    <NavLink to="friends" className={this.navLinkActive}>
                      Friends search
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="dialogs" className={this.navLinkActive}>
                      Dialogs
                    </NavLink>
                  </li>
                  <li>
                    <a href="#">Photos</a>
                  </li>
                </ul>
              </div>
              <div className={`${style.nav_item} ${style.ml_auto}`}>
                <ul className={style.item_menu}>
                  <li>
                    <NavLink to="/news" className={this.navLinkActive}>
                      News
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/posts" className={this.navLinkActive}>
                      Posts
                    </NavLink>
                  </li>
                  <li>...</li>
                </ul>
              </div>
            </div>
            <div className={style.header_author}>
              <a href="#" className={style.author_img}>
                <img
                    src="https://html.crumina.net/html-olympus/img/author-main1.webp"
                    alt="author"
                    width="124px"
                    height="124px"
                />
              </a>
              <div className={style.author_content}>
                <a href="#" className={style.author_name}>
                  {this.props.authUserData.login}
                </a>
              </div>
            </div>
          </div>
          <div className={`${style.profile_content}`}>
            <Outlet />
          </div>
        </div>
    );
  }
}
