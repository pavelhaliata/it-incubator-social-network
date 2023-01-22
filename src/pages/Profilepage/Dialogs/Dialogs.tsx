import React, { useState } from "react";
import Message from "./Message/Message";
import s from "./Dialogs.module.scss";


export type MessageDataPropsType = {
	avatar: string
	name: string
	message: string
	time: string
}

type DialogsPropsType = {
	messageData: Array<MessageDataPropsType>
}

function Dialogs(props: DialogsPropsType) {


	return (
		<div>
			<div className={`${s.dialogs}`}>
				<div className={`${s.item} ${s.author}`}>
					<div>
						{props.messageData.map((t: MessageDataPropsType) => {
							return <Message
								avatar={t.avatar}
								name={t.name}
								message={t.message}
								time={t.time} />
						})}
					</div>
				</div>
				<div className={`${s.item} ${s.companion}`}>
					<div>
						{/* {props.messageData.map((message:MessageDataPropsType) => {
							return <Message message={message} />})} */}
					</div>
				</div>
			</div>
		</div>
	);
}



export default Dialogs;