import { chatAPI, ChatMessageType } from '../api/chat-api'
import { Dispatch } from 'redux'
import { AppThunk } from './redux-store'

const initialState = {
    messages: [] as ChatMessageType[]
}

export const chatReducer = (
    state: ChatInitialStateType = initialState,
    action: ChatActionsType
): ChatInitialStateType => {
    switch (action.type) {
        case 'SN/chat/MESSAGES_RECEIVED':
            return {
                ...state,
                messages: [...state.messages, ...action.payload.messages]
            }
        default:
            return state
    }
}

// actions
export const messagesReceived = (messages: ChatMessageType[]) => {
    return {
        type: 'SN/chat/MESSAGES_RECEIVED',
        payload: { messages }
    } as const
}
// thunks
let _newMessageHandler: ((message: ChatMessageType[]) => void) | null = null
const newMessageHandlerCreator = (dispatch: Dispatch) => {
    if (_newMessageHandler === null) {
        _newMessageHandler = (message: ChatMessageType[]) => {
            dispatch(messagesReceived(message))
        }
    }
    return _newMessageHandler
}

export const startMessagesListeningAsync = (): AppThunk => (dispatch) => {
    chatAPI.start()
    chatAPI.subscribe(newMessageHandlerCreator(dispatch))
}
export const stopMessagesListeningAsync = (): AppThunk => (dispatch) => {
    chatAPI.stop()
    chatAPI.unsubscribe(newMessageHandlerCreator(dispatch))
}
export const sendMessageAsync = (message: string): AppThunk => async (dispatch) => {
    chatAPI.sendMessage(message)
}

// types

export type ChatActionsType = ReturnType<typeof messagesReceived>
export type ChatInitialStateType = typeof initialState
