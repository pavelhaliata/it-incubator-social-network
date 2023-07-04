import { v4 as uuidv4 } from "uuid";
import { UserType } from "../api/social-network-api";

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

enum PROFILE_PAGE {
  UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT",
  ADD_NEW_MESSAGE = "ADD_NEW_MESSAGE",
  FOLLOW = "FOLLOW",
  UNFOLLOW = "UNFOLLOW",
  SET_USERS = "SET-USERS",
}

type NewMessageTextACType = ReturnType<typeof newMessageTextAC>;
type NewMessageACType = ReturnType<typeof newMessageAC>;
type FollowACType = ReturnType<typeof followAC>;
type UnFollowACType = ReturnType<typeof unFollowAC>;
type SetUsersACType = ReturnType<typeof setUsersAC>;

export type ActionCreatorProfilePageType =
  | NewMessageTextACType
  | NewMessageACType
  | FollowACType
  | UnFollowACType
  | SetUsersACType;

export type ProfilePageInitialStateType = typeof initialState;

const initialState = {
  newMessageTextData: "" as string,
  messagesData: [] as Array<MessageType>,
  usersData: [] as Array<UserDomainType>,
};

export const profilePageReducer = (state: ProfilePageInitialStateType = initialState, action: ActionCreatorProfilePageType): ProfilePageInitialStateType => {
  switch (action.type) {
    case PROFILE_PAGE.UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageTextData: action.newText,
      };
    case PROFILE_PAGE.ADD_NEW_MESSAGE:
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
    case PROFILE_PAGE.FOLLOW: {
      return {
        ...state,
        usersData: state.usersData.map((i) =>
          i.id === action.userId ? { ...i, followed: true } : i
        ),
      };
    }
    case PROFILE_PAGE.UNFOLLOW:
      return {
        ...state,
        usersData: state.usersData.map((i) =>
          i.id === action.userId ? { ...i, followed: false } : i
        ),
      };
    case PROFILE_PAGE.SET_USERS:
      return {
        ...state,
        usersData: action.usersData.map(u => ({...u, backgroundImg: '', country: ''})),
      };
    default:
      return state;
  }
};

export const newMessageTextAC = (newText: string) =>
  ({ type: PROFILE_PAGE.UPDATE_NEW_MESSAGE_TEXT, newText } as const);

export const newMessageAC = () =>
  ({ type: PROFILE_PAGE.ADD_NEW_MESSAGE } as const);

export const followAC = (userId: number) =>
  ({ type: PROFILE_PAGE.FOLLOW, userId } as const);

export const unFollowAC = (userId: number) =>
  ({ type: PROFILE_PAGE.UNFOLLOW, userId } as const);

export const setUsersAC = (usersData: Array<UserType>) =>
  ({ type: PROFILE_PAGE.SET_USERS, usersData } as const);





 