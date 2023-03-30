import { ChangeEvent, KeyboardEvent, useState } from "react";
import Message from "./Message/Message";
import style from "./Dialogs.module.scss";
import { ActionType,MessageType } from "../../../redax/state";
import { addNewMessage, updateNewMessageText } from "../../../redax/message_reducer";
import { Button } from "../../../components/Button/Button";

type DialogsPropsType = {
  messageData?: Array<MessageType>;
  dispatch: (action: ActionType) => void
  store: any;
};

function Dialogs({ messageData, store, dispatch }: DialogsPropsType) {
  const updateNewMessageTextHandler = (
    event: ChangeEvent<HTMLTextAreaElement>
  ) => {
    event.preventDefault();
    dispatch(updateNewMessageText(event.currentTarget.value));
  };
  const sendMessageHandler = () => {
    dispatch(addNewMessage());
  };
  const onKeyDownSendMessageHandler = (event: KeyboardEvent) => {
    if (event.key === "Enter" && event.ctrlKey) {
      dispatch(addNewMessage());
    }
  };

  return (
    <div className={`${style.dialogs}`}>
      <div className={`${style.dialog_item} ${style.author}`}>
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
      {/* <div className={`${style.item} ${style.companion}`}></div> */}
      <div className={style.dialog_input}>
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
