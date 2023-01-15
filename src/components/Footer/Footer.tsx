import React from "react";
import s from "./Footer.module.scss";

interface IProps{
    className: string
}

function Footer({className}:IProps){

   
    

    return(
        <div className={`${s.container} ${className}`}>
            <div className={s.footer}>
                content here
            </div>
        </div>
    );
}


export default Footer;