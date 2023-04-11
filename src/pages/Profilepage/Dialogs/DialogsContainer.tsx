import {newMessageAC, newMessageTextAC} from "../../../redux/profilePage_reducer";
import Dialogs from "./Dialogs";
import {ActionCreatorsTypes, StoreContext} from "../../../StoreContext";
import {ReduxStateType, StateDataType} from "../../../redux/redux-store";
import {Store} from "redux";
import { connect } from "react-redux";


export const DialogsContainer_block = () => {

    return (
        <StoreContext.Consumer>
            {
                (store:  Store<ReduxStateType, ActionCreatorsTypes>) => {
                    const state: StateDataType = store.getState()
                    const updateNewMessageText = (value: string) => {
                        store.dispatch(newMessageTextAC(value));
                    };
                    const addNewMessage = () => {
                        store.dispatch(newMessageAC());
                    };
                    return <Dialogs
                        updateNewMessageText={updateNewMessageText}
                        messageTextValue={state.profilePage.newMessageTextData}
                        messagesData={state.profilePage.messagesData}
                        addNewMessage={addNewMessage}
                    />
                }
            }
        </StoreContext.Consumer>

    );
}

const mapStateToProps = (state: StateDataType) =>{
    return{
        messageTextValue : state.profilePage.newMessageTextData,
        messagesData: state.profilePage.messagesData
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        updateNewMessageText: (value: string) => {dispatch(newMessageTextAC(value))},
        addNewMessage: () => {dispatch(newMessageAC());}
    }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
