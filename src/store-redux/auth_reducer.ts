import {authAPI, AuthUserDataType, LoginDataType} from "api/social-network-api";
import {setErrorStatus} from "../app/app-reducer";
import {Dispatch} from "redux";
import { FormikHelpers } from "formik";
import { LoginFormValues } from "pages/login/Login";

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
                console.warn(res.data.messages[0]);
            }
        }catch (error){
            dispatch(isLogin(false))
            console.log(error);
        }finally {
            dispatch(Initialization(true))
        }
    };
};
export const loginAsync = (data: LoginDataType, submitProps: FormikHelpers<LoginFormValues>) => {
    return async (dispatch: Dispatch) => {
        try {
            const res = await authAPI.login(data)
            if (res.data.resultCode === 0) {
                dispatch(isLogin(true))
            } else {
                dispatch(isLogin(false))
                // dispatch(setErrorStatus(res.data.messages[0]));
                console.warn(res.data);
                submitProps.setStatus(res.data.messages[0])
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
                dispatch(setAuthUserData({email: null, login: null, id: null}))
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

