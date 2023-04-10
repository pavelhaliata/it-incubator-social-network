import React from "react";
import s from "./Footer.module.scss";

interface IProps{
    className: string
}

function Footer({className}:IProps){

   
    

    return(
        <div className={`${s.container} ${className}`}>
            <div className={s.footer}>
                footer well be here
            </div>
        </div>
    );
}


export default Footer;