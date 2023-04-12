import { v4 as uuidv4 } from "uuid";
enum POST {
  UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT",
  ADD_NEW_POST = "ADD-NEW-POST",
}
type NewPostTextActionCreatorType = ReturnType<typeof newPostTextActionCreator>;
type NewPostActionCreatorType = ReturnType<typeof newPostActionCreator>;
export type ActionCreatorBlogPageType = NewPostTextActionCreatorType | NewPostActionCreatorType;

export type PostDataType = {
  id: string;
  post: string;
  time: string
};

export type InitialBlogPageStateType = typeof initialState


const initialState = {
  newPostTextData: "" as string,
  postsData: [] as Array<PostDataType>,
};

export const blogPageReducer = (state: InitialBlogPageStateType = initialState, action: ActionCreatorBlogPageType): InitialBlogPageStateType => {
  switch (action.type) {
    case POST.UPDATE_NEW_POST_TEXT:
        return {
          ...state,
          newPostTextData: action.newText
        }
    case POST.ADD_NEW_POST:
      if (state.newPostTextData.trim() !== "") {
      const postData: PostDataType = {
        id: uuidv4(),
        post: state.newPostTextData,
        time: new Date().toLocaleTimeString().slice(0, -3)
      };
        return{
          ...state,
          postsData: [...state.postsData.map(p => ({...p})), postData], //!!! уточнить по поводу глубокой копии с помощью map
          newPostTextData: ""
        }
      }
      return state;
    default:
      return state;
  }
};

export const newPostTextActionCreator = (newText: string) => {
  return {
    type: POST.UPDATE_NEW_POST_TEXT,
    newText: newText
  } as const;
};
export const newPostActionCreator = () => ({ type: POST.ADD_NEW_POST } as const);
