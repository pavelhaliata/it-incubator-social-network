import { chatAPI, ChatMessageAPIType } from 'api/chat-api'
import { Dispatch } from 'redux'
import { AppThunk } from './redux-store'
import { v4 as uuidv4 } from 'uuid'

export type ChatMessageType = ChatMessageAPIType & { id: string }

const initialState = {
    messages: [] as ChatMessageType[]
}

export const chatReducer = (state: InitialStateType = initialState, action: ChatActionsType): InitialStateType => {
    switch (action.type) {
        case 'SN/chat/MESSAGES_RECEIVED':
            return {
                ...state,
                messages: [...state.messages, ...action.payload.messages.map(m => ({ ...m, id: uuidv4() }))]
            }
        default:
            return state
    }
}

// actions
const messagesReceived = (messages: ChatMessageAPIType[]) =>
    ({
        type: 'SN/chat/MESSAGES_RECEIVED',
        payload: { messages }
    }) as const

let _newMessageHandler: ((messages: ChatMessageAPIType[]) => void) | null = null
const newMessageHandlerCreator = (dispatch: Dispatch) =>  {
    if(_newMessageHandler === null){
        _newMessageHandler = (messages) => {
            dispatch(messagesReceived(messages))
        }
    }
    return _newMessageHandler
}

// thunks
export const startMessagesListeningAsync = (): AppThunk => async (dispatch: Dispatch) => {
    chatAPI.start()
    chatAPI.subscribe(newMessageHandlerCreator(dispatch))
}
export const stopMessagesListeningAsync = (): AppThunk => async (dispatch: Dispatch) => {
    chatAPI.unsubscribe(newMessageHandlerCreator(dispatch))
}

// types
type InitialStateType = typeof initialState

export type ChatActionsType = ReturnType<typeof messagesReceived>
