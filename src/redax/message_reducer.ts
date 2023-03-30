import { v4 as uuidv4 } from "uuid";
import {ActionType, MessageType} from "./state";

enum MESSAGE {
  UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT",
  ADD_NEW_MESSAGE = "ADD_NEW_MESSAGE",
}

export const messageReducer = (state: any, action: ActionType) => {
  switch (action.type) {
    case MESSAGE.UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageTextData = action.newText;
      return state;
    case MESSAGE.ADD_NEW_MESSAGE:
      if (state.newMessageTextData.trim() !== "") {
        const messageData: MessageType = {
          id: uuidv4(),
          avatar: "https://html.crumina.net/html-olympus/img/author-main1.webp",
          name: "James Spiegel",
          message: state.newMessageTextData,
          time: new Date().toLocaleTimeString().slice(0, -3),
        };
        state.messagesData.push(messageData);
        state.newMessageTextData = "";
      }
      return state;
    default:
      return state;
  }
};

export const updateNewMessageText = (newText: string) => ({type: MESSAGE.UPDATE_NEW_MESSAGE_TEXT, newText: newText });
export const addNewMessage = () => ({ type: MESSAGE.ADD_NEW_MESSAGE });
