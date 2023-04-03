import {v4 as uuidv4} from "uuid";
import {ActionCreatorType, MessageType, ProfilePageType} from "./store";

enum MESSAGE {
    UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT",
    ADD_NEW_MESSAGE = "ADD_NEW_MESSAGE",
}

const initialState: ProfilePageType = {
    newMessageTextData: "",
    messagesData: [],
    personsData: [
        {
            id: uuidv4(),
            backgroundImg: "https://html.crumina.net/html-olympus/img/friend1.webp",
            avatar: "https://html.crumina.net/html-olympus/img/avatar1.webp",
            name: "Nicholas Grissom",
            country: "San Francisco, CA",
        },
        {
            id: uuidv4(),
            backgroundImg: "https://html.crumina.net/html-olympus/img/friend2.webp",
            avatar: "https://html.crumina.net/html-olympus/img/avatar2.webp",
            name: "Marina Valentine",
            country: "Long Island, NY",
        },
        {
            id: uuidv4(),
            backgroundImg: "https://html.crumina.net/html-olympus/img/friend3.webp",
            avatar: "https://html.crumina.net/html-olympus/img/avatar3.webp",
            name: "Nicholas Grissom",
            country: "Los Angeles, CA",
        },
        {
            id: uuidv4(),
            backgroundImg: "https://html.crumina.net/html-olympus/img/friend4.webp",
            avatar: "https://html.crumina.net/html-olympus/img/avatar4.webp",
            name: "Chris Greyson",
            country: "Austin, TX",
        }]
};

export const profilePageReducer = (state: ProfilePageType = initialState, action: ActionCreatorType) => {
    switch (action.type) {
        case MESSAGE.UPDATE_NEW_MESSAGE_TEXT:
            if (action.newText)
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

export const newMessageTextActionCreator = (newText: string) => ({
    type: MESSAGE.UPDATE_NEW_MESSAGE_TEXT,
    newText: newText,
});
export const newMessageActionCreator = () => ({
    type: MESSAGE.ADD_NEW_MESSAGE,
});
