import React, {Component} from 'react';
import style from "./Newapage.module.scss";

type NewsPagePropsType = {
  
};

export class NewsPage extends Component<NewsPagePropsType, any> {
	componentDidMount() {
		console.log('did mount')
		document.title = "News Page";
	}
	componentDidUpdate(prevProps: Readonly<NewsPagePropsType>, prevState: Readonly<any>, snapshot?: any) {
		console.log('did update')
	}

	render() {
		return (
			<div>
				content coming soon...
			</div>
		);
	};
};