import React from "react";
import { MessageDataPropsType } from '../Dialogs';
import s from "./Message.module.scss"

type propsType ={
    // message: MessageDataPropsType
    avatar: string
	name: string
	message: string
	time: string
}


function Message({avatar, name, message,time}: propsType) {
    return (
        <div className={s.message}>
            <div className={s.message__avatar}>
                <img src={avatar} alt="avatar" />
            </div>
            <div className={s.message__body}>
                <div className={s.message__autor}>{name}</div>
                <div className={s.message__text}>{message}</div>
                <div className={s.message__time}>{time}</div>
            </div>
        </div>
    )
}

export default Message