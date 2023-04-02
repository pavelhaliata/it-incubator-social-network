import React from "react";
import s from "./Message.module.scss"

type IProps ={
    avatar: string
	name: string
	message: string
	time: string
}


function Message({avatar, name, message, time}: IProps) {
    return (
        <div className={s.message}>
            <div className={s.message__avatar}>
                <img src={avatar} alt={name} />
            </div>
            <div className={s.message__body}>
                <div className={s.message__author}>{name}</div>
                <div className={s.message__text}>{message}</div>
                <div className={s.message__time}>{time}</div>
            </div>
        </div>
    )
}

export default Message