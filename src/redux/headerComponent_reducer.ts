
enum HEADER_PAGE_TITLE {
    HEADER_PAGE_TITLE = "HEADER-PAGE-TITLE"
}
type headerTitleAC = ReturnType<typeof headerTitleAC>

export type HeaderComponentInitialStateType = typeof initialState

const initialState = {
    headerTitle: "" as string
}

export const headerComponentReducer = (state: HeaderComponentInitialStateType = initialState, action: headerTitleAC): HeaderComponentInitialStateType => {
    switch (action.type) {
        case HEADER_PAGE_TITLE.HEADER_PAGE_TITLE:
            return {
                ...state,
                headerTitle: action.title
            }
        default:
            return state
    }

}

export const headerTitleAC = (title: string) => ({
    type: HEADER_PAGE_TITLE.HEADER_PAGE_TITLE,
    title: title
} as const)