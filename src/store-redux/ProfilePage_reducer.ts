import { AxiosResponse } from "axios";
import { Dispatch } from "redux";
import {
  socialNetworkAPI,
  UpdateUserProfileType,
  UserProfileType,
  UserType,
} from "../api/social-network-api";
import {
  RequestStatus,
  setErrorStatus,
  setRequestStatus,
} from "../app/app-reducer";
import { updateObjectInArray } from "../utils/object-helpers";
import { AppThunk } from "./redux-store";

const initialState = {
  newMessageTextData: "" as string,
  messagesData: [] as Array<MessageType>,
  usersData: [] as UserDomainType[],
  pageSize: 52 as number,
  currentPage: 1 as number,
  usersFilter: {
    term: "",
    friends: null,
  } as usersFilterType,
  totalUsersCount: 0 as number,
  userProfileData: {
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
  } as UserProfileType,
  userStatus: "" as string,
  selectedCurrentUser: [] as number[],
  followingStatusRequest: false as boolean,
};

export const profilePageReducer = (
  state: ProfilePageInitialStateType = initialState,
  action: MainPageActionsType
): ProfilePageInitialStateType => {
  switch (action.type) {
    case "main/SET-USERS":
      return {
        ...state,
        usersData: action.usersData.map((i) => ({
          ...i,
          backgroundImg: "",
          country: "",
        })),
      };
    case "main/TOTAL-USERS-COUNT":
      return {
        ...state,
        totalUsersCount: action.totalCount,
      };
    case "main/CURRENT-PAGE":
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case "main/USERS-FILTER":
      return {
        ...state,
        usersFilter: action.payload.filter,
      };
    case "main/USER-PROFILE":
      return {
        ...state,
        userProfileData: action.profileUserData,
      };
    case "main/FOLLOW": {
      return {
        ...state,
        usersData: updateObjectInArray(state.usersData, action.payload.userId, {
          followed: true,
        }),
      };
    }
    case "main/UNFOLLOW": {
      return {
        ...state,
        usersData: updateObjectInArray(state.usersData, action.payload.userId, {
          followed: false,
        }),
      };
    }
    case "main/FOLLOWING_STATUS_REQUEST":
      return {
        ...state,
        selectedCurrentUser: action.followingStatusRequest
          ? [...state.selectedCurrentUser, action.userId]
          : state.selectedCurrentUser.filter((i) => i !== action.userId),
      };
    case "main/USER-STATUS":
      return {
        ...state,
        userStatus: action.textStatus,
      };
    case "main/UPLOAD-PHOTO":
      return {
        ...state,
        userProfileData: {
          ...state.userProfileData,
          photos: { ...state.userProfileData.photos, small: action.photoFile },
        },
      };
    default:
      return state;
  }
};

// actions

export const setUsers = (usersData: UserType[]) =>
  ({ type: "main/SET-USERS", usersData } as const);

export const setTotalUsersCount = (totalCount: number) =>
  ({ type: "main/TOTAL-USERS-COUNT", totalCount } as const);

export const setCurrentPage = (currentPage: number) =>
  ({ type: "main/CURRENT-PAGE", currentPage } as const);

export const setUsersFilter = (filter: usersFilterType) =>
  ({ type: "main/USERS-FILTER", payload: { filter } } as const);

export const profileUserData = (profileUserData: UserProfileType) =>
  ({
    type: "main/USER-PROFILE",
    profileUserData,
  } as const);

export const follow = (userId: number) =>
  ({
    type: "main/FOLLOW",
    payload: { userId },
  } as const);

export const unFollow = (userId: number) =>
  ({
    type: "main/UNFOLLOW",
    payload: { userId },
  } as const);

// необходимо для дизейбла кнопки
export const toggleFollowingStatusRequest = (
  followingStatusRequest: boolean,
  userId: number
) =>
  ({
    type: "main/FOLLOWING_STATUS_REQUEST",
    followingStatusRequest,
    userId,
  } as const);

const setUserStatus = (textStatus: string) =>
  ({
    type: "main/USER-STATUS",
    textStatus,
  } as const);

const uploadPhoto = (photoFile: string) =>
  ({ type: "main/UPLOAD-PHOTO", photoFile } as const);

// thunks
export const getUsersAsync =
  (currentPage: number, pageSize: number, filter: usersFilterType): AppThunk =>
  async (dispatch) => {
    dispatch(setRequestStatus(RequestStatus.loading));
    dispatch(setCurrentPage(currentPage));
    dispatch(setUsersFilter(filter));
    try {
      const res = await socialNetworkAPI.getUsers(
        currentPage,
        pageSize,
        filter.term,
        filter.friends
      );
      dispatch(setUsers(res.data.items));
      dispatch(setTotalUsersCount(res.data.totalCount));
      dispatch(setRequestStatus(RequestStatus.succeed));
    } catch (error) {
      console.warn(error);
      dispatch(setRequestStatus(RequestStatus.failed));
    }
  };
export const getUserProfileAsync =
  (userId: number): AppThunk =>
  async (dispatch) => {
    dispatch(setRequestStatus(RequestStatus.loading));
    try {
      const res = await socialNetworkAPI.getUserProfile(userId);
      dispatch(profileUserData(res.data));
      dispatch(setRequestStatus(RequestStatus.succeed));
    } catch (error) {
      console.warn(error);
      dispatch(setRequestStatus(RequestStatus.failed));
    }
  };

export const updateUserProfileAsync =
  (data: UpdateUserProfileType): AppThunk =>
  async (dispatch, getState) => {
    const userId = getState().authData.id;
    try {
      const res = await socialNetworkAPI.updateUserProfile(data);
      if (res.data.resultCode === 0) {
        userId !== null && dispatch(getUserProfileAsync(userId));
      } else {
        return Promise.reject(res.data.messages);
      }
    } catch (error: any) {
      console.warn(error);
    }
  };
export const followAsync = (userId: number): AppThunk => {
  return (dispatch) => {
    followUnfollowFlow(
      dispatch,
      userId,
      socialNetworkAPI.followUser(userId),
      follow(userId)
    );
  };
};
export const unfollowAsync = (userId: number): AppThunk => {
  return async (dispatch) => {
    followUnfollowFlow(
      dispatch,
      userId,
      socialNetworkAPI.unFollowUser(userId),
      unFollow(userId)
    );
  };
};

const followUnfollowFlow = async (
  dispatch: Dispatch,
  userId: number,
  apiRequest: Promise<AxiosResponse>,
  actionCreator: ReturnType<typeof follow> | ReturnType<typeof unFollow>
) => {
  dispatch(toggleFollowingStatusRequest(true, userId));
  try {
    const res = await apiRequest;
    if (res.data.resultCode === 0) {
      dispatch(actionCreator);
      dispatch(toggleFollowingStatusRequest(false, userId));
    } else {
      dispatch(setErrorStatus(res.data.messages[0]));
    }
  } catch (error) {
    console.warn(error);
  }
};

export const updateUserStatusAsync = (textStatus: string): AppThunk => {
  return async (dispatch) => {
    try {
      const res = await socialNetworkAPI.updateUserStatus(textStatus);
      if (res.data.resultCode === 0) {
        dispatch(setUserStatus(textStatus));
      } else {
        console.log(res.data.messages);
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };
};

export const getUserStatusAsync = (userId: number): AppThunk => {
  return async (dispatch) => {
    try {
      const res = await socialNetworkAPI.getUserStatus(userId);
      dispatch(setUserStatus(res.data));
    } catch (error: any) {
      console.log(error.message);
    }
  };
};

export const uploadPhotoAsync = (photoFile: string | Blob): AppThunk => {
  return async (dispatch) => {
    dispatch(setErrorStatus(null));
    try {
      const res = await socialNetworkAPI.uploadPhotoFile(photoFile);
      if (res.data.resultCode === 0) {
        dispatch(uploadPhoto(res.data.data.photos.large));
      } else {
        dispatch(setErrorStatus(res.data.messages[0]));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

// types
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

export type usersFilterType = {
  term: string;
  friends: null | boolean;
};
export type ProfilePageInitialStateType = typeof initialState;

export type MainPageActionsType =
  | ReturnType<typeof setUsers>
  | ReturnType<typeof setTotalUsersCount>
  | ReturnType<typeof setCurrentPage>
  | ReturnType<typeof profileUserData>
  | ReturnType<typeof follow>
  | ReturnType<typeof unFollow>
  | ReturnType<typeof toggleFollowingStatusRequest>
  | ReturnType<typeof uploadPhoto>
  | ReturnType<typeof setUserStatus>
  | ReturnType<typeof setUsersFilter>;

// time: new Date().toLocaleTimeString().slice(0, -3)
