import { ChatStatusType } from "api/chat-api";
import { withLazyLoading } from "hoc/withLazyLoading";
import { ComponentType, lazy } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import {
  ChatMessageType,
  sendMessageAsync,
  startMessagesListeningAsync,
  stopMessagesListeningAsync,
} from "store-redux/chat_reducer";
import { AppRootState } from "store-redux/redux-store";

const Dialogs = lazy(() =>
  import("./Dialogs").then((module) => ({ default: module.Dialogs }))
);

const mapStateToProps = (state: AppRootState): mapStatePropsType => {
  return {
    messages: state.chat.messages,
    status: state.chat.status,
  };
};
export const DialogsContainer = compose<ComponentType>(
  connect(mapStateToProps, {
    startMessagesListeningAsync,
    sendMessageAsync,
    stopMessagesListeningAsync,
  }),
  withLazyLoading
)(Dialogs);

//types

type mapStatePropsType = {
  messages: ChatMessageType[];
  status: ChatStatusType;
};
type mapDispatchPropsProps = {
  startMessagesListeningAsync: () => void;
  stopMessagesListeningAsync: () => void;
  sendMessageAsync: (message: string) => void;
};

export type DialogsPropsType = mapStatePropsType & mapDispatchPropsProps;
