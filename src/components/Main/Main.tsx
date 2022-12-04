import React from "react";
import Profile from "../Profile/Profile";
import s from "./Main.module.scss";

interface IProps {
    className?: string
}


function Main({className}:IProps){
    return(
        <div className={`${s.container} ${className}`}>
            <div className={s.main}>
                <Profile/>
            </div>
        </div>
    );
}

export default Main;