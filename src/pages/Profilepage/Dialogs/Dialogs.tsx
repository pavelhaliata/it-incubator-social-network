import Message from "./Message/Message";
import style from "./Dialogs.module.scss";
import {addNewMessage, MessageType, updateNewMessageText} from "../../../redax/state";
import {Button} from "../../../components/Button/Button";
import {ChangeEvent} from "react";



type DialogsPropsType = {
	messageData?: Array<MessageType>
	state: any
}

function Dialogs({ messageData, state }: DialogsPropsType) {

	const updateNewMessageTextHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
		updateNewMessageText(event.currentTarget.value)
	}
	const sendMessageHandler = () =>{
		addNewMessage()
	}
	{messageData?.map(m => console.log(m.message))}
	return (
			<div className={`${style.dialogs}`}>
				<div className={`${style.item} ${style.author}`}>
					<div>

						{messageData && messageData.map((data: MessageType) => {
							return <Message
								avatar={data.avatar}
								name={data.name}
								message={data.message}
								time={data.time} />
						})}
					</div>
				</div>
				<div className={`${style.item} ${style.companion}`}>
					{/*<div>*/}
					{/*{messageData && messageData.map((data: MessageType) => {*/}
					{/*		return <Message*/}
					{/*			avatar={data.avatar}*/}
					{/*			name={data.name}*/}
					{/*			message={data.message}*/}
					{/*			time={data.time} />*/}
					{/*	})}*/}
					{/*</div>*/}
				</div>
				<div><textarea value={state.newMessageTextData} onChange={updateNewMessageTextHandler}/></div>
				<Button callback={sendMessageHandler}>Send</Button>
			</div>
	);
}



export default Dialogs;