import React from "react";
import Message from "./Message/Message";
import s from "./Dialogs.module.scss";

const messageData = {
	avatar: 'https://html.crumina.net/html-olympus/img/author-main1.webp',
	name: 'James Spiegel',
	message: 'Hi ! What are you doing? Are you sliping now? :)',
	time: '22:00',
}


function Dialogs() {
	return (
		<div>
			<div className={`${s.dialogs}`}>
				<div className={`${s.item} ${s.author}`}>
					<div>
						<Message
							avatar={messageData.avatar}
							name={messageData.name}
							message={messageData.message}
							time={messageData.time} />
					</div>
				</div>
				<div className={`${s.item} ${s.companion}`}>
					<div>
						<Message
							avatar={messageData.avatar}
							name={messageData.name}
							message={messageData.message}
							time={messageData.time} />
					</div>
				</div>
			</div>
		</div>
	);
}



export default Dialogs;