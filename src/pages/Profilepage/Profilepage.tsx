import s from "./Profilepage.module.scss";
import { NavLink, Outlet, Route, Routes } from "react-router-dom";
import Dialogs from "./Dialogs/Dialogs";
import { Friends } from "./Friends/Friends";

interface IProps {
    className?: string
}
type MainPropsType = {
    className?: string
}

function Profilepage({ className }: MainPropsType) {
    return (
        <div className={`${className}`}>
            <div className={`${s.container}`}>
                <div className={s.top_header}>
                    <div className={s.top_header_banner}>
                        <img className={s.banner} src="https://html.crumina.net/html-olympus/img/top-header1.webp" alt="img" />
                    </div>
                    <div className={s.profile__section_item}>
                        <div className={s.section_item}>
                            <ul className={s.profile_menu}>
                                <li><NavLink to="/friends" className={({ isActive }) => isActive ? s.active : ''}>Friends</NavLink></li>
                                <li><NavLink to="/dialogs" className={({ isActive }) => isActive ? s.active : ''}>Dialogs</NavLink></li>
                                <li><a href="#">Photos</a></li>
                            </ul>
                        </div>
                        <div className={`${s.section_item} ${s.ml_auto}`}>
                            <ul className={s.profile_menu}>
                                <li><NavLink to="/news" className={({ isActive }) => isActive ? s.active : ''}>News</NavLink></li>
                                <li><NavLink to="/posts" className={({ isActive }) => isActive ? s.active : ''}>Posts</NavLink></li>
                                <li>...</li>
                            </ul>
                        </div>
                    </div>
                    <div className={s.top_header_author}>
                        <a href="#" className={s.autor_img}>
                            <img src="https://html.crumina.net/html-olympus/img/author-main1.webp" alt="author" width='124px' height='124px'
                            />
                        </a>
                        <div className={s.author_content}>
                            <a href="#" className={s.author_name}>James Spiegel</a>
                            <div className={s.country}>San Francisco, CA</div>
                        </div>
                    </div>
                </div>
                <div className={`${s.profileContent}`}>
                    <div className={s.container_fluid}>
                        <Outlet />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Profilepage;