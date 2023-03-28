import { ChangeEvent, KeyboardEvent, useState } from "react";
import Message from "./Message/Message";
import style from "./Dialogs.module.scss";
import {
  addNewMessage,
  MessageType,
  updateNewMessageText,
} from "../../../redax/state";
import { Button } from "../../../components/Button/Button";

type DialogsPropsType = {
  messageData?: Array<MessageType>;
  store: any;
};

function Dialogs({ messageData, store }: DialogsPropsType) {


  const updateNewMessageTextHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    event.preventDefault();
    updateNewMessageText(event.currentTarget.value);
  };
  const sendMessageHandler = () => {
    addNewMessage();
  };
  const onKeyDownSendMessageHandler = (event: KeyboardEvent) => {
	if(event.key === 'Enter' && event.ctrlKey){
		addNewMessage();
	}
  }

  return (
    <div className={`${style.dialogs}`}>
      <div className={`${style.dialogs_item} ${style.author}`}>
        <div>
          {messageData &&
            messageData.map((data: MessageType) => {
              return (
                <Message
                  key={data.id}
                  avatar={data.avatar}
                  name={data.name}
                  message={data.message}
                  time={data.time}
                />
              );
            })}
        </div>
      </div>
      <div className={`${style.item} ${style.companion}`}></div>
      <div className={style.input_message}>
        <textarea
          className=""
          placeholder="Enter your message..."
          value={store.newMessageTextData}
          onChange={updateNewMessageTextHandler}
		  onKeyDown={onKeyDownSendMessageHandler}
        />
        <Button callback={sendMessageHandler}>Send</Button>
      </div>
    </div>
  );
}

export default Dialogs;
