const initialState = {
  inputValue: "" as string,
};

export const inputValueReducer = (state: InputInitialStateType = initialState, action: ActionCreatorType): InputInitialStateType => {
  switch (action.type) {
    case "INPUT-VALUE":
      return {
        ...state,
        inputValue: action.value,
      };
    default:
      return state;
  }
};

// actions
export const inputValueAC = (value: string) => ({
  type: "INPUT-VALUE",
  value,
});

// types
type InputInitialStateType = typeof initialState;
type ActionCreatorType = ReturnType<typeof inputValueAC>;
