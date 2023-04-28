import { v4 as uuidv4 } from "uuid";
enum BLOG_PAGE {
  UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT",
  ADD_NEW_POST = "ADD-NEW-POST",
}
type NewPostTextActionCreatorType = ReturnType<typeof newPostTextAC>;
type NewPostActionCreatorType = ReturnType<typeof newPostAC>;
export type ActionCreatorBlogPageType = NewPostTextActionCreatorType | NewPostActionCreatorType;

export type PostDataType = {
  id: string;
  post: string;
  time: string
};

export type BlogPageInitialStateType = typeof initialState

const initialState = {
  newPostTextData: "" as string,
  postsData: [] as Array<PostDataType>,
};

export const blogPageReducer = (state: BlogPageInitialStateType = initialState, action: ActionCreatorBlogPageType): BlogPageInitialStateType => {
  switch (action.type) {
    case BLOG_PAGE.UPDATE_NEW_POST_TEXT:
        return {
          ...state,
          newPostTextData: action.newText
        }
    case BLOG_PAGE.ADD_NEW_POST:
      if (state.newPostTextData.trim() !== "") {
      const postData: PostDataType = {
        id: uuidv4(),
        post: state.newPostTextData,
        time: new Date().toLocaleTimeString().slice(0, -3)
      };
        return{
          ...state,
          postsData: [...state.postsData, postData],
          newPostTextData: ""
        }
      }
      return state;
    default:
      return state;
  }
};

export const newPostTextAC = (newText: string) => {
  return {
    type: BLOG_PAGE.UPDATE_NEW_POST_TEXT,
    newText: newText
  } as const;
};
export const newPostAC = () => ({ type: BLOG_PAGE.ADD_NEW_POST } as const);
