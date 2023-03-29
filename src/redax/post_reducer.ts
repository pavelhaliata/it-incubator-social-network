import { v4 as uuidv4 } from "uuid";
import { POST, PostsType } from "./state";

export const postReducer = (state: any, action: any) => {

  if (action.type === POST.UPDATE_NEW_POST_TEXT) {
    state.newPostTextData = action.newText;
    return state;
  } else if (action.type === POST.ADD_NEW_POST) {
    const postCreate: PostsType = {
      id: uuidv4(),
      post: state.newPostTextData,
    };
    if (state.newPostTextData.trim() !== "") {
      state.postsData.push(postCreate);
      state.newPostTextData = "";
      return state;
    }
  }
  return state;
};
