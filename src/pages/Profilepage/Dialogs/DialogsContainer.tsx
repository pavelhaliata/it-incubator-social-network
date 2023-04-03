import {StateDataType} from "../../../redux/store";
import {newMessageActionCreator, newMessageTextActionCreator} from "../../../redux/profilePage_reducer";
import Dialogs from "./Dialogs";
import { StoreContext } from "../../../StoreContext";


type DialogsPropsType = {

};

export const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store: any) => {

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


