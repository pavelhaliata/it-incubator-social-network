import {Component, ButtonHTMLAttributes,DetailedHTMLProps} from "react";
import style from "./Button.module.scss";

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  onClick?: () => void
  status?: boolean
};

export class Button extends Component<DefaultButtonPropsType> {
  render() {
    return (
      <button type={this.props.type} style={this.props.style} className={`${this.props.className} ${style.button} ${this.props.status && style.status}`} onClick={this.props.onClick} disabled={this.props.status}>
        {this.props.children}
      </button>
    );
  }
}
