import React from "react";
import s from "./Messages.module.scss"



type dialogsType = {
	message: string
}

function Messages(props: dialogsType) {
	return (
		<div className={s.container}>
			<div className={s.dialogs}>
				<div className={s.dialogs__item}>
					{props.message}
				</div>
			</div>
		</div>
	)
}
export default Messages;