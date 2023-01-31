import React, { useEffect } from 'react';
import s from './Blogpage.module.scss'

type IProps = {
	setStatePage: (value: string) => void
}


export const Blogpage = ({ setStatePage }: IProps) => {

	useEffect(() => {
		document.title = 'My Blog'
		setStatePage('blogpage');
	}, [])

	return (
		<div><h2>blogpage is here</h2></div>
	)
}
