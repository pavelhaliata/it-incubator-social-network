import {v4 as uuidv4} from "uuid";
import {profilePageReducer} from "./profilePage_reducer";
import {postReducer} from "./blogPage_reducer";

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

export type PostType = {
    id: string;
    post: string;
};

export type ProfilePageType = {
    newMessageTextData: string
    messagesData: Array<MessageType>
};

export type BlogPageType = {
    newPostTextData: string;
    postsData: Array<PostType>;
};

export type StateDataType = {
    personsData: Array<PersonType>;
    profilePage: ProfilePageType;
    blogPage: BlogPageType;
};

export type ActionType = {
    type: string
    newText?: string
};

export type RootStoreType = {
    _state: StateDataType;
    _rerenderEntireTree: (value: StateDataType) => void;
    subscribe: (observer: any) => void;
    getState: () => void;
    dispatch: (action: ActionType) => void;
};

const store: RootStoreType = {
    _state: {
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
            },
        ],
        profilePage: {newMessageTextData: "", messagesData: []},
        blogPage: {newPostTextData: "", postsData: [],}
    },

    getState() {
        return this._state;
    },

    _rerenderEntireTree() {
    },

    subscribe(observer: () => void) {
        this._rerenderEntireTree = observer;
    },
    dispatch(action: ActionType) {
        this._state.blogPage = postReducer(this._state.blogPage, action)
        this._state.profilePage = profilePageReducer(this._state.profilePage, action)
        this._rerenderEntireTree(this._state);
    },

};


export default store;

