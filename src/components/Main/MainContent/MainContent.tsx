import React from "react";
import { Friends } from "../Friends/Friends";
import Dialogs from "../Dialogs/Dialogs";
import s from "./MainContent.module.scss";
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { type } from "@testing-library/user-event/dist/type";

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
				<NavLink to={'/settings'}>settings is here</NavLink>
				<Routes>
					<Route path={'/dialogs'} element={<Dialogs />} />
					<Route path={'/friends'} element={<Friends />} />
					<Route path={'/friends/*'} element={<div>404 not found</div>} />
					<Route path={'/settings'} element={<div>there is my settings</div>} />
				</Routes>
			</div>

		</div>




	)
}

export default MainContent;