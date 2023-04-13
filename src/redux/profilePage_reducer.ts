import { v4 as uuidv4 } from "uuid";

export type UserType = {
  id: string;
  followed: boolean;
  backgroundImg: string;
  avatar: string;
  name: string;
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

type InitialState = typeof initialState

const initialState = {
  newMessageTextData: "" as string,
  messagesData: [] as Array<MessageType>,
  usersData: [] as Array<UserType>,
};

export const profilePageReducer = (state: InitialState = initialState, action: ActionCreatorProfilePageType
): InitialState => {
  
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
          messagesData: [...state.messagesData.map(i => ({ ...i })),
            message],
          newMessageTextData: "",
        };
      }
      return state;
    case PROFILE_PAGE.FOLLOW:
      return {
        ...state,
        usersData: state.usersData.map((i) => {
          if (i.id === action.userId) {
            return { ...i, followed: true };
          }
          return i;
        }),
      };
    case PROFILE_PAGE.UNFOLLOW:
      return {
        ...state,
        usersData: state.usersData.map((i) => {
          if (i.id === action.userId) {
            return { ...i, followed: false };
          }
          return i;
        }),
      };
    case PROFILE_PAGE.SET_USERS:
      return {
        ...state,
        usersData: [...action.usersData],
      };
    default:
      return state;
  }
};

export const newMessageTextAC = (newText: string) =>
  ({
    type: PROFILE_PAGE.UPDATE_NEW_MESSAGE_TEXT,
    newText: newText,
  } as const);

export const newMessageAC = () =>
  ({
    type: PROFILE_PAGE.ADD_NEW_MESSAGE,
  } as const);

export const followAC = (userId: string) =>
  ({ type: PROFILE_PAGE.FOLLOW, userId: userId } as const);

export const unFollowAC = (userId: string) =>
  ({
    type: PROFILE_PAGE.UNFOLLOW,
    userId: userId,
  } as const);

export const setUsersAC = (usersData: Array<UserType>) =>
  ({
    type: PROFILE_PAGE.SET_USERS,
    usersData: usersData,
  } as const);
