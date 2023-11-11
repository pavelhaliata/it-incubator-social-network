import { Component, ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import style from './Button.module.scss'

type DefaultButtonPropsType = DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
> & {
    onClick?: () => void
    disabled?: boolean
}

export class Button extends Component<DefaultButtonPropsType> {
    render() {
        return (
            <button
                type={this.props.type}
                style={this.props.style}
                className={`${this.props.className} ${style.button} ${
                    this.props.disabled && style.disabled
                }`}
                onClick={this.props.onClick}
                disabled={ this.props.disabled}
            >
                {this.props.children}
            </button>
        )
    }
}
