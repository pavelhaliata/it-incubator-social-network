import { connect } from 'react-redux'
import { AppRootState } from 'store-redux/redux-store'
import { LoginFormValues } from './Login'
import { Navigate } from 'react-router-dom'
import { loginAsync } from 'store-redux/auth_reducer'
import { LoginDataType } from 'api/social-network-api'
import { FormikHelpers } from 'formik'
import { compose } from 'redux'
import { withLazyLoading } from '../../hoc/withLazyLoading'
import { ComponentType, lazy } from 'react'
const Login = lazy(() => import('./Login').then(module => ({ default: module.Login })))

const LoginAsyncContainer = (props: LoginPropsType) => {
    const { isLogin, ...restProps } = props

    if (isLogin) {
        return <Navigate to='/' />
    }
    return <Login {...restProps} />
}

const mapStateToProps = (state: AppRootState): mapStatePropsType => {
    return {
        isLogin: state.authData.isLogin,
        captchaUrl: state.authData.captchaUrl,
    }
}
export const LoginContainer = compose<ComponentType>(
    connect(mapStateToProps, { loginAsync }),
    withLazyLoading,
)(LoginAsyncContainer)

//types
type mapStatePropsType = {
    isLogin: boolean
    captchaUrl: null | string
}
type mapDispatchPropsPropsType = {
    loginAsync: (data: LoginDataType, submitProps: FormikHelpers<LoginFormValues>) => void
}
export type LoginPropsType = mapStatePropsType & mapDispatchPropsPropsType
