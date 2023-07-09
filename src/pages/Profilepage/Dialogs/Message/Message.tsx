import React, {Component} from 'react';
import style from "./Message.module.scss"

type MessagePropsType ={
    avatar: string
	name: string
	message: string
	time: string
}

export class Message extends Component<MessagePropsType> {

    render() {
        return (
            <div className={style.message}>
                <div className={style.message__avatar}>
                    <img src={this.props.avatar} alt={this.props.name} />
                </div>
                <div className={style.message__body}>
                    <div className={style.message__author}>{this.props.name}</div>
                    <div className={style.message__text}>{this.props.message}</div>
                    <div className={style.message__time}>{this.props.time}</div>
                </div>
            </div>
        );
    };
};