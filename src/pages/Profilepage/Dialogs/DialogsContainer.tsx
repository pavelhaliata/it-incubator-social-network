import {newMessageAC, newMessageTextAC} from "../../../redux/profilePage_reducer";
import Dialogs from "./Dialogs";
import {ActionCreatorsTypes, StoreContext} from "../../../StoreContext";
import {AppStateType, StateType} from "../../../redux/redux-store";
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





const mapStateToProps = (state: StateType) => {
    return{
        messageTextValue : state.profilePage.newMessageTextData,
        messagesData: state.profilePage.messagesData
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        updateNewMessageText: (value: string) => {dispatch(newMessageTextAC(value))},
        addNewMessage: () => {dispatch(newMessageAC());}
    }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
