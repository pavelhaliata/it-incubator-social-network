import { updateUserProfile } from "components/updateProfile/UpdateProfile";
import {Dispatch} from "redux";
import {v4 as uuidv4} from "uuid";
import {
    UserProfileType,
    socialNetworkAPI,
    UserType,
} from "../api/social-network-api";
import {
    RequestStatus,
    setErrorStatus,
    setRequestStatus,
} from "../app/app-reducer";
import {rejects, throws} from "assert";
import {FormikHelpers} from "formik";

const initialState = {
    newMessageTextData: "" as string,
    messagesData: [] as Array<MessageType>,
    usersData: [] as Array<UserDomainType>,
    pageSize: 52 as number,
    currentPage: 1 as number,
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
    selectedCurrentUser: [] as number[],
    followingStatusRequest: false as boolean,
    userStatus: '' as string,
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
        case "USER-PROFILE":
            return {
                ...state,
                userProfileData: action.profileUserData,
            };
        case "FOLLOW": {
            return {
                ...state,
                usersData: state.usersData.map((i) =>
                    i.id === action.userId ? {...i, followed: true} : i
                ),
            };
        }
        case "UNFOLLOW":
            return {
                ...state,
                usersData: state.usersData.map((i) =>
                    i.id === action.userId ? {...i, followed: false} : i
                ),
            };
        case "TOGGLE_FOLLOWING_STATUS_REQUEST":
            return {
                ...state,
                selectedCurrentUser: action.followingStatusRequest
                    ? [...state.selectedCurrentUser, action.userId]
                    : state.selectedCurrentUser.filter((i) => i !== action.userId),
            };
        case "USER-STATUS":
            return {
                ...state,
                userStatus: action.textStatus
            }
        default:
            return state;
    }
};

// actions
export const newMessageText = (newText: string) =>
    ({type: "UPDATE-NEW-MESSAGE-TEXT", newText} as const);

export const newMessage = () => ({type: "ADD_NEW_MESSAGE"} as const);

export const followPerson = (userId: number) =>
    ({type: "FOLLOW", userId} as const);

export const unFollowPerson = (userId: number) =>
    ({type: "UNFOLLOW", userId} as const);

export const setUsers = (usersData: Array<UserType>) =>
    ({type: "SET-USERS", usersData} as const);

export const setTotalUsersCount = (totalCount: number) =>
    ({type: "TOTAL-USERS-COUNT", totalCount} as const);

export const setCurrentPage = (currentPage: number) =>
    ({type: "CURRENT-PAGE", currentPage} as const);

export const profileUserData = (profileUserData: UserProfileType ) =>
    ({
        type: "USER-PROFILE",
        profileUserData,
    } as const);

// необходимо для дизейбла кнопки
export const toggleFollowingStatusRequest = (followingStatusRequest: boolean, userId: number) =>
    ({
        type: "TOGGLE_FOLLOWING_STATUS_REQUEST",
        followingStatusRequest,
        userId,
    } as const);

const setUserStatus = (textStatus: string) =>
    ({
        type: "USER-STATUS",
        textStatus
    } as const);


// thunks
export const getUsersAsync = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(setRequestStatus(RequestStatus.loading));
        socialNetworkAPI.getUsers(currentPage, pageSize)
            .then((res) => {
            dispatch(setUsers(res.data.items));
            dispatch(setTotalUsersCount(res.data.totalCount));
            dispatch(setRequestStatus(RequestStatus.succeed));
        });
    };
};
export const getUserProfileAsync = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(setRequestStatus(RequestStatus.loading));
        socialNetworkAPI.getUserProfile(userId)
        .then((res) => {
            dispatch(profileUserData(res.data));
            dispatch(setRequestStatus(RequestStatus.succeed));
        });
    };
};

export const updateUserProfileAsync = (data: any, submitProps: FormikHelpers<updateUserProfile>) => {
    return async (dispatch: Dispatch) => {
        dispatch(setRequestStatus(RequestStatus.loading));
        try{
            const res = await socialNetworkAPI.updateUserProfile(data)
            if (res.data.resultCode === 0){
                console.log(res.data)
                // dispatch(profileUserData(data));
                dispatch(setRequestStatus(RequestStatus.succeed))
            }else{
                submitProps.setStatus(res.data.messages[0])
            }
        }catch(error: any){
            console.warn(error)
        }
        
        
    };
};
export const followUserAsync = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleFollowingStatusRequest(true, userId));
        socialNetworkAPI.followUser(userId).then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(followPerson(userId));
                dispatch(toggleFollowingStatusRequest(false, userId));
            } else {
                dispatch(setErrorStatus(res.data.messages[0]));
                dispatch(setRequestStatus(RequestStatus.failed));
            }
        });
    };
};
export const unfollowUserAsync = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleFollowingStatusRequest(true, userId));
        socialNetworkAPI.unFollowUser(userId).then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(unFollowPerson(userId));
                dispatch(toggleFollowingStatusRequest(false, userId));
            } else {
                dispatch(setErrorStatus(res.data.messages[0]));
                dispatch(setRequestStatus(RequestStatus.failed));
            }
        });
    };
};

export const updateUserStatusAsync = (textStatus: string) => {
    return async (dispatch: Dispatch) => {
        try {
            const res = await socialNetworkAPI.updateUserStatus(textStatus)
            if (res.data.resultCode === 0) {
                dispatch(setUserStatus(textStatus))
            } else {
                console.log(res.data.messages)
            }
        } catch (error: any) {
            console.log(error.message)
        }
    }
}

export const getUserStatusAsync = (userId: number) => {
    return async (dispatch: Dispatch) => {
        try {
            const res = await socialNetworkAPI.getUserStatus(userId)
            dispatch(setUserStatus(res.data))
        } catch (error: any) {
            console.log(error.message)
        }
    }
}

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
    | ReturnType<typeof toggleFollowingStatusRequest>
    | ReturnType<typeof setUserStatus>;
