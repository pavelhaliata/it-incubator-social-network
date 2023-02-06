import style from "./Button.module.scss";

type ButtonPropsType={
	children: string
}

export const Button = ({children}: ButtonPropsType) =>{
	return(
		<>
			<button>{children}</button>
		</>
	)
}