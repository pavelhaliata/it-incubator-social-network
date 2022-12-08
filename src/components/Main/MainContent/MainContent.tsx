import React from "react";
import Profile from "../Profile/Profile";
import s from "./MainContent.module.scss";

interface IProps {
    className?: string
}


function MainContent({ className }: IProps) {
    return (
		<div className={`${s.container} ${className}`}>
			<Profile />
		</div>
	)
}

export default MainContent;