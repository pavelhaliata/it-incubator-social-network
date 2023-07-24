import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "46bf5cab-c958-45f9-89c4-0ee6d1b7ed40",
    },
});
export const socialNetworkAPI = {
    getUsers(page: number) {
        return instance.get<ResponseUsersType>(`users?count=52&page=${page}`);
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
    messages: Array<string>
    data: object
};

type ResponseAuthUserDataType = {
    resultCode: number
    messages: Array<string>
    data: AuthUserDataType
}

export type AuthUserDataType = {
    id: number | null
    email: string | null
    login: string | null
}