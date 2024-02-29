import { ComponentType } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { AppRootState } from "store-redux/redux-store";

const mapStateToProps = (state: AppRootState): mapStatePropsType => {
  return {
    isLogin: state.authData.isLogin,
  };
};

export function withAuthRedirect<T>(Component: ComponentType<T>) {
  const RedirectComponent = (props: mapStatePropsType) => {
    const { isLogin, ...restProps } = props;

    if (!isLogin) return <Navigate to="/login" />;

    return <Component {...(restProps as T & {})} />;
  };
  return connect(mapStateToProps)(RedirectComponent);
}

//types
type mapStatePropsType = {
  isLogin: boolean;
};
