import axios from "axios";
import { updateUserProfile } from "components/updateProfile/UpdateProfile";


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
    getUserProfile(userId: number) {
        return instance.get<UserProfileType>(`profile/${userId}`)
    },
    currentUserFollower(userId: number){
        return instance.get<boolean>(`/follow/${userId}`)
    },
    followUser(userId: number){
        return instance.post<ResponseType>(`/follow/${userId}`)
    },
    unFollowUser(userId: number){
        return instance.delete<ResponseType>(`/follow/${userId}`)
    },
    updateUserStatus (textStatus: string) {
        return instance.put<ResponseType<string>>('/profile/status', {status: textStatus})
    },
    getUserStatus(userId: number) {
        return instance.get<string>(`/profile/status/${userId}`)
    },
    updateUserProfile (data: any) {
        return instance.put<ResponseType>('/profile', {data})
    }
}


export const authAPI = {
    getAuthData(){
        return instance.get<ResponseType<AuthUserDataType>>('auth/me')
    },
    login(data: LoginDataType){
        return instance.post<ResponseType<{userId: number}>>('/auth/login',data)
    },
    logout(){
        return instance.delete<ResponseType>('/auth/login')
    }
}

// types
export type LoginDataType = {
    email: string
    password: string
    rememberMe?: boolean
}

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

export type UserProfileType = {
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

export type AuthUserDataType = {
    id: number | null
    email: string | null
    login: string | null
}

type ResponseType<T = {}> = {
    resultCode: number
    messages: string[]
    data: T
};
