import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import style from "./Dialogs.module.scss";
import { DialogsPropsType } from "./DialogsContainer";
import { Message } from "./Message/Message";
import { Button } from "components/Button/Button";
import loading from "assets/images/loading-pulse-200px.svg";

export const Dialogs = (props: DialogsPropsType) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [isAutoScroll, setIsAutoScroll] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    props.startMessagesListeningAsync();
    return () => {
      props.stopMessagesListeningAsync();
    };
  }, []);
  useEffect(() => {
    if (props.messages.length) {
      ref.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [props.messages.length]);
  const scrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    const element = e.currentTarget;
    if (
      Math.abs(
        element.scrollHeight - element.scrollTop - element.clientHeight
      ) < 300
    ) {
      !isAutoScroll && setIsAutoScroll(true);
    } else {
      isAutoScroll && setIsAutoScroll(false);
    }
  };

  const onChangeInputHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.currentTarget.value);
  };
  const sendMessageHandler = () => {
    if (!inputValue) {
      return;
    }
    props.sendMessageAsync(inputValue);
    setInputValue("");
  };
  const onKeyDownSendMessageHandler = (event: KeyboardEvent) => {
    if (event.key === "Enter" && event.ctrlKey && inputValue) {
      sendMessageHandler();
    }
  };

  return (
    <>
      <div className={`${style.dialogs}`}>
        {props.status === "pending" ? (
          <div style={{ display: "flex", alignItems: "center" }}>
            connection lost... reconnect, please wait...
            <img src={loading} width="34px" height="34px" alt="icon" />
          </div>
        ) : (
          <div
            className={`${style.dialog_item} ${style.author}`}
            onScroll={scrollHandler}
          >
            {props.messages.map((item) => {
              return (
                <Message
                  key={item.id}
                  id={item.id}
                  userId={item.userId}
                  userName={item.userName}
                  photo={item.photo}
                  message={item.message}
                />
              );
            })}
            <div ref={ref} />
          </div>
        )}
      </div>
      <div className={style.dialog_input}>
        <textarea
          autoFocus={true}
          className={style.input_message}
          placeholder="Write message..."
          value={inputValue}
          onChange={onChangeInputHandler}
          onKeyDown={onKeyDownSendMessageHandler}
        />
        <Button
          label="Send"
          disabled={props.status !== "ready"}
          className={style.send_btn}
          onClick={sendMessageHandler}
        />
      </div>
    </>
  );
};
