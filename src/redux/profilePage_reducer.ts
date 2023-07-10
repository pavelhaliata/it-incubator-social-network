import { v4 as uuidv4 } from "uuid";
import { UserType } from "../api/social-network-api";


const initialState = {
  newMessageTextData: "" as string,
  messagesData: [] as Array<MessageType>,
  usersData: [] as Array<UserDomainType>,
};

export const profilePageReducer = (state: ProfilePageInitialStateType = initialState, action: ActionCreatorProfilePageType): ProfilePageInitialStateType => {
  switch (action.type) {
    case "UPDATE-NEW-MESSAGE-TEXT":
      return {
        ...state,
        newMessageTextData: action.newText,
      };
    case "ADD_NEW_MESSAGE":
      if (state.newMessageTextData.trim() !== "") {
        const message: MessageType = {
          id: uuidv4(),
          avatar: "https://html.crumina.net/html-olympus/img/author-main1.webp",
          name: "James Spiegel",
          message: state.newMessageTextData,
          time: new Date().toLocaleTimeString().slice(0, -3),
        };
        return {
          ...state,
          messagesData: [...state.messagesData, message],
          newMessageTextData: "",
        };
      }
      return state;
    case "FOLLOW": {
      return {
        ...state,
        usersData: state.usersData.map((i) =>
          i.id === action.userId ? { ...i, followed: true } : i
        ),
      };
    }
    case "UNFOLLOW":
      return {
        ...state,
        usersData: state.usersData.map((i) =>
          i.id === action.userId ? { ...i, followed: false } : i
        ),
      };
    case "SET-USERS":
      return {
        ...state,
        usersData: action.usersData.map(i => ({...i, backgroundImg: '', country: ''})),
      };
    default:
      return state;
  }
};

// actions
export const newMessageTextAC = (newText: string) =>
  ({ type: "UPDATE-NEW-MESSAGE-TEXT", newText } as const);

export const newMessageAC = () =>
  ({ type: "ADD_NEW_MESSAGE" } as const);

export const followAC = (userId: number) =>
  ({ type: "FOLLOW", userId } as const);

export const unFollowAC = (userId: number) =>
  ({ type: "UNFOLLOW", userId } as const);

export const setUsersAC = (usersData: Array<UserType>) =>
  ({ type: "SET-USERS", usersData } as const);


// types
export type ProfilePageInitialStateType = typeof initialState;

export type UserDomainType = UserType & {
  backgroundImg: string;
  country: string;
};

export type MessageType = {
  id: string;
  avatar: string;
  name: string;
  message: string;
  time: string;
};

export type ActionCreatorProfilePageType =
  | ReturnType<typeof newMessageTextAC>
  | ReturnType<typeof newMessageAC>
  | ReturnType<typeof followAC>
  | ReturnType<typeof unFollowAC>
  | ReturnType<typeof setUsersAC>;

 