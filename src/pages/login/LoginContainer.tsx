import {connect} from "react-redux";
import {AppRootState} from "store-redux/redux-store";
import {Login, LoginFormValues} from "./Login";
import {Navigate} from "react-router-dom";
import {loginAsync} from "store-redux/auth_reducer";
import {LoginDataType} from "api/social-network-api";
import { FormikHelpers } from "formik";


const LoginAsyncContainer = (props: LoginPropsType) => {

    let {isLogin, ...restProps} = props

    if (isLogin) {
        return (
            <Navigate to='/'/>
        )
    }
    return (
        <Login {...restProps}/>
    )
}


const mapStateToProps = (state: AppRootState): mapStatePropsType => {
  return {
	isLogin: state.authData.isLogin
  };
};
export const LoginContainer = connect(mapStateToProps, { loginAsync })(LoginAsyncContainer);


//types
type mapStatePropsType = {
	isLogin: boolean
    
};
type mapDispatchPropsPropsType = {
    loginAsync: (data: LoginDataType, submitProps: FormikHelpers<LoginFormValues>) => void
};
export type LoginPropsType = mapStatePropsType & mapDispatchPropsPropsType;
