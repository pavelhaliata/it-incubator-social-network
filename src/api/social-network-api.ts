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
