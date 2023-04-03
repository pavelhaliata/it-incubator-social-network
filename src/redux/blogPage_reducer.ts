import { v4 as uuidv4 } from "uuid";
import {ActionCreatorType, BlogPageType, PostType} from "./store";

enum POST {
  UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT",
  ADD_NEW_POST = "ADD-NEW-POST",
}

const initialState: BlogPageType = {
  newPostTextData: "",
  postsData: [],
};

export const blogPageReducer = (state: BlogPageType = initialState, action: ActionCreatorType) => {
  switch (action.type) {
    case POST.UPDATE_NEW_POST_TEXT:
      if(action.newText)
      state.newPostTextData = action.newText;
      return state;
    case POST.ADD_NEW_POST:
      const postCreate: PostType = {
        id: uuidv4(),
        post: state.newPostTextData,
      };
      if (state.newPostTextData.trim() !== "") {
        state.postsData.push(postCreate);
        state.newPostTextData = "";
      }
      return state;
    default:
      return state;
  }
};

export const newPostTextActionCreator = (newText: string) => ({
  type: POST.UPDATE_NEW_POST_TEXT,
  newText: newText,
});
export const newPostActionCreator = () => ({ type: POST.ADD_NEW_POST });
