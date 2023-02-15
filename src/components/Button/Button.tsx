import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import style from "./Button.module.scss";

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
	callback: () => void
}

export const Button: React.FC<DefaultButtonPropsType> = ({
	callback,
	...restProps
}) => {



	return (
		<button {...restProps} className={`${restProps.className} ${style.button}`} onClick={callback} />
	)
}