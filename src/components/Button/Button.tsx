import {Component, ButtonHTMLAttributes,DetailedHTMLProps} from "react";
import style from "./Button.module.scss";

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  callback: () => void;
};

export class Button extends Component<DefaultButtonPropsType> {
  render() {
    return (
      <button className={`${this.props.className} ${style.button}`} onClick={this.props.callback}>
        {this.props.children}
      </button>
    );
  }
}
