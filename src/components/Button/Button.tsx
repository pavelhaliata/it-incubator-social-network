import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import style from "./Button.module.scss";

type DefaultButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  /** Button action */
  onClick?: () => void;
  /** Button state */
  disabled?: boolean;
  /** Button name */
  label: string;
  /** Button options */
  variant?: "contained" | "outlined";
};
/** Primary UI Component Button */
export const Button = ({
  onClick,
  disabled = false,
  label,
  variant = "contained",
  ...props
}: DefaultButtonPropsType) => {
  return (
    <button
      type={props.type}
      style={props.style}
      className={`${props.className} ${style.button} ${
        disabled && style.disabled
      } ${variant === "outlined" ? style.outlined : style.contained}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
