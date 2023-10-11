import { Component } from "react";
import { ProfileStatusPropsType } from "./ProfileStatusContainer";
import style from "./profileStatus.module.scss"

export class ProfileStatus extends Component<ProfileStatusPropsType> {
  state = {
    editMode: false,
    value: ''
  };

  activateEditMode(edit: boolean){
    this.setState({
      editMode: edit
    })

  }
  onChangeHandler(event: any){
    console.log(event.target.value)
    this.setState({
      value: event.target.value
    })
  }


  render() {
    if (!this.state.editMode) {
      return (
	  <span className={style.status} onDoubleClick={()=>{this.activateEditMode(true)}}>
		  {this.props.statusAuthorizedUser}sssss
	  </span>
	);
    } else {
      return (
		<>
			<input type='text' value={this.state.value} onBlur={()=>{this.activateEditMode(false)}} onChange={this.onChangeHandler}/>
		</>
	);
    }
  }
}
