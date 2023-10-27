import { ChangeEvent, Component } from 'react'
import { ProfileStatusPropsType } from './ProfileStatusContainer'
import style from './profileStatus.module.scss'

type stateType = {
    editMode: boolean
    value: string
}

export class ProfileStatus extends Component<ProfileStatusPropsType> {
    state: stateType = {
        editMode: false,
        value: this.props.userStatus,
    }

    componentDidMount() {
        // debugger
        if (this.props.userAuthorizedId) {
            this.props.getUserStatusAsync(this.props.userAuthorizedId)
        }
    }
    componentDidUpdate(prevProps: ProfileStatusPropsType, prevState: stateType) {
        if (prevProps.userStatus !== this.props.userStatus) {
            this.setState({
                value: this.props.userStatus,
            })
        }
    }

    activateEditMode = () => {
        this.setState({
            editMode: true,
        })
    }
    disActivateEditMode = () => {
        this.setState({
            editMode: false,
        })
        this.props.updateUserStatusAsync(this.state.value)
    }

    onChangeHandler(event: ChangeEvent<HTMLInputElement>) {
        this.setState({
            value: event.target.value,
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode && (
                    <span
                        className={`${style.status}`}
                        onDoubleClick={() => {
                            this.activateEditMode()
                        }}
                    >
                        {this.props.userStatus ? this.props.userStatus : 'your status...'}
                    </span>
                )}
                {this.state.editMode && (
                    <input
                        className={style.input}
                        autoFocus
                        value={this.state.value}
                        onBlur={() => {
                            this.disActivateEditMode()
                        }}
                        onChange={event => this.onChangeHandler(event)}
                    />
                )}
            </div>
        )
    }
}
