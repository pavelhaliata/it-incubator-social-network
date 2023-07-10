import { ChangeEvent, KeyboardEvent, useState, Component, ReactNode } from "react";
import { InputPropsType } from "./InputContainer";

type IPropsType = {
  placeholder?: string;
  inputValue?: string;
  className?: string;
};

export class Input extends Component<InputPropsType & IPropsType> {
   onKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && this.props.inputValue) {
      if(this.props.setInputValue)
      this.props.setInputValue("");
      console.log("work");
    }
  };
   onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if(this.props.setInputValue)
    this.props.setInputValue(event.currentTarget.value);
  };
render(){
  return(
    <form
      className={this.props.className}
      onSubmit={(event) => {event.preventDefault()}}>
      <input
        value={this.props.inputValue}
        type="text"
        placeholder={this.props.placeholder}
        onKeyDown={this.onKeyDownHandler}
        onChange={this.onChangeHandler}
      />
    </form>
  )
}
}