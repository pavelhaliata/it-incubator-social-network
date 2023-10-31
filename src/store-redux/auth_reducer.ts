import { authAPI, AuthUserDataType, LoginDataType } from 'api/social-network-api'
import { setErrorStatus } from '../app/app-reducer'
import { Dispatch } from 'redux'
import { FormikHelpers } from 'formik'
import { LoginFormValues } from 'pages/login/Login'
import { ThunkAction } from 'redux-thunk'
import { AppRootState } from './redux-store'

const initialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isLogin: false as boolean,
    isInitialization: false as boolean,
    captchaUrl: null as string | null,
}

export const authReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'auth/USER_DATA':
            return {
                ...state,
                ...action.data,
            }
        case 'auth/LOGIN':
            return {
                ...state,
                isLogin: action.status,
            }
        case 'auth/INITIALIZATION':
            return {
                ...state,
                isInitialization: action.status,
            }
        case 'auth/CAPTCHA':
            return {
                ...state,
                captchaUrl: action.payload.url,
            }
        default:
            return state
    }
}

// actions
const setAuthUserData = (data: AuthUserDataType) =>
    ({
        type: 'auth/USER_DATA',
        data,
    }) as const

const isLogin = (status: boolean) => ({ type: 'auth/LOGIN', status }) as const
const Initialization = (status: boolean) => ({ type: 'auth/INITIALIZATION', status }) as const
const captchaUrl = (url: string | null) => ({ type: 'auth/CAPTCHA', payload: { url } }) as const

// thunks
export const appInitializationAsync = (): ThunkAction<void, AppRootState, unknown, ActionType> => {
    return async (dispatch: Dispatch) => {
        try {
            const res = await authAPI.getAuthData()
            if (res.data.resultCode === 0) {
                dispatch(isLogin(true))
                dispatch(setAuthUserData(res.data.data))
            } else {
                dispatch(isLogin(false))
                dispatch(setErrorStatus(res.data.messages[0]))
                console.warn(res.data.messages[0])
            }
        } catch (error) {
            dispatch(isLogin(false))
            console.log(error)
        } finally {
            dispatch(Initialization(true))
        }
    }
}
export const loginAsync = (
    data: LoginDataType,
    submitProps: FormikHelpers<LoginFormValues>,
): ThunkAction<void, AppRootState, unknown, ActionType> => {
    return async (dispatch: Dispatch<any>) => {
        try {
            const res = await authAPI.login(data)
            if (res.data.resultCode === 0) {
                dispatch(isLogin(true))
                dispatch(setErrorStatus(null))
            } else {
                if (res.data.resultCode === 10) {
                    dispatch(getCaptchaUrlAsync())
                }
                dispatch(isLogin(false))
                dispatch(setErrorStatus(res.data.messages[0]))
                submitProps.setStatus(res.data.messages[0])
            }
        } catch (error) {
            dispatch(isLogin(false))
            console.log(error)
        }
    }
}
export const logoutAsync = (): ThunkAction<void, AppRootState, unknown, ActionType> => {
    return async (dispatch: Dispatch) => {
        try {
            const res = await authAPI.logout()
            if (res.data.resultCode === 0) {
                dispatch(isLogin(false))
                dispatch(setAuthUserData({ email: null, login: null, id: null }))
                dispatch(captchaUrl(null))
            } else {
                console.warn(res.data.messages)
            }
        } catch (error) {
            console.warn(error)
        }
    }
}
export const getCaptchaUrlAsync = () => {
    return async (dispatch: Dispatch) => {
        try {
            const res = await authAPI.getCaptchaUrl()
            dispatch(captchaUrl(res.data.url))
        } catch (error) {
            console.warn(error)
        }
    }
}

// types
type InitialStateType = typeof initialState
type ThuncAsynkType = typeof getCaptchaUrlAsync
type ActionType =
    | ReturnType<typeof setAuthUserData>
    | ReturnType<typeof isLogin>
    | ReturnType<typeof Initialization>
    | ReturnType<typeof captchaUrl>

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootState, unknown, ActionType>
