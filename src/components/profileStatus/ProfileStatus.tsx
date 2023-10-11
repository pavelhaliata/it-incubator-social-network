import { Component } from "react";
import { ProfileStatusPropsType } from "./profileStatusContainer";

export class ProfileStatus extends Component<ProfileStatusPropsType> {
  state = {
    toggleStatus: false,
  };

  render() {
    if (this.state.toggleStatus) {
      return (
	  <span>
		{this.props.statusAuthorizedUser}
	  </span>
	);
    } else {
      return (
		<>
			<input type='text'/>
			<button >edit</button>
		</>
	);
    }
  }
}
