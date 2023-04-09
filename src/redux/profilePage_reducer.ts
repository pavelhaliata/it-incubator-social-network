import {v4 as uuidv4} from "uuid";

export type PersonType = {
    id: string;
    backgroundImg: string;
    avatar: string;
    name: string;
    country: string;
};
export type MessageType = {
    id: string;
    avatar: string;
    name: string;
    message: string;
    time: string;
};
export type ProfilePageType = {
    newMessageTextData: string
    messagesData: Array<MessageType>
    personsData: Array<PersonType>;
};

enum PROFILE_PAGE {
    UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT",
    ADD_NEW_MESSAGE = "ADD_NEW_MESSAGE",
}

type NewMessageTextActionCreatorType = ReturnType<typeof newMessageTextActionCreator>;
type NewMessageActionCreatorType = ReturnType<typeof newMessageActionCreator>;
export type ActionCreatorTypeProfilePage = NewMessageTextActionCreatorType | NewMessageActionCreatorType;

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

export const profilePageReducer = (state: ProfilePageType = initialState, action: ActionCreatorTypeProfilePage) => {
    switch (action.type) {
        case PROFILE_PAGE.UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageTextData: action.newText
            }
            return state;
        case PROFILE_PAGE.ADD_NEW_MESSAGE:
            if (state.newMessageTextData.trim() !== "") {
                const messageData: MessageType = {
                    id: uuidv4(),
                    avatar: "https://html.crumina.net/html-olympus/img/author-main1.webp",
                    name: "James Spiegel",
                    message: state.newMessageTextData,
                    time: new Date().toLocaleTimeString().slice(0, -3),
                };
                return {
                    ...state,
                    messagesData: [...state.messagesData.map(i => ({...i})), messageData],
                    newMessageTextData: ""
                }
            }
            return state;
        default:
            return state;
    }
};

export const newMessageTextActionCreator = (newText: string) => ({
    type: PROFILE_PAGE.UPDATE_NEW_MESSAGE_TEXT,
    newText: newText,
} as const);
export const newMessageActionCreator = () => ({
    type: PROFILE_PAGE.ADD_NEW_MESSAGE,
} as const);
