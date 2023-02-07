import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import style from "./Button.module.scss";

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
type ButtonPropsType = DefaultButtonPropsType & {
	className?: string
}

export const Button: React.FC<ButtonPropsType> = ({
	className,
	...restProps
}) => {
	const callBack = (fn: any) => {

	}
	return (

		<button className={`${style.button}`} {...restProps} />

	)
}