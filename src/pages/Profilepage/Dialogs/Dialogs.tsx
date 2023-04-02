import { ChangeEvent, KeyboardEvent } from "react";
import Message from "./Message/Message";
import style from "./Dialogs.module.scss";
import {MessageType} from "../../../redux/store";
import { Button } from "../../../components/Button/Button";

type DialogsPropsType = {
  messageTextValue: string
  updateNewMessageText: (value: string) => void
  addNewMessage: () => void
  messagesData: Array<MessageType>
};

function Dialogs({ messageTextValue, updateNewMessageText, messagesData, addNewMessage }: DialogsPropsType) {

  const onChangeTextInputHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    event.preventDefault();
    updateNewMessageText(event.currentTarget.value)
  };
  const sendMessageHandler = () => {
    addNewMessage()
  };
  const onKeyDownSendMessageHandler = (event: KeyboardEvent) => {
    if (event.key === "Enter" && event.ctrlKey) {
      addNewMessage()
    }
  };

  return (
    <div className={`${style.dialogs}`}>
      <div className={`${style.dialog_item} ${style.author}`}>
        {messagesData && messagesData.map((data: MessageType) => {
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
          value={messageTextValue}
          onChange={onChangeTextInputHandler}
          onKeyDown={onKeyDownSendMessageHandler}
        />
        <Button callback={sendMessageHandler}>Send</Button>
      </div>
    </div>
  );
}

export default Dialogs;
