const initialState = {
    inputValue: '' as string,
}

export const inputValueReducer = (
    state: InputInitialStateType = initialState,
    action: ActionCreatorType,
): InputInitialStateType => {
    switch (action.type) {
        case 'INPUT_VALUE':
            return {
                ...state,
                inputValue: action.value,
            }
        default:
            return state
    }
}

// actions
export const inputValueAC = (value: string) => ({
    type: 'INPUT_VALUE',
    value,
})

// types
type InputInitialStateType = typeof initialState
type ActionCreatorType = ReturnType<typeof inputValueAC>
