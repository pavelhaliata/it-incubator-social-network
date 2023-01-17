import React from "react";
import { NavLink } from "react-router-dom";
import s from "./TopHeader.module.scss";

interface IPrors {
	className?: string
}

function TopHeader({ className }: IPrors) {
	return (
		<div className={`${s.container} ${className}`}>
			<div className={s.top_header}>
				<div className={s.top_header_banner}>
					<img className={s.banner} src="https://html.crumina.net/html-olympus/img/top-header1.webp" alt="img" />
				</div>
				<div className={s.profile__section_item}>
					<div className={s.section_item}>
						<ul className={s.profile_menu}>
							<li><NavLink to="/friends" className={navData => navData.isActive ? s.active : ''}>Friends</NavLink></li>
							<li><NavLink to="/dialogs" className={navData => navData.isActive ? s.active : ''}>Dialogs</NavLink></li>
							<li><a href="#">Photos</a></li>
						</ul>
					</div>
					<div className={`${s.section_item} ${s.ml_auto}`}>
						<ul className={s.profile_menu}>
							<li><NavLink to="/friends">Friends</NavLink></li>
							<li><NavLink to="/dialogs">Dialogs</NavLink></li>
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
		</div>
	);
}



export default TopHeader;