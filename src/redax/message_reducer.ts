import { v4 as uuidv4 } from "uuid";
import { MessageType, POST } from "./state";

export const messageReducer = (state: any, action: any) => {
  if (action.type === POST.UPDATE_NEW_MESSAGE_TEXT) {
    state.newMessageTextData = action.newText;
  } else if (action.type === POST.ADD_NEW_MESSAGE) {
    if (state.newMessageTextData.trim() !== "") {
      const newMessageData: MessageType = {
        id: uuidv4(),
        avatar: "https://html.crumina.net/html-olympus/img/author-main1.webp",
        name: "James Spiegel",
        message: state.newMessageTextData,
        time: new Date().toLocaleTimeString().slice(0, -3),
      };
      state.messagesData.push(newMessageData);
      state.newMessageTextData = "";
    }
  }
  return state;
};
