import React from "react";
import { Friends } from "../Friends/Friends";
import Dialogs from "../Dialogs/Dialogs";
import s from "./MainContent.module.scss";
import {NavLink, Route, Routes } from 'react-router-dom';

interface IProps {
	className?: string
}
type MainContentPropsType = {
	className?: string
}

function MainContent({ className }: MainContentPropsType) {
	return (
		<div className={`${className} ${s.container}`}>
			<div className={`${s.maincontent}`}>
				<Routes>
					<Route path={'/dialogs'} element={<Dialogs />} />
					<Route path={'/friends'} element={<Friends />} />
				</Routes>
			</div>

		</div>




	)
}

export default MainContent;