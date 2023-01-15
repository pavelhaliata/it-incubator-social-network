import React from "react";
import { Friends } from "../Friends/Friends";
import Dialogs from "../Dialogs/Dialogs";
import s from "./MainContent.module.scss";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

interface IProps {
	className?: string
}


function MainContent({ className }: IProps) {
	return (

		<BrowserRouter>
			<div className={`${s.container} ${className}`}>
				<Routes>
					<Route path='/dialogs' element={<Dialogs />} />
					<Route path='/friends' element={<Friends />} />
				</Routes>
			</div>
		</BrowserRouter>



	)
}

export default MainContent;