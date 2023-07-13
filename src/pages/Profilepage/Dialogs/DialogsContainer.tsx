import {MessageType, newMessage, newMessageText} from "../../../redux/profilePage_reducer";
import {Dialogs} from "./Dialogs";
import {StateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import { connect } from "react-redux";

type mapStatePropsType = {
    messageTextValue: string
    messagesData: Array<MessageType>
}
type mapDispatchPropsProps = {
    updateNewMessageText:(value: string) => void
    addNewMessage: () => void
} 

export type DialogsPropsType = mapStatePropsType & mapDispatchPropsProps

const mapStateToProps = (state: StateType): mapStatePropsType => {
    return{
        messageTextValue : state.profilePage.newMessageTextData,
        messagesData: state.profilePage.messagesData
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsProps => {
    return {
        updateNewMessageText: (value: string) => {dispatch(newMessageText(value))},
        addNewMessage: () => {dispatch(newMessage());}
    }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
