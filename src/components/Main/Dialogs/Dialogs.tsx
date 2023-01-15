import React from "react";
import Message from "./Message/Message";
import s from "./Dialogs.module.scss";

const messageData = {
	avatar: 'https://html.crumina.net/html-olympus/img/author-main1.webp',
	name: 'James Spiegel',
	message: 'Hi, There! What are you doing now? Are you sliping? :)',
	time: '22:00',
}


function Dialogs() {
	return (
		<div className={s.container}>
			<div className={`${s.item} ${s.dialogs}`}>
				<Message
					avatar={messageData.avatar}
					name={messageData.name}
					message={messageData.message}
					time={messageData.time} />
				<Message
					avatar={messageData.avatar}
					name={messageData.name}
					message={messageData.message}
					time={messageData.time} />
			</div>
		</div>
	);
}



export default Dialogs;