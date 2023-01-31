import s from "./Profilepage.module.scss";
import { NavLink, Outlet } from "react-router-dom";
import { useEffect } from "react";

interface IProps {
    className?: string
}
type MainPropsType = {
    className?: string
    setStatePage: (value: string) => void
}

const navLinkActive = ({ isActive }: any) => isActive ? s.active : '';

function Profilepage({ className, setStatePage }: MainPropsType) {

    useEffect(() => {
        document.title = 'My Profile'
        setStatePage('profilepage')
    }, [])

    return (
        <div className={`${className}`}>
            <div className={s.top_header}>
                <div className={s.top_header_banner}>
                    <img className={s.banner} src="https://html.crumina.net/html-olympus/img/top-header1.webp" alt="img" />
                </div>
                <div className={s.top_header_profile}>
                    <div className={s.profile_item}>
                        <ul className={s.item_menu}>
                            <li><NavLink to="/friends" className={navLinkActive}>Friends</NavLink></li>
                            <li><NavLink to="/dialogs" className={navLinkActive}>Dialogs</NavLink></li>
                            <li><a href="#">Photos</a></li>
                        </ul>
                    </div>
                    <div className={`${s.profile_item} ${s.ml_auto}`}>
                        <ul className={s.item_menu}>
                            <li><NavLink to="/news" className={navLinkActive}>News</NavLink></li>
                            <li><NavLink to="/posts" className={navLinkActive}>Posts</NavLink></li>
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
    );
}

export default Profilepage;