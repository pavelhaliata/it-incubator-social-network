import {authAPI, AuthUserDataType, LoginDataType} from "api/social-network-api";
import {setErrorStatus} from "../app/app-reducer";
import {Dispatch} from "redux";

const initialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isLogin: false as boolean,
    isInitialization: false as boolean,
};

export const authReducer = (
    state: InitialStateType = initialState,
    action: ActionType
): InitialStateType => {
    switch (action.type) {
        case "AUTH_USER_DATA":
            return {
                ...state,
                ...action.data,
            };
        case "AUTH_LOGIN":
            return {
                ...state,
                isLogin: action.status
            };
        case "AUTH_INITIALIZATION":
            return {
                ...state,
                isInitialization: action.status
            }
        default:
            return state;
    }
};

// actions
const setAuthUserData = (data: AuthUserDataType) =>
    ({
        type: "AUTH_USER_DATA",
        data,
    } as const);

const isLogin = (status: boolean) => ({type: "AUTH_LOGIN", status} as const)
const Initialization = (status: boolean) => ({type: "AUTH_INITIALIZATION", status} as const)

// thunks
export const appInitializationAsync = () => {
    return async (dispatch: Dispatch) => {
        try {
            const res = await authAPI.getAuthData()
            if (res.data.resultCode === 0) {
                dispatch(isLogin(true))
                dispatch(setAuthUserData(res.data.data))
            } else {
                dispatch(isLogin(false))
                // dispatch(setErrorStatus(res.data.messages[0]));
                console.warn(res.data.messages);
            }
        }catch (error){
            dispatch(isLogin(false))
            console.log(error);
        }finally {
            dispatch(Initialization(true))
        }
    };
};
export const loginAsync = (data: LoginDataType) => {
    return async (dispatch: Dispatch) => {
        try {
            const res = await authAPI.login(data)
            if (res.data.resultCode === 0) {
                dispatch(isLogin(true))
                console.log(res.data.data.userId)
            } else {
                dispatch(isLogin(false))
                // dispatch(setErrorStatus(res.data.messages[0]));
                console.warn(res.data.messages);
            }
        }catch (error){
            dispatch(isLogin(false))
            console.log(error);
        }
    };
};
export const logoutAsync = () => {
    return async (dispatch: Dispatch) => {
        try {
            const res = await authAPI.logout()
            if (res.data.resultCode === 0) {
                dispatch(isLogin(false))
                console.log(res.data)
            } else {
                console.warn(res.data.messages);
            }
        }catch (error){
            console.warn(error);
        }
    };
};



// types
type InitialStateType = typeof initialState;
type ActionType = |
    ReturnType<typeof setAuthUserData> |
    ReturnType<typeof isLogin>|
    ReturnType<typeof Initialization>

