import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import style from "./Button.module.scss";

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
type ButtonPropsType = DefaultButtonPropsType & {
	className?: string
	callback: () => void
}

export const Button: React.FC<ButtonPropsType> = ({
	className,
	callback,
	...restProps
}) => {

	return (
		<button className={`${style.button}`} {...restProps} onClick={callback} />
	)
}