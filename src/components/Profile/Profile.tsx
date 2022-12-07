import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages/Messages";
import s from "./Profile.module.scss";

function Profile() {
	return (
		<div className={s.container}>
			<div className={s.top_header}>
				<div className={s.top_header_banner}>
					<img className={s.banner} src="https://html.crumina.net/html-olympus/img/top-header1.webp" alt="img" />
				</div>
				<div className={s.profile__section_item}>
					<div className={s.section_item}>
						<ul className={s.profile_menu}>
							<li>Friends</li>
							<li>Dialogs</li>
							<li>Photos</li>
							<li>Videos</li>
						</ul>
					</div>
					<div className={`${s.section_item} ${s.ml_auto}`}>
						<ul className={s.profile_menu}>
							<li>Friends</li>
							<li>Dialogs</li>
							<li>Photos</li>
							<li>Videos</li>
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
			<div className={`${s.item} ${s.dialogs}`}>
				<div className="">
					<DialogItem name="Paul" />
					<DialogItem name="Mark" />
					<DialogItem name="Jane" />
				</div>
				<div className="">
					<Messages message="Hi, there!!!" />
					<Messages message="Hi, Paul" />
					<Messages message="what's up, guys?" />
				</div>

			</div>
		</div>
	);
}



export default Profile;