import {Component, ButtonHTMLAttributes,DetailedHTMLProps} from "react";
import style from "./Button.module.scss";

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  callback: () => void;
  status?: boolean
};

export class Button extends Component<DefaultButtonPropsType> {
  render() {
    return (
      <button className={`${this.props.className} ${style.button} ${this.props.status && style.status}`} onClick={this.props.callback} disabled={this.props.status}>
        {this.props.children}
      </button>
    );
  }
}
