import { v4 as uuidv4 } from "uuid";
import { PostType } from "./state";

enum POST {
  UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT",
  ADD_NEW_POST = "ADD-NEW-POST",
}

export const postReducer = (state: any, action: any) => {
  switch (action.type) {
    case POST.UPDATE_NEW_POST_TEXT:
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

export const updateNewPostText = (newText: string) => ({
  type: POST.UPDATE_NEW_POST_TEXT,
  newText: newText,
});
export const createNewPost = () => ({ type: POST.ADD_NEW_POST });
