import { Dispatch } from "redux";
import { v4 as uuidv4 } from "uuid";
import {
  ProfileUserType,
  socialNetworkAPI,
  UserType,
} from "../api/social-network-api";
import {
  RequestStatus,
  setErrorStatus,
  setRequestStatus,
} from "../app/app-reducer";

const initialState = {
  newMessageTextData: "" as string,
  messagesData: [] as Array<MessageType>,
  usersData: [] as Array<UserDomainType>,
  pageSize: 1000 as number,
  currentPage: 1 as number,
  totalUsersCount: 0 as number,
  profileUserData: {
    aboutMe: "",
    contacts: {
      facebook: "",
      website: "",
      vk: "",
      twitter: "",
      instagram: "",
      youtube: "",
      github: "",
      mainLink: "",
    },
    lookingForAJob: false,
    lookingForAJobDescription: "",
    fullName: "",
    userId: 0,
    photos: {
      small: "",
      large: "",
    },
  } as ProfileUserType,
  selectedCurrentUser: [] as Array<number>,
  toggleStatusRequest: false as boolean
};

export const profilePageReducer = (
  state: ProfilePageInitialStateType = initialState,
  action: ActionProfilePageType
): ProfilePageInitialStateType => {
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
        usersData: action.usersData.map((i) => ({
          ...i,
          backgroundImg: "",
          country: "",
        })),
      };
    case "TOTAL-USERS-COUNT":
      return {
        ...state,
        totalUsersCount: action.totalCount,
      };
    case "CURRENT-PAGE":
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case "PROFILE-USER":
      return {
        ...state,
        profileUserData: action.profileUserData,
      };
    case "TOGGLE_STATUS_REQUEST":
      return{
        ...state,
        selectedCurrentUser: action.toggleStatusRequest ? [...state.selectedCurrentUser, action.userId]
            : state.selectedCurrentUser.filter(i => i !== action.userId)
      }
    default:
      return state;
  }
};

// actions
export const newMessageText = (newText: string) =>
  ({ type: "UPDATE-NEW-MESSAGE-TEXT", newText } as const);

export const newMessage = () => ({ type: "ADD_NEW_MESSAGE" } as const);

export const followPerson = (userId: number) =>
  ({ type: "FOLLOW", userId } as const);

export const unFollowPerson = (userId: number) =>
  ({ type: "UNFOLLOW", userId } as const);

export const setUsers = (usersData: Array<UserType>) =>
  ({ type: "SET-USERS", usersData } as const);

export const setTotalUsersCount = (totalCount: number) =>
  ({ type: "TOTAL-USERS-COUNT", totalCount } as const);

export const setCurrentPage = (currentPage: number) =>
  ({ type: "CURRENT-PAGE", currentPage } as const);

export const profileUserData = (profileUserData: any) =>
  ({
    type: "PROFILE-USER",
    profileUserData,
  } as const);

const toggleStatusRequest = (toggleStatusRequest: boolean, userId: number) => ({
  type: "TOGGLE_STATUS_REQUEST", toggleStatusRequest, userId
} as const)

// thunks
export const getUsers = (currentPage: number) => {
  return (dispatch: Dispatch) => {
    dispatch(setRequestStatus(RequestStatus.loading));
    socialNetworkAPI.getUsers(currentPage).then((res) => {
      dispatch(setUsers(res.data.items));
      dispatch(setTotalUsersCount(res.data.totalCount));
      dispatch(setRequestStatus(RequestStatus.succeed));
    });
  };
};
export const getProfileUser = (userId: number) => {
  return (dispatch: Dispatch) => {
    dispatch(setRequestStatus(RequestStatus.loading));
    socialNetworkAPI.getProfileUser(userId).then((res) => {
      dispatch(profileUserData(res.data));
      dispatch(setRequestStatus(RequestStatus.succeed));
    });
    socialNetworkAPI
      .currentUserFollower(userId)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {});
  };
};
export const followUser = (userId: number) => {
  return (dispatch: Dispatch) => {
    dispatch(setRequestStatus(RequestStatus.loading));
    dispatch(toggleStatusRequest(true, userId))
    socialNetworkAPI.followUser(userId).then((res) => {
      if (res.data.resultCode === 0) {
        dispatch(followPerson(userId));
        dispatch(setRequestStatus(RequestStatus.succeed));
        dispatch(toggleStatusRequest(false, userId))
      } else {
        dispatch(setErrorStatus(res.data.messages[0]));
        dispatch(setRequestStatus(RequestStatus.failed));
      }
    });
  };
};
export const unfollowUser = (userId: number) => {
  return (dispatch: Dispatch) => {
    dispatch(setRequestStatus(RequestStatus.loading));
    dispatch(toggleStatusRequest(true, userId))
    socialNetworkAPI.unFollowUser(userId).then((res) => {
      if (res.data.resultCode === 0) {
        dispatch(unFollowPerson(userId));
        dispatch(setRequestStatus(RequestStatus.succeed));
        dispatch(toggleStatusRequest(false, userId))
      } else {
        dispatch(setErrorStatus(res.data.messages[0]));
        dispatch(setRequestStatus(RequestStatus.succeed));
      }
    });
  };
};

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

export type ActionProfilePageType =
  | ReturnType<typeof newMessageText>
  | ReturnType<typeof newMessage>
  | ReturnType<typeof followPerson>
  | ReturnType<typeof unFollowPerson>
  | ReturnType<typeof setUsers>
  | ReturnType<typeof setTotalUsersCount>
  | ReturnType<typeof setCurrentPage>
  | ReturnType<typeof profileUserData>
  | ReturnType<typeof toggleStatusRequest>
