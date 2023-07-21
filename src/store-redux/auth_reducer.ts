import { Dispatch } from "redux";
import { AuthUserDataType, socialNetworkAPI } from "../api/social-network-api";

const initialState = {
  resultCode: 0,
  messages: [""],
  data: {
    id: 1 as number ,
    email: '' as string ,
    login: '2222' as string ,
  },
};

export const authReducer = (
  state: InitialStateType = initialState,
  action: ActionType
): InitialStateType => {
  switch (action.type) {
    case "AUTH-USER-DATA":
      return {
        ...state,
        messages: action.data.messages,
        data: action.data.data,
      };
    default:
      return state;
  }
};

// ations
const setAuthUserData = (data: AuthUserDataType) =>
  ({
    type: "AUTH-USER-DATA",
    data,
  } as const);

// thunks

export const authUserData = () => {
  return (dispatch: Dispatch) => {
    socialNetworkAPI.setAuthUserData().then((res) => {
      dispatch(setAuthUserData(res.data));
    });
  };
};

// types
type InitialStateType = typeof initialState;
type ActionType = ReturnType<typeof setAuthUserData>;

//userId: number, login: string, email: string
