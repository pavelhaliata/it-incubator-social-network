import { Button } from "components/Button/Button";
import { Component } from "react";
import { LogoutPropsType } from "./LogoutContainer";

type PropsType = {
	logoutAsync: () => void
}

export class Logout extends Component<PropsType> {

	render() {
		return (
			<>
				<Button onClick={this.props.logoutAsync}>Logout</Button>
			</>
		);
	}
}

