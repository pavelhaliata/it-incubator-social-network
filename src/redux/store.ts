import {v4 as uuidv4} from "uuid";
import {profilePageReducer} from "./profilePage_reducer";
import {blogPageReducer} from "./blogPage_reducer";

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
    personsData: Array<PersonType>;
};

export type BlogPageType = {
    newPostTextData: string;
    postsData: Array<PostType>;
};

export type StateDataType = {
    profilePage: ProfilePageType;
    blogPage: BlogPageType;
};

export type ActionCreatorType = {
    type: string
    newText?: string
};

export type RootStoreType = {
    _state: StateDataType;
    _rerenderEntireTree: (value: StateDataType) => void;
    subscribe: (observer: any) => void;
    getState: () => void;
    dispatch: (action: ActionCreatorType) => void;
};

const store: RootStoreType = {
    _state: {
        profilePage: {newMessageTextData: "", messagesData: [], personsData: []},
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
    dispatch(action: ActionCreatorType) {
        this._state.blogPage = blogPageReducer(this._state.blogPage, action)
        this._state.profilePage = profilePageReducer(this._state.profilePage, action)
        this._rerenderEntireTree(this._state);
    },

};


export default store;

