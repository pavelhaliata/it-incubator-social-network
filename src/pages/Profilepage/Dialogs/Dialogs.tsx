import { ChangeEvent, KeyboardEvent } from "react";
import Message from "./Message/Message";
import style from "./Dialogs.module.scss";
import {ActionType, MessageType, ProfilePageType} from "../../../redax/store";
import { newMessageActionCreater, newMessageTextActionCreater } from "../../../redax/profilePage_reducer";
import { Button } from "../../../components/Button/Button";

type DialogsPropsType = {
  dispatch: (action: ActionType) => void
  state: ProfilePageType;
};

function Dialogs({ state, dispatch }: DialogsPropsType) {
  const updateNewMessageTextHandler = (
    event: ChangeEvent<HTMLTextAreaElement>
  ) => {
    event.preventDefault();
    dispatch(newMessageTextActionCreater(event.currentTarget.value));
  };
  const sendMessageHandler = () => {
    dispatch(newMessageActionCreater());
  };
  const onKeyDownSendMessageHandler = (event: KeyboardEvent) => {
    if (event.key === "Enter" && event.ctrlKey) {
      dispatch(newMessageActionCreater());
    }
  };

  return (
    <div className={`${style.dialogs}`}>
      <div className={`${style.dialog_item} ${style.author}`}>
        {state.messagesData && state.messagesData.map((data: MessageType) => {
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
          value={state.newMessageTextData}
          onChange={updateNewMessageTextHandler}
          onKeyDown={onKeyDownSendMessageHandler}
        />
        <Button callback={sendMessageHandler}>Send</Button>
      </div>
    </div>
  );
}

export default Dialogs;
