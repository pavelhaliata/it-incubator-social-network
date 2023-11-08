import { chatAPI, ChatMessageAPIType, ChatStatusType } from '../api/chat-api'
import { Dispatch } from 'redux'
import { AppThunk } from './redux-store'
import { v4 as uuidv4 } from 'uuid'

const initialState = {
    messages: [] as ChatMessageType[],
    status: 'pending' as ChatStatusType,
}

export const chatReducer = (
    state: ChatInitialStateType = initialState,
    action: ChatActionsType,
): ChatInitialStateType => {
    switch (action.type) {
        case 'SN/chat/MESSAGES_RECEIVED':
            return {
                ...state,
                messages: [...state.messages, ...action.payload.messages.map(m => ({ ...m, id: uuidv4() }))],
            }
        case 'SN/chat/STATUS_CHANGED':
            return {
                ...state,
                status: action.payload.status,
            }
        default:
            return state
    }
}

// actions
export const messagesReceived = (messages: ChatMessageAPIType[]) => {
    return {
        type: 'SN/chat/MESSAGES_RECEIVED',
        payload: { messages },
    } as const
}
export const statusChanged = (status: ChatStatusType) => {
    return {
        type: 'SN/chat/STATUS_CHANGED',
        payload: { status },
    } as const
}
// thunks
let _newMessageHandler: ((message: ChatMessageAPIType[]) => void) | null = null
const newMessageHandlerCreator = (dispatch: Dispatch) => {
    if (_newMessageHandler === null) {
        _newMessageHandler = (message: ChatMessageAPIType[]) => {
            dispatch(messagesReceived(message))
        }
    }
    return _newMessageHandler
}

let _newStatusHandler: ((status: ChatStatusType) => void) | null = null
const newStatusHandlerCreator = (dispatch: Dispatch) => {
    if (_newStatusHandler === null) {
        _newStatusHandler = (status: ChatStatusType) => {
            dispatch(statusChanged(status))
        }
    }
    return _newStatusHandler
}

export const startMessagesListeningAsync = (): AppThunk => dispatch => {
    chatAPI.start()
    chatAPI.subscribe('messages-received', newMessageHandlerCreator(dispatch))
    chatAPI.subscribe('status-changed', newStatusHandlerCreator(dispatch))
}
export const stopMessagesListeningAsync = (): AppThunk => dispatch => {
    chatAPI.stop()
    chatAPI.unsubscribe('messages-received', newMessageHandlerCreator(dispatch))
    chatAPI.unsubscribe('status-changed', newStatusHandlerCreator(dispatch))
}
export const sendMessageAsync =
    (message: string): AppThunk =>
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async dispatch => {
        chatAPI.sendMessage(message)
    }

// types
export type ChatMessageType = ChatMessageAPIType & { id: string }
export type ChatActionsType = ReturnType<typeof messagesReceived> | ReturnType<typeof statusChanged>
export type ChatInitialStateType = typeof initialState
