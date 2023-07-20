const initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
};

export const authReducer = ( state: InitialStateType = initialState, action: ActionType): InitialStateType => {
  switch (action.type) {
    case "AUTH-USER-DATA":
      return {
        ...state,
		...action.data
      };
    default:
      return state;
  }
};

// ations
export const authStatus = (userId: number, login: string, email: string) => ({
  type: "AUTH-USER-DATA",
  data: { userId, login, email },
} as const);

// types
type InitialStateType = typeof initialState;
type ActionType = ReturnType<typeof authStatus>;
