import { v4 as uuidv4 } from "uuid";
import { messageReducer } from "./message_reducer";
import { postReducer } from "./post_reducer";



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

type BlogPageType = {
  newPostTextData: string;
  postsData: Array<PostsType>;
}

export type StateDataType = {
  messagesData: Array<MessageType>;
  personsData: Array<PersonType>;
  postsData: Array<PostsType>;
  newPostTextData: string;
  newMessageTextData: string;
  profilePage: { newMessageTextData: string, messagesData: Array<MessageType>;}
  blogPage: BlogPageType;
};

export type RootStoreType = {
  _state: StateDataType;
  _rerenderEntireTree: (value: StateDataType) => void;
  subscribe: (observer: any) => void;
  getState: () => void;
  dispatch: (action: any) => void;
};
export type ActionType = {
  type: string
  newText?: string
}
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
      {
        id: uuidv4(),
        backgroundImg: "https://html.crumina.net/html-olympus/img/friend4.webp",
        avatar: "https://html.crumina.net/html-olympus/img/avatar4.webp",
        name: "Chris Greyson",
        country: "Austin, TX",
      },
    ],
    messagesData: [],
    postsData: [],
    newPostTextData: "",
    newMessageTextData: "",
    profilePage: {newMessageTextData: "", messagesData: []},
    blogPage: {newPostTextData: "", postsData: [],} 

  },

  getState() {
    return this._state;
  },

  _rerenderEntireTree() {},

  subscribe(observer: () => void) {
    this._rerenderEntireTree = observer;
  },
  dispatch(action: ActionType) {

    this._state.blogPage = postReducer(this._state.blogPage, action)
    this._state.profilePage = messageReducer(this._state.profilePage, action)
    this._rerenderEntireTree(this._state);

  },

};


export default store;

//if (action.type === POST.UPDATE_NEW_POST_TEXT) {
//       this._state.newPostTextData = action.newText;
//       this._rerenderEntireTree(this._state);
//     } else if (action.type === POST.ADD_NEW_POST) {
//       const postCreate: PostsType = {
//         id: uuidv4(),
//         post: this._state.newPostTextData,
//       };
//       if (this._state.newPostTextData.trim() !== "") {
//         this._state.postsData.push(postCreate);
//         this._state.newPostTextData = "";
//         this._rerenderEntireTree(this._state);
//       }
//     } else