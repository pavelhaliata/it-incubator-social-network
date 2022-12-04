import React from "react";
import s from "./Profile.module.scss";

function Profile() {
	return (
		<div className={s.container}>
			<div className={s.profile}>
				<div className={`${s.profile__header} ${s.header}`}>
					<div className={s.header__banner}>
						<img className={s.banner} src="https://images.wallpaperscraft.ru/image/single/gorod_zdaniia_vektor_216924_1920x1080.jpg" alt="img"/>
					</div>
					<nav className={s.header__nav}>
						<ul className={s.navbar__link}>
							<li className={s.link}>Friends</li>
							<li className={s.link}>Photos</li>
							<li className={s.link}>Videos</li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	);
}



export default Profile;