import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages/Messages";
import s from "./Profile.module.scss";

function Profile() {
	return (
		<div className={s.container}>
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