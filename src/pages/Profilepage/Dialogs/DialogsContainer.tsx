import {StateDataType} from "../../../redux/store";
import {newMessageActionCreator, newMessageTextActionCreator} from "../../../redux/profilePage_reducer";
import Dialogs from "./Dialogs";
import {ActionCreatorsTypes, StoreContext} from "../../../StoreContext";
import {ReduxStateType} from "../../../redux/redux-store";
import {Store} from "redux";
import { connect } from "react-redux";


export const DialogsContainer_block = () => {

    return (
        <StoreContext.Consumer>
            {
                (store:  Store<ReduxStateType, ActionCreatorsTypes>) => {
                    const state: StateDataType = store.getState()
                    const updateNewMessageText = (value: string) => {
                        store.dispatch(newMessageTextActionCreator(value));
                    };
                    const addNewMessage = () => {
                        store.dispatch(newMessageActionCreator());
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
        updateNewMessageText: (value: string) => {dispatch(newMessageTextActionCreator(value))},
        addNewMessage: () => {dispatch(newMessageActionCreator());}
    }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
