import React, {Component, ChangeEvent, KeyboardEvent} from 'react';
import style from "./Dialogs.module.scss";
import {Button} from "../../../components/Button/Button";
import {DialogsPropsType} from "./DialogsContainer";
import {Message} from "./Message/Message";

export class Dialogs extends Component<DialogsPropsType> {

    onChangeTextInputHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        event.preventDefault();
        this.props.updateNewMessageText(event.currentTarget.value)
    };
    sendMessageHandler = () => {
        this.props.addNewMessage()
    };
    onKeyDownSendMessageHandler = (event: KeyboardEvent) => {
        if (event.key === "Enter" && event.ctrlKey) {
            this.props.addNewMessage()
        }
    };

    render() {

        return (
            <div className={`${style.dialogs}`}>
                <div className={`${style.dialog_item} ${style.author}`}>
                    {this.props.messagesData && this.props.messagesData.map((data) => {
                        return (
                            <Message
                                key={data.id}
                                avatar={data.avatar}
                                name={data.name}
                                message={data.message}
                                time={data.time}
                            />
                        );
                    })}
                </div>
                {/* <div className={`${style.item} ${style.companion}`}></div> */}
                <div className={style.dialog_input}>
                    <textarea
                        className={style.input_message}
                        placeholder="Write message..."
                        value={this.props.messageTextValue}
                        onChange={this.onChangeTextInputHandler}
                        onKeyDown={this.onKeyDownSendMessageHandler}
                    />
                    <Button className={style.send_btn} callback={this.sendMessageHandler}>Send</Button>
                </div>
            </div>
        )
    }
}
