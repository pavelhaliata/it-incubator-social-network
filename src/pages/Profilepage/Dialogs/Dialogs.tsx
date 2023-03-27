import Message from "./Message/Message";
import s from "./Dialogs.module.scss";
import { MessageType } from "../../../redax/state";



type DialogsPropsType = {
	messageData?: Array<MessageType>
	state: any
}

function Dialogs({ messageData, state }: DialogsPropsType) {


	return (
			<div className={`${s.dialogs}`}>
				<div className={`${s.item} ${s.author}`}>
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
				<div className={`${s.item} ${s.companion}`}>
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
				<div><textarea value={state.newMessageTextData}/>dddd</div>
			</div>
	);
}



export default Dialogs;