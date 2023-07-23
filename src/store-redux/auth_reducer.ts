import {Dispatch} from "redux";
import {AuthUserDataType, socialNetworkAPI} from "../api/social-network-api";

const initialState = {
    data: {
        id: null as number | null,
        email: null as string | null,
        login: null as string | null,
    }
};

export const authReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "AUTH_USER_DATA":
            return {
                ...state,
                ...action.data
            };
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

// thunks
export const getAuthUserData = () => {
    return (dispatch: Dispatch) => {
        socialNetworkAPI.authUserData()
            .then(res => {
                dispatch(setAuthUserData(res.data))
            })
            .catch(error => {
                console.log(error)
            })
    };

};

// types
type InitialStateType = typeof initialState;
type ActionType = ReturnType<typeof setAuthUserData>;

