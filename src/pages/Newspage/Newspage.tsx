import React, { useEffect } from "react";
import style from "./Newapage.module.scss";

type NewapageType = {
  setStatePage: (value: string) => void;
};

export const Newspage = ({ setStatePage }: NewapageType) => {
  useEffect(() => {
    document.title = "News";
    setStatePage("newspage");
  }, []);

  return(
	<div className={style.container}>
		<div className={style.news_container}>
    		<div className={style.news_header}>header</div>
    		<div className={style.news_main}>main</div>
    		<div className={style.news_footer}>footer</div>
  		</div>
	</div>	
  		
  )
};
