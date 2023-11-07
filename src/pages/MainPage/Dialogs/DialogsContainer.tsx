import { AppRootState } from 'store-redux/redux-store'
import { compose, Dispatch } from 'redux'
import { connect } from 'react-redux'
import { withLazyLoading } from 'hoc/withLazyLoading'
import { ComponentType, lazy } from 'react'
import { sendMessageAsync, startMessagesListeningAsync, stopMessagesListeningAsync } from 'store-redux/chat_reducer'
import { ChatMessageType } from 'api/chat-api'

const Dialogs = lazy(() => import('./Dialogs').then(module => ({ default: module.Dialogs })))

const mapStateToProps = (state: AppRootState): mapStatePropsType => {
    return {
        messages: state.chat.messages
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsProps => {
    return {
        startMessagesListening: () => {
            // @ts-ignore
            dispatch(startMessagesListeningAsync())
        },
        sendMessage: (message) => {
            // @ts-ignore
            dispatch(sendMessageAsync(message))
        },
        stopMessagesListening: () => {
            // @ts-ignore
            dispatch(stopMessagesListeningAsync())
    }
    }
}

export const DialogsContainer = compose<ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withLazyLoading,
)(Dialogs)

//types

type mapStatePropsType = {
    messages: ChatMessageType[]
}
type mapDispatchPropsProps = {
    startMessagesListening: ()=> void
    stopMessagesListening: () => void
    sendMessage: (message: string) => void
}

export type DialogsPropsType = mapStatePropsType & mapDispatchPropsProps
