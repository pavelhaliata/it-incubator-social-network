import React, {ComponentType} from "react";
import {connect} from "react-redux";
import {AppRootState} from "store-redux/redux-store";
import {Navigate} from "react-router-dom";

const mapStateToProps = (state: AppRootState): mapStatePropsType => {
    return {
        isLogin: state.authData.isLogin
    };
};


export function withAuthRedirect<T> (Component: ComponentType<T>) {

    const RedirectComponent = (props: mapStatePropsType) => {
        let {isLogin, ...restProps} = props

        if (!isLogin) return <Navigate to='/login'/>

        return <Component {...restProps as T & {}}/>
    }
   return connect(mapStateToProps)(RedirectComponent);
}

//types
type mapStatePropsType = {
    isLogin: boolean
};