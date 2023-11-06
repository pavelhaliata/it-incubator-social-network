let subscribers = [] as SubscriberType[] //подписчики

let ws: WebSocket | null = null

const reConnectHandler = () => {
    console.warn('Socket is closed. Reconnect will be attempted in 3 seconds.')
    setTimeout(createChannel, 3000)
}

const messageHandler = (messageEvent: MessageEvent) => {
    const newMessages = JSON.parse(messageEvent.data)
    subscribers.forEach(s => s(newMessages)) //каждому подписчику прокидываем функцию (callback: SubscriberType) => void
}

function createChannel() {
    ws?.removeEventListener('close', reConnectHandler) //отписываемся от предыдущего listener'а // ws?. проверка на null, если не null, то...
    ws?.close() // закрываем предыдущее соединение WebSocket'а
    ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
    ws?.addEventListener('close', reConnectHandler)
    ws?.addEventListener('message', messageHandler) // Iam
}

export const chatAPI = {
    start() {
        createChannel()
    },
    subscribe(callback: SubscriberType) {
        subscribers.push(callback)
        return () => {
            subscribers = subscribers.filter(s => s !== callback) // два варианта отписаться
        }
    },
    unsubscribe(callback: SubscriberType) {
        subscribers = subscribers.filter(s => s !== callback) // два варианта отписаться
    },
}

// types
export type ChatMessageType = {
    message: string
    photo: string
    userId: number
    userName: string
}

type SubscriberType = (message: ChatMessageType) => void
