import { Button } from 'components/Button/Button'
import { Component } from 'react'
import { LogoutPropsType } from './LogoutContainer'

export class Logout extends Component<LogoutPropsType> {
    render() {
        return (
            <>
                <Button label={'Logout'} onClick={this.props.logoutAsync} />
            </>
        )
    }
}
