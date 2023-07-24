import {v4 as uuidv4} from "uuid";
import {profilePageReducer} from "../store-redux/MainPage_reducer";
import {blogPageReducer} from "../store-redux/blogPage_reducer";
import { ActionCreatorsTypes } from "./StoreContext";

type PersonType = {
    id: string;
    followed: string;
    backgroundImg: string;
    avatar: string;
    name: string;
    country: string;
};

type MessageType = {
    id: string;
    avatar: string;
    name: string;
    message: string;
    time: string;
};

 type PostType = {
    id: string;
    post: string;
    time: string
};

 type ProfilePageType = {
    newMessageTextData: string
    messagesData: Array<MessageType>
    personsData: Array<PersonType>;
};
 type BlogPageType = {
    postTextValue: string;
    postsData: Array<PostType>;
};

type StateDataType = {
    profilePage: ProfilePageType;
    blogPage: BlogPageType;
};

type ActionCreatorType = {
    type: string
    newText?: string
};
 type RootReduxStoreType = {
    _state: StateDataType;
    subscribe: (observer: any) => void;
    getState: () => void;
    dispatch: (action: ActionCreatorsTypes) => void;
};

type RootStoreType = {
    _state: StateDataType;
    _rerenderEntireTree: (value: StateDataType) => void;
    subscribe: (observer: any) => void;
    getState: () => void;
    dispatch: (action: ActionCreatorsTypes) => void;
};

const store: RootStoreType = {
    _state: {
        profilePage: {newMessageTextData: "", messagesData: [], personsData: []},
        blogPage: {postTextValue: "", postsData: []}
    },

    getState() {
        return this._state;
    },

    _rerenderEntireTree() {
    },

    subscribe(observer: () => void) {
        this._rerenderEntireTree = observer;
    },
    dispatch(action: any) {
        this._state.blogPage = blogPageReducer(this._state.blogPage, action)
        //this._state.profilePage = profilePageReducer(this._state.profilePage, action)
        this._rerenderEntireTree(this._state);
    },

};


export default store;

