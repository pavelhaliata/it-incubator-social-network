import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        "API-KEY": process.env.REACT_APP_API_KEY,
    },
});
export const socialNetworkAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<ResponseUsersType>(`users?page=${currentPage}&count=${pageSize}`);
    },
    getProfileUser(userId: number) {
        return instance.get<ProfileUserType>(`profile/${userId}`)
    },
    currentUserFollower(userId: number){
        return instance.get<boolean>(`/follow/${userId}`)
    },
    followUser(userId: number){
        return instance.post<ResponseFollowerUserType>(`/follow/${userId}`)
    },
    unFollowUser(userId: number){
        return instance.delete<ResponseFollowerUserType>(`/follow/${userId}`)
    },
    authUserData(){
        return instance.get<ResponseAuthUserDataType>(`/auth/me`)
    }
};

// types
export type UserType = {
    name: string;
    id: number;
    photos: {
        small: null;
        large: null;
    };
    status: null;
    followed: boolean;
};

type ResponseUsersType = {
    items: Array<UserType>;
    totalCount: number;
    error: string;
};

export type ProfileUserType = {
  aboutMe: string
  contacts: {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
  },
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  userId: number
  photos: {
    small: string
    large: string
  }
}

type ResponseFollowerUserType = {
    resultCode: number
    messages: string[]
    data: object
};

type ResponseAuthUserDataType = {
    resultCode: number
    messages: string[]
    data: AuthUserDataType
}

export type AuthUserDataType = {
    id: number | null
    email: string | null
    login: string | null
}
