import axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: {
        'API-KEY': '46bf5cab-c958-45f9-89c4-0ee6d1b7ed40',
    },
})

export const socialNetworkAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<ResponseUsersType>(`users?page=${currentPage}&count=${pageSize}`)
    },
    getUserProfile(userId: number) {
        return instance.get<UserProfileType>(`profile/${userId}`)
    },
    currentUserFollower(userId: number) {
        return instance.get<boolean>(`/follow/${userId}`)
    },
    followUser(userId: number) {
        return instance.post<ResponseType>(`/follow/${userId}`)
    },
    unFollowUser(userId: number) {
        return instance.delete<ResponseType>(`/follow/${userId}`)
    },
    updateUserStatus(textStatus: string) {
        return instance.put<ResponseType<string>>('/profile/status', { status: textStatus })
    },
    getUserStatus(userId: number) {
        return instance.get<string>(`/profile/status/${userId}`)
    },
    updateUserProfile(profile: UpdateUserProfileType) {
        return instance.put<ResponseType>('/profile', profile)
    },
    uploadPhotoFile(file: string | Blob) {
        const formData = new FormData()
        formData.append('image', file)
        return instance.postForm<ResponseType<uploadPhotoType>>('/profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
    },
}

export const authAPI = {
    getAuthData() {
        return instance.get<ResponseType<AuthUserDataType>>('auth/me')
    },
    login(data: LoginDataType) {
        return instance.post<ResponseType<{ userId: number }>>('/auth/login', data)
    },
    logout() {
        return instance.delete<ResponseType>('/auth/login')
    },
    getCaptchaUrl() {
        return instance.get('/security/get-captcha-url')
    },
}

// types
export type LoginDataType = {
    email: string
    password: string
    rememberMe?: boolean
    captcha?: null | string
}

export type UserType = {
    name: string
    id: number
    photos: {
        small: null
        large: null
    }
    status: null
    followed: boolean
}

type ResponseUsersType = {
    items: Array<UserType>
    totalCount: number
    error: string
}

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
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}

export type UpdateUserProfileType = {
    aboutMe: string
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
}

export type AuthUserDataType = {
    id: number | null
    email: string | null
    login: string | null
}

type uploadPhotoType = {
    photos: {
        small: string
        large: string
    }
}

type ResponseType<T = {}> = {
    resultCode: number
    messages: string[]
    data: T
}
