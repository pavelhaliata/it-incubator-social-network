import {MessageType, newMessageAC, newMessageTextAC} from "../../../redux/profilePage_reducer";
import Dialogs from "./Dialogs";
import {ActionCreatorsTypes, StoreContext} from "../../../StoreContext";
import {StateType} from "../../../redux/redux-store";
import {Dispatch, Store} from "redux";
import { connect } from "react-redux";


// const DialogsContainer_block = () => {

//     return (
//         <StoreContext.Consumer>
//             {
//                 (store:  Store<AppStateType, ActionCreatorsTypes>) => {
//                     const state: StateType = store.getState()
//                     const updateNewMessageText = (value: string) => {
//                         store.dispatch(newMessageTextAC(value));
//                     };
//                     const addNewMessage = () => {
//                         store.dispatch(newMessageAC());
//                     };
//                     return <Dialogs
//                         updateNewMessageText={updateNewMessageText}
//                         messageTextValue={state.profilePage.newMessageTextData}
//                         messagesData={state.profilePage.messagesData}
//                         addNewMessage={addNewMessage}
//                     />
//                 }
//             }
//         </StoreContext.Consumer>

//     );
// }

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
        updateNewMessageText: (value: string) => {dispatch(newMessageTextAC(value))},
        addNewMessage: () => {dispatch(newMessageAC());}
    }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
