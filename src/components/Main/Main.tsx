import React from "react";
import TopHeader from "./TopHeader/TopHeader";
import s from "./Main.module.scss";
import MainContent from "./MainContent/MainContent";

interface IProps {
    className?: string
}
type MainPropsType={
    className?: string
}

function Main({ className }: MainPropsType) {
    return (
        <div className={`${s.container} ${className}`}>
            <div className={s.main}>
                <TopHeader className={s.topHeader} />
                <MainContent/>
            </div>
        </div>
    );
}

export default Main;