import { v4 as uuidv4 } from "uuid";
import { POST, PostsType, RootStoreType } from "./state";

export const postReducer = (state: any, action: any) => {
  if (action.type === POST.UPDATE_NEW_POST_TEXT) {
    state = action.newText;
  } else if (action.type === POST.ADD_NEW_POST) {
    const postCreate: PostsType = {
      id: uuidv4(),
      post: state,
    };
    if (state.trim() !== "") {
      state.push(postCreate);
      state = "";
    }
  }
  return state;
};
