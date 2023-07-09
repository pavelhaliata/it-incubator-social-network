import {v4 as uuidv4} from "uuid";


const initialState = {
    postTextValue: "" as string,
    postsData: [] as Array<PostDataType>,
};

export const blogPageReducer = (state: BlogPageInitialStateType = initialState, action: ActionCreatorBlogPageType): BlogPageInitialStateType => {
    switch (action.type) {
        case "POST-TEXT-VALUE":
            return {
                ...state,
                postTextValue: action.value
            }
        case "CREATE-NEW-POST":
            if (state.postTextValue.trim() !== "") {
                const postData: PostDataType = {
                    id: uuidv4(),
                    post: state.postTextValue,
                    time: new Date().toLocaleTimeString().slice(0, -3)
                };
                return {
                    ...state,
                    postsData: [...state.postsData, postData],
                    postTextValue: ""
                }
            }
            return state;
        default:
            return state;
    }
};


// action
export const setPostTextValueAC = (value: string) => {
    return {
        type: "POST-TEXT-VALUE",
        value
    } as const;
};
export const createPostAC = () => ({type: "CREATE-NEW-POST"} as const);

// types

export type ActionCreatorBlogPageType =
    | ReturnType<typeof setPostTextValueAC>
    | ReturnType<typeof createPostAC>

export type PostDataType = {
    id: string;
    post: string;
    time: string
};

export type BlogPageInitialStateType = typeof initialState
