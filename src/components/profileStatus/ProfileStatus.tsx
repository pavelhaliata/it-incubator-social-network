import {ChangeEvent, Component} from "react";
import {ProfileStatusPropsType} from "./ProfileStatusContainer";
import style from "./profileStatus.module.scss"

type stateType = {
    editMode: boolean,
    value: string
}

export class ProfileStatus extends Component<ProfileStatusPropsType> {

    state: stateType = {
        editMode: false,
        value: ''
    };

    activateEditMode = () => {
      debugger
      console.log('this:', this)
        this.setState({
            editMode: true
        })
    }
    disActivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatusAuthorizedUserAsync(this.state.value)
    }

    onChangeHandler(event: ChangeEvent<HTMLInputElement>) {
       this.setState({
           value: event.target.value
       })
    }


    render() {
        if (!this.state.editMode) {
          return (
            <>
              <span className={`${style.status} ${this.props.className}`} onDoubleClick={() => {
                    this.activateEditMode()
                }}>
                  {this.props.statusAuthorizedUser}
              </span>
            </> 
          );
      } else {
          return (
              <>
                <input className={this.props.className} autoFocus value={this.state.value} onBlur={() => {
                    this.disActivateEditMode()
                }} onChange={(event) => this.onChangeHandler(event)}/>
              </>
          );
      }
    }
}
