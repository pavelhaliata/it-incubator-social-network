export type HeaderTitleType = {
    headerTitle: string
}

enum HEADER_PAGE_TITLE {
    NAME_PAGE = 'NAME-PAGE'
}

type headerTitleAC = ReturnType<typeof headerTitleAC>

const initialState: HeaderTitleType = {
    headerTitle: ""
}

export const headerComponentsReducer = (state: HeaderTitleType = initialState, action: headerTitleAC) => {

    switch (action.type) {
        case HEADER_PAGE_TITLE.NAME_PAGE:
            return {
                headerTitle: action.title
            }

        default:
            return state
    }

}

export const headerTitleAC = (title: string) => ({
    type: HEADER_PAGE_TITLE.NAME_PAGE,
    title: title
} as const)