import { ChatMessageType } from 'api/chat-api'
import style from './Message.module.scss'

export const Message = (props: ChatMessageType) => {
    return (
        <div className={style.message}>
            <div className={style.message__avatar}>
                <img src={props.photo} alt={props.userName} />
            </div>
            <div className={style.message__body}>
                <div className={style.message__author}>{props.userName}</div>
                <div className={style.message__text}>{props.message}</div>
            </div>
        </div>
    )
}
