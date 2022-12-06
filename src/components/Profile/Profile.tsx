import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages/Messages";
import s from "./Profile.module.scss";

function Profile() {
	return (
		<div className={s.container}>
			<div className={s.profile}>
				<div className={`${s.item} ${s.header}`}>
					<div className={s.header__banner}>
						<img className={s.banner} src="https://images.wallpaperscraft.ru/image/single/gorod_zdaniia_vektor_216924_1920x1080.jpg" alt="img" />
					</div>
					<nav className={s.header__nav}>
						<ul className={s.navbar__link}>
							<li className={s.link}>Friends</li>
							<li className={s.link}>Dialogs</li>
							<li className={s.link}>Photos</li>
							<li className={s.link}>Videos</li>
						</ul>
					</nav>
				</div>
				<div className={`${s.item} ${s.dialogs}`}>
					<div className="">
						<DialogItem name="Paul"/>
						<DialogItem name="Mark"/>
						<DialogItem name="Jane"/>
					</div>
					<div className="">
						<Messages message="Hi, there!!!" />
						<Messages message="Hi, Paul" />
						<Messages message="what's up, guys?" />
					</div>

				</div>
			</div>
		</div>
	);
}



export default Profile;