import React, {Component} from 'react';
import style from "./Newapage.module.scss";

type NewsPagePropsType = {
  
};

export class Newspage extends Component<NewsPagePropsType, any> {
	componentDidMount() {
		document.title = "News Page";
	}

	render() {
		return (
			<div>
				content coming soon...
			</div>
		);
	};
};