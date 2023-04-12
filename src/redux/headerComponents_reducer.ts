export type HeaderTitleType = {
    headerTitle: string
}

enum HEADER_PAGE_TITLE {
    HEADER_PAGE_TITLE = 'HEADER-PAGE-TITLE'
}

type headerTitleAC = ReturnType<typeof headerTitleAC>

const initialState: HeaderTitleType = {
    headerTitle: ""
}

export const headerComponentsReducer = (state: HeaderTitleType = initialState, action: headerTitleAC) => {
    switch (action.type) {
        case HEADER_PAGE_TITLE.HEADER_PAGE_TITLE:
            return {
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