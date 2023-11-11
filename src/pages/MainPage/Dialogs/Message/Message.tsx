import React from 'react'
import { ChatMessageType } from 'store-redux/chat_reducer'
import style from './Message.module.scss'

export const Message = React.memo(function Message(props: ChatMessageType) {
    return (
        <>
            <div className={style.message}>
                <div className={style.message__header}>
                    <div className={style.message__avatar}>
                        <img src={props.photo} alt={props.userName} />
                    </div>
                    <div className={style.message__authorId}><span>id:</span>{props.userId}</div>
                </div>
                <div className={style.message__body}>
                    <div className={style.message__author}>{props.userName}</div>
                    <div className={style.message__text}>{props.message}</div>
                </div>
            </div>
        </>
    )
})
