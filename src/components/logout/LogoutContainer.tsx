import { connect } from 'react-redux'
import { logoutAsync } from 'store-redux/auth_reducer'
import { AppRootState } from 'store-redux/redux-store'
import { Logout } from './Logout'

const mapStateToProps = (state: AppRootState): mapStatePropsType => {
    return {
        isLogin: state.authData.isLogin,
    }
}
export const LogoutButton = connect(mapStateToProps, { logoutAsync })(Logout)

//types
type mapStatePropsType = {
    isLogin: boolean
}
type mapDispatchPropsPropsType = {
    logoutAsync: () => void
}
export type LogoutPropsType = mapStatePropsType & mapDispatchPropsPropsType
