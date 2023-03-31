import { v4 as uuidv4 } from "uuid";
import { ActionType, MessageType, ProfilePageType } from "./store";

enum MESSAGE {
  UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT",
  ADD_NEW_MESSAGE = "ADD_NEW_MESSAGE",
}

const initialState: ProfilePageType = {
  newMessageTextData: "",
  messagesData: [],
};

export const profilePageReducer = (state: any = initialState, action: ActionType) => {
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

export const newMessageTextActionCreater = (newText: string) => ({
  type: MESSAGE.UPDATE_NEW_MESSAGE_TEXT,
  newText: newText,
});
export const newMessageActionCreater = () => ({
  type: MESSAGE.ADD_NEW_MESSAGE,
});
