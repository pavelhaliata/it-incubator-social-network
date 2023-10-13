import {AuthUserDataType, socialNetworkAPI} from "api/social-network-api";
import {setErrorStatus} from "../app/app-reducer";
import {getUserStatusAsync} from "./MainPage_reducer";

const initialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isLogin: false as boolean
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

// thunks
export const getAuthUserDataAsync = () => {
    return (dispatch: any) => {
        socialNetworkAPI
            .authUserData()
            .then((res) => {
                if (res.data.resultCode === 0) {
                    dispatch(isLogin(true))
                    dispatch(setAuthUserData(res.data.data))
                    // dispatch(getUserStatusAsync(res.data.data.id))
                } else {
                    dispatch(isLogin(false))
                    dispatch(setErrorStatus(res.data.messages[0]));
                    console.log(res.data.messages);
                }
            })
            .catch((error) => {
                dispatch(isLogin(false))
                console.log(error);
            });
    };
};


// types
type InitialStateType = typeof initialState;
type ActionType = |
    ReturnType<typeof setAuthUserData> |
    ReturnType<typeof isLogin>;
