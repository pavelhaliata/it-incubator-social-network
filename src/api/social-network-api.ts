import axios from "axios";

export type UserType = {
    name: string,
    id: number,
    photos: {
        small: null | string,
        large: null | string
    },
    status: null,
    followed: boolean
}

type UsersDataType = {
    items: Array<UserType>
    totalCount: number
    error: string
}
type FollowUserType = {
    resultCode: number
    fieldsErrors: Array<string>
    messages: Array<string>
    data: object
}

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "46bf5cab-c958-45f9-89c4-0ee6d1b7ed40"
    }
});

export const socialNetworkAPI = {
    getUsers() {
        return instance.get<UsersDataType>('users')
    },
    getFollowUser(userId: number){
        return instance.get<boolean>(`follow/${userId}`)
    },
    followUser(userId: number){
        return instance.post<FollowUserType>(`follow/${userId}`)
    },
    unfollowUser(userId: number){
        return instance.delete<FollowUserType>(`follow/${userId}`)
    }
}


