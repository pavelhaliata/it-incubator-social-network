
let ws: WebSocket | null = null

let subscribers = [] as SubscriberType[]

const messagesHandler = (event: MessageEvent) => {
    const newMessage: ChatMessageType[] = JSON.parse(event.data)
    subscribers.forEach(sub => sub(newMessage))
}
const reConnect = () => {
    ws?.removeEventListener('message', messagesHandler)
    ws?.removeEventListener('close', reConnect)
    setTimeout(()=>{
        console.warn('Socket is closed. Reconnect will be attempted in 3 second.')
        createChannel()
    }, 3000)
}
function createChannel() {
    ws?.removeEventListener('close', reConnect)
    ws?.close()
    ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
    ws?.addEventListener('message', messagesHandler)
    ws?.addEventListener('close', reConnect)
}


export const chatAPI = {
    start(){
      createChannel()
    },
    stop(){
        subscribers = [] //?? а надо ли, если уже вызвали unsubscribe
        removeEventListener('message', messagesHandler)
        removeEventListener('close', reConnect)
        ws?.close()
    },
    subscribe(callback: SubscriberType){
        subscribers.push(callback)
        return ()=>{
            subscribers.filter(s => s !== callback)
        }
    },
    unsubscribe(callback: SubscriberType){
        subscribers.filter(s => s !== callback)
    },
    sendMessage(message: string){
        ws?.send(message)
    },

}

// types

type SubscriberType = (messages: ChatMessageType[])=> void

export type ChatMessageType = {
    message: string
    photo: string
    userId: number
    userName: string
}