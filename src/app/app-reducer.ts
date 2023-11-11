export enum RequestStatus {
    'idle' = 0,
    'loading' = 1,
    'succeed' = 2,
    'failed' = 3,
}

const initialState = {
    headerTitle: '' as string,
    error: null as string | null,
    requestStatus: RequestStatus.idle as RequestStatus,
}

export const appReducer = (state: InitialStateType = initialState, action: AppActionType): InitialStateType => {
    switch (action.type) {
        case 'app/SET-ERROR':
            return {
                ...state,
                error: action.errorMessage,
            }
        case 'app/SET-STATUS':
            return {
                ...state,
                requestStatus: action.status,
            }
        case 'app/HEADER-PAGE-TITLE':
            return {
                ...state,
                headerTitle: action.title,
            }
        default:
            return state
    }
}

// actions
export const setHeaderTitle = (title: string) =>
    ({
        type: 'app/HEADER-PAGE-TITLE',
        title,
    }) as const

export const setErrorStatus = (errorMessage: string | null) =>
    ({
        type: 'app/SET-ERROR',
        errorMessage,
    }) as const

export const setRequestStatus = (status: RequestStatus) =>
    ({
        type: 'app/SET-STATUS',
        status,
    }) as const

// types
type RequestStatusType = ReturnType<typeof setRequestStatus>
type ErrorStatusType = ReturnType<typeof setErrorStatus>
type HeaderTitleType = ReturnType<typeof setHeaderTitle>

export type AppActionType = RequestStatusType | ErrorStatusType | HeaderTitleType

export type InitialStateType = typeof initialState
