import { chatAPI, ChatMessageType } from 'api/chat-api'
import { Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { AppRootState } from './redux-store'

const initialState = {
    messages: [] as ChatMessageType[],
}

export const chatReducer = (state: InitialStateType = initialState, action: ChatActionsType): InitialStateType => {
    switch (action.type) {
        case 'chat/MESSAGES':
            return {
                ...state,
                messages: action.payload.messages,
            }
        default:
            return state
    }
}

// actions
const setChatMessages = (messages: ChatMessageType[]) =>
    ({
        type: 'chat/MESSAGES',
        payload: { messages },
    }) as const

// thunks
export const getChatMessageAsync =
    (): ThunkAction<void, AppRootState, unknown, ChatActionsType> => async (dispatch: Dispatch) => {
        try {
            chatAPI.subscribe
        } catch (error) {
            console.warn(error)
        }
    }

// types
type InitialStateType = typeof initialState

export type ChatActionsType = ReturnType<typeof setChatMessages>
