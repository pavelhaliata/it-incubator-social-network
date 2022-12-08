import React from "react";
import s from "./DialogItem.module.scss";

type DialogsItemType = {
	name: string
}
function DialogItem(props: DialogsItemType){
	return(
		<div className={s.container}>
			{props.name} :
		</div>
	);
}

export default DialogItem;