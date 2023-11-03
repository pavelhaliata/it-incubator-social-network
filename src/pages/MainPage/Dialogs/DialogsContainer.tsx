import { MessageType, newMessage, newMessageText } from 'store-redux/ProfilePage_reducer'
import { AppRootState } from 'store-redux/redux-store'
import { compose, Dispatch } from 'redux'
import { connect } from 'react-redux'
import { withLazyLoading } from 'hoc/withLazyLoading'
import { ComponentType, lazy } from 'react'

const Dialogs = lazy(() => import('./Dialogs').then(module => ({ default: module.Dialogs })))

const mapStateToProps = (state: AppRootState): mapStatePropsType => {
    return {
        messageTextValue: state.profilePage.newMessageTextData,
        messagesData: state.profilePage.messagesData,
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
    }
}

export const DialogsContainer = compose<ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withLazyLoading,
)(Dialogs)

//types

type mapStatePropsType = {
    messageTextValue: string
    messagesData: Array<MessageType>
}
type mapDispatchPropsProps = {
    updateNewMessageText: (value: string) => void
    addNewMessage: () => void
}

export type DialogsPropsType = mapStatePropsType & mapDispatchPropsProps
