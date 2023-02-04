import Message from "./Message/Message";
import s from "./Dialogs.module.scss";


export type MessagePropsType = {
	avatar: string
	name: string
	message: string
	time: string
}

type DialogsPropsType = {
	messageData?: Array<MessagePropsType>
}

function Dialogs({ messageData }: DialogsPropsType) {


	return (
			<div className={`${s.dialogs}`}>
				<div className={`${s.item} ${s.author}`}>
					<div>
						{messageData && messageData.map((data: MessagePropsType) => {
							return <Message
								avatar={data.avatar}
								name={data.name}
								message={data.message}
								time={data.time} />
						})}
					</div>
				</div>
				<div className={`${s.item} ${s.companion}`}>
					<div>
					{messageData && messageData.map((data: MessagePropsType) => {
							return <Message
								avatar={data.avatar}
								name={data.name}
								message={data.message}
								time={data.time} />
						})}
					</div>
				</div>
			</div>
	);
}



export default Dialogs;