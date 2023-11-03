import { Component, ChangeEvent, KeyboardEvent, useState, useEffect, useRef } from 'react'
import style from './Dialogs.module.scss'
import { Button } from 'components/Button/Button'
import { DialogsPropsType } from './DialogsContainer'
import { Message, MessageType } from './Message/Message'

export const Dialogs = (props: DialogsPropsType) => {
    const wsChannel = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
    const [messages, setMessanges] = useState<MessageType[]>([])
    const [message, setMessage] = useState<string>('')

    useEffect(() => {
        wsChannel.addEventListener('message', event => {
            const newMessages = JSON.parse(event.data)
            setMessanges(preventDefault => [...preventDefault, ...newMessages])
        })
    }, [])

    useEffect(() => {
        if (messages.length) {
            ref.current?.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            })
        }
    }, [messages.length])
    const ref = useRef<HTMLDivElement>(null)
    const onChangeInputHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        event.preventDefault()
        setMessage(event.currentTarget.value)
    }
    const sendMessageHandler = () => {
        if (!message) {
            return
        }
        wsChannel.send(message)
        setMessage('')
    }
    const onKeyDownSendMessageHandler = (event: KeyboardEvent) => {
        if (event.key === 'Enter' && event.ctrlKey && message) {
            sendMessageHandler()
        }
    }

    return (
        <>
            <div className={`${style.dialogs}`}>
                <div className={`${style.dialog_item} ${style.author}`}>
                    {messages.map(item => {
                        return (
                            // eslint-disable-next-line react/jsx-key
                            <Message
                                userId={item.userId}
                                userName={item.userName}
                                photo={item.photo}
                                message={item.message}
                            />
                        )
                    })}
                    <div style={{ height: '0px' }} ref={ref} />
                </div>
            </div>
            <div className={style.dialog_input}>
                <textarea
                    autoFocus={true}
                    className={style.input_message}
                    placeholder='Write message...'
                    value={message}
                    onChange={onChangeInputHandler}
                    onKeyDown={onKeyDownSendMessageHandler}
                />
                <Button className={style.send_btn} onClick={sendMessageHandler}>
                    Send
                </Button>
            </div>
        </>
    )
}
