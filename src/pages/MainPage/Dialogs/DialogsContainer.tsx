import { MessageType, newMessage, newMessageText } from 'store-redux/ProfilePage_reducer'
import { AppRootState } from 'store-redux/redux-store'
import { compose, Dispatch } from 'redux'
import { connect } from 'react-redux'
import { withLazyLoading } from 'hoc/withLazyLoading'
import { ComponentType, lazy } from 'react'
import { ChatMessageType, startMessagesListeningAsync } from '../../../store-redux/chat_reducer'

const Dialogs = lazy(() => import('./Dialogs').then(module => ({ default: module.Dialogs })))

const mapStateToProps = (state: AppRootState): mapStatePropsType => {
    return {
        messageTextValue: state.profilePage.newMessageTextData,
        messages: state.chat.messages
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsProps => {
    return {
        updateNewMessageText: (value: string) => {
            dispatch(newMessageText(value))
        },
        addNewMessage: () => {
            dispatch(newMessage())
        },
        startMessagesListeningAsync: () => {
            // @ts-ignore
            dispatch(startMessagesListeningAsync())
        }
    }
}

export const DialogsContainer = compose<ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withLazyLoading,
)(Dialogs)

//types

type mapStatePropsType = {
    messageTextValue: string
    messages: ChatMessageType[]
}
type mapDispatchPropsProps = {
    updateNewMessageText: (value: string) => void
    addNewMessage: () => void
    startMessagesListeningAsync: ()=> void
}

export type DialogsPropsType = mapStatePropsType & mapDispatchPropsProps
