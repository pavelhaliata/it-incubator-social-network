import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from 'react'
import style from './Dialogs.module.scss'
import { DialogsPropsType } from './DialogsContainer'
import { Message } from './Message/Message'
import { v4 as uuidv4 } from 'uuid'
import { Button } from 'components/Button/Button'
import loading from 'assets/images/loading-pulse-200px.svg'
import { ChatMessageAPIType } from 'api/chat-api'

export const Dialogs = (props: DialogsPropsType) => {
    const [wsChannel, setWsChannel] = useState<WebSocket | null>(null)
    const [messages, setMessages] = useState<ChatMessageAPIType[]>([])
    const [readyStatus, setReadyStatus] = useState<'pending' | 'ready'>('pending')
    const [inputValue, setInputValue] = useState<string>('')
    const ref = useRef<HTMLDivElement>(null)
    const [isClosed, setIsClosed] = useState<boolean>(false)


    useEffect(() => {
        props.startMessagesListeningAsync()
        let ws: WebSocket

        const reConnectHandler = () => {
            setIsClosed(true)
            console.warn('Socket is closed. Reconnect will be attempted in 3 seconds.')
            setTimeout(() => {
                createChannel()
            }, 3000)
        }
        const isClosedHandler = () => {
            setIsClosed(false)
        }

        function createChannel() {
            ws?.removeEventListener('open', isClosedHandler)
            ws?.removeEventListener('close', reConnectHandler) //отписываемся от предыдущего listener'а // ws?. проверка на null, если не null, то...
            ws?.close() // закрываем предыдущее соединение WebSocket'а
            ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
            ws.addEventListener('close', reConnectHandler)
            ws.addEventListener('open', isClosedHandler)
            // setWsChannel(ws)
        }
        createChannel()
        return () => {
            ws.removeEventListener('close', reConnectHandler)
            ws.close()
        }
    }, [])

    useEffect(() => {
        const messageHandler = (messageEvent: MessageEvent) => {
            const newMessages = JSON.parse(messageEvent.data)
            setMessages(preventMessages => [...preventMessages, ...newMessages])
        }
        const readyStatusHandler = () => {
            setReadyStatus('ready')
        }
        wsChannel?.addEventListener('message', messageHandler)
        wsChannel?.addEventListener('open', readyStatusHandler)

        return () => {
            wsChannel?.removeEventListener('message', messageHandler)
            wsChannel?.removeEventListener('open', readyStatusHandler)
        }
    }, [wsChannel])

    useEffect(() => {
        if (messages.length) {
            ref.current?.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            })
        }
    }, [messages.length])

    const onChangeInputHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setInputValue(event.currentTarget.value)
    }
    const sendMessageHandler = () => {
        if (!inputValue) {
            return
        }
        wsChannel?.send(inputValue)
        setInputValue('')
    }
    const onKeyDownSendMessageHandler = (event: KeyboardEvent) => {
        if (event.key === 'Enter' && event.ctrlKey && inputValue) {
            sendMessageHandler()
        }
    }

    return (
        <>
            <div className={`${style.dialogs}`}>
                {isClosed ? (
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        connection lost... Reconnecting, pls, waiting...{' '}
                        <img src={loading} width='34px' height='34px' alt='icon' />
                    </div>
                ) : (
                    <div className={`${style.dialog_item} ${style.author}`}>
                        {props.messages.map(item => {
                            return (
                                <Message
                                    key={uuidv4()}
                                    userId={item.userId}
                                    userName={item.userName}
                                    photo={item.photo}
                                    message={item.message}
                                />
                            )
                        })}
                        <div ref={ref} />
                    </div>
                )}
            </div>
            <div className={style.dialog_input}>
                <textarea
                    autoFocus={true}
                    className={style.input_message}
                    placeholder='Write message...'
                    value={inputValue}
                    onChange={onChangeInputHandler}
                    onKeyDown={onKeyDownSendMessageHandler}
                />
                <Button
                    disabled={wsChannel === null || readyStatus !== 'ready'}
                    className={style.send_btn}
                    onClick={sendMessageHandler}
                >
                    Send
                </Button>
            </div>
        </>
    )
}
