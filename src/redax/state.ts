import { v4 as uuidv4 } from "uuid";
import { postReducer } from "./post_reducer";

export enum POST {
  UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT",
  ADD_NEW_POST = "ADD-NEW-POST",
  UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT",
  ADD_NEW_MESSAGE = "ADD_NEW_MESSAGE",
}

export type MessageType = {
  id: string;
  avatar: string;
  name: string;
  message: string;
  time: string;
};

export type PersonType = {
  id: string;
  backgroundImg: string;
  avatar: string;
  name: string;
  country: string;
};

export type PostsType = {
  id: string;
  post: string;
};

type StateDataType = {
  messagesData: Array<MessageType>;
  personsData: Array<PersonType>;
  postsData: Array<PostsType>;
  newPostTextData: string;
  newMessageTextData: string;
};

export type RootStoreType = {
  _state: StateDataType;
  _rerenderEntireTree: (value: StateDataType) => void;
  subscribe: (observer: any) => void;
  getState: () => void;
  dispatch: (action: any) => void;
};

const store: RootStoreType = {
  _state: {
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
      },
      {
        id: uuidv4(),
        backgroundImg: "https://html.crumina.net/html-olympus/img/friend4.webp",
        avatar: "https://html.crumina.net/html-olympus/img/avatar4.webp",
        name: "Chris Greyson",
        country: "Austin, TX",
      },
    ],
    postsData: [],
    newPostTextData: "",
    newMessageTextData: "",
  },

  getState() {
    return this._state;
  },

  _rerenderEntireTree() {},

  subscribe(observer: () => void) {
    this._rerenderEntireTree = observer;
  },
  dispatch(action) {
    this._state.newPostTextData = postReducer(this._state.newPostTextData, action)


    if (action.type === POST.UPDATE_NEW_POST_TEXT) {
      this._state.newPostTextData = action.newText;
      this._rerenderEntireTree(this._state);
    } else if (action.type === POST.ADD_NEW_POST) {
      const postCreate: PostsType = {
        id: uuidv4(),
        post: this._state.newPostTextData,
      };
      if (this._state.newPostTextData.trim() !== "") {
        this._state.postsData.push(postCreate);
        this._state.newPostTextData = "";
        this._rerenderEntireTree(this._state);
      }
    } else if (action.type === POST.UPDATE_NEW_MESSAGE_TEXT) {
      this._state.newMessageTextData = action.newText;
      this._rerenderEntireTree(this._state);
    } else if (action.type === POST.ADD_NEW_MESSAGE) {
      if (this._state.newMessageTextData.trim() !== "") {
        const newMessageData: MessageType = {
          id: uuidv4(),
          avatar: "https://html.crumina.net/html-olympus/img/author-main1.webp",
          name: "James Spiegel",
          message: this._state.newMessageTextData,
          time: new Date().toLocaleTimeString().slice(0, -3),
        };
        this._state.messagesData.push(newMessageData);
        this._state.newMessageTextData = "";
        this._rerenderEntireTree(this._state);
      }
    }
  },

};

export const updateNewPostText = (newText: string) => {
  store.dispatch({ type: POST.UPDATE_NEW_POST_TEXT, newText: newText });
};
export const createNewPost = () => {
  store.dispatch({ type: POST.ADD_NEW_POST });
};
export const updateNewMessageText = (newText: string) => {
  store.dispatch({ type: POST.UPDATE_NEW_MESSAGE_TEXT, newText: newText });
};
export const addNewMessage = () => {
  store.dispatch({ type: POST.ADD_NEW_MESSAGE });
};

export default store;
