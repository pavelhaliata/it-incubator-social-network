import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from 'react'
import style from './Dialogs.module.scss'
import { DialogsPropsType } from './DialogsContainer'
import  Message  from './Message/Message'
import { v4 as uuidv4 } from 'uuid'
import { Button } from 'components/Button/Button'
import loading from 'assets/images/loading-pulse-200px.svg'

export const Dialogs = (props: DialogsPropsType) => {
    const [readyStatus, setReadyStatus] = useState<'pending' | 'ready'>('pending')
    const [inputValue, setInputValue] = useState<string>('')
    const ref = useRef<HTMLDivElement>(null)
    const [isClosedChannel, setIsClosedChannel] = useState<boolean>(false)

    // const messages = useSelector((state: AppRootState) => (state.chat.messages))

    useEffect(() => {
        props.startMessagesListening()
        return () => {
            props.stopMessagesListening()
        }
    }, [])

    const onChangeInputHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setInputValue(event.currentTarget.value)
    }
    const sendMessageHandler = () => {
        if (!inputValue) {
            return
        }
        props.sendMessage(inputValue)
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
                {isClosedChannel ? (
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
                    disabled={false}
                    className={style.send_btn}
                    onClick={sendMessageHandler}
                >
                    Send
                </Button>
            </div>
        </>
    )
}
