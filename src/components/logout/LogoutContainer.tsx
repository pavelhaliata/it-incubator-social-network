import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { logoutAsync } from "store-redux/auth_reducer";
import { AppRootState } from "store-redux/redux-store";
import { Logout } from "./Logout";


const LogoutAsyncContainer = (props: LogoutPropsType) => {

    let {isLogin, ...restProps} = props

    if (!isLogin) {
        return (
            <Navigate to='/login'/>
        )
    }
    return (
        <Logout {...restProps}/>
    )
}


const mapStateToProps = (state: AppRootState): mapStatePropsType => {
  return {
	isLogin: state.authData.isLogin
  };
};
export const LogoutButton = connect(mapStateToProps, { logoutAsync })(LogoutAsyncContainer);

//types
type mapStatePropsType = {
	isLogin: boolean
    
};
type mapDispatchPropsPropsType = {
    logoutAsync: () => void
};
export type LogoutPropsType = mapStatePropsType & mapDispatchPropsPropsType;
