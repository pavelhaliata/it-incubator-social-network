import React from "react";
import {connect} from "react-redux";
import {StateType} from "store-redux/redux-store";
import {Navigate} from "react-router-dom";

const mapStateToProps = (state: StateType): mapStatePropsType => {
    return {
        isLogin: state.authData.isLogin
    };
};


export const withAuthRedirect = (Component: any) => {

    const RedirectComponent = (props: mapStatePropsType) => {
        if (!props.isLogin) {
            return (
                <Navigate to='/login'/>
            )
        }
        return <Component {...props}/>
    }
   return connect(mapStateToProps)(RedirectComponent);
}

//types
type mapStatePropsType = {
    isLogin: boolean
};