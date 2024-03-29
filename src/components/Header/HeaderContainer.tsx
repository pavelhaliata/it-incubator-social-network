import { connect } from 'react-redux'
import { AppRootState } from 'store-redux/redux-store'
import { Header } from './Header'
import { AuthUserDataType } from 'api/social-network-api'
import { Component } from 'react'
import { appInitializationAsync } from 'store-redux/auth_reducer'
import { getUserStatusAsync } from 'store-redux/ProfilePage_reducer'

// HeaderApiContainer
class HeaderApiContainer extends Component<HeaderPropsType> {
    componentDidMount() {
        this.props.getAuthUserDataAsync()
    }

    render() {
        return (
            <>
                <Header {...this.props} />
            </>
        )
    }
}

const mapStateToProps = (state: AppRootState): mapStatePropsType => {
    return {
        headerTitle: state.app.headerTitle,
        authUserData: state.authData,
    }
}
export const HeaderContainer = connect(mapStateToProps, {
    getAuthUserDataAsync: appInitializationAsync,
    getStatusAuthorizedUserAsync: getUserStatusAsync,
})(HeaderApiContainer)

//types
type mapStatePropsType = {
    headerTitle: string
    authUserData: AuthUserDataType
}
type mapDispatchPropsType = {
    getAuthUserDataAsync: () => void
}
export type HeaderPropsType = mapStatePropsType & mapDispatchPropsType
