let ws: WebSocket | null = null;

const subscribers = {
  "messages-received": [] as MessagesReceivedSubscriberType[],
  "status-changed": [] as StatusChangedSubscriberType[],
};
const reConnect = () => {
  cleanUp();
  notifySubscriberAboutStatus("pending");
  setTimeout(() => {
    console.warn("Socket is closed. Reconnect will be attempted in 3 second.");
    createChannel();
  }, 3000);
};

const messagesHandler = (event: MessageEvent) => {
  const newMessage: ChatMessageAPIType[] = JSON.parse(event.data);
  subscribers["messages-received"].forEach((sub) => sub(newMessage));
};
const openHandler = () => {
  notifySubscriberAboutStatus("ready");
};
const errorHandler = () => {
  notifySubscriberAboutStatus("error");
  console.error("some error occurred");
};
const cleanUp = () => {
  ws?.removeEventListener("message", messagesHandler);
  ws?.removeEventListener("close", reConnect);
  ws?.removeEventListener("open", openHandler);
  ws?.removeEventListener("error", errorHandler);
};
const notifySubscriberAboutStatus = (status: ChatStatusType) => {
  subscribers["status-changed"].forEach((sub) => sub(status));
};

function createChannel() {
  cleanUp();
  ws?.close();
  ws = new WebSocket(
    "wss://social-network.samuraijs.com/handlers/ChatHandler.ashx",
  );
  notifySubscriberAboutStatus("pending");
  ws.addEventListener("message", messagesHandler);
  ws.addEventListener("close", reConnect);
  ws.addEventListener("open", openHandler);
  ws.addEventListener("error", errorHandler);
}

export const chatAPI = {
  start() {
    createChannel();
  },
  stop() {
    subscribers["messages-received"] = [];
    subscribers["status-changed"] = []; //?? а надо ли, если уже вызвали unsubscribe
    cleanUp();
    ws?.close();
  },
  sendMessage(message: string) {
    ws?.send(message);
  },
  subscribe(
    eventName: EventsNamesType,
    callback: MessagesReceivedSubscriberType | StatusChangedSubscriberType,
  ) {
    // @ts-ignore
    subscribers[eventName].push(callback);
    return () => {
      // @ts-ignore
      subscribers[eventName].filter((s) => s !== callback);
    };
  },
  unsubscribe(
    eventName: EventsNamesType,
    callback: MessagesReceivedSubscriberType | StatusChangedSubscriberType,
  ) {
    // @ts-ignore
    subscribers[eventName].filter((s) => s !== callback);
  },
};

// types
type EventsNamesType = "messages-received" | "status-changed";

type MessagesReceivedSubscriberType = (messages: ChatMessageAPIType[]) => void;
type StatusChangedSubscriberType = (status: ChatStatusType) => void;

export type ChatStatusType = "pending" | "ready" | "error";

export type ChatMessageAPIType = {
  message: string;
  photo: string;
  userId: number;
  userName: string;
};
