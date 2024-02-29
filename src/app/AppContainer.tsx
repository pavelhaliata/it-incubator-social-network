import { compose } from "redux";
import { connect } from "react-redux";
import { AppRootState } from "store-redux/redux-store";
import { ComponentType, useEffect } from "react";
import App from "./App";
import { appInitializationAsync } from "../store-redux/auth_reducer";
import { Loader } from "../components/loader/Loader";

const AppApiContainer = (props: AppPropsType) => {
  useEffect(() => {
    props.appInitializationAsync();
  }, [props.appInitializationAsync]);

  if (!props.isInitialization) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Loader />
      </div>
    );
  }
  return <App />;
};

const mapStateToProps = (state: AppRootState) => {
  return {
    isInitialization: state.authData.isInitialization,
  };
};
export const AppContainer = compose<ComponentType>(
  connect(mapStateToProps, { appInitializationAsync })
)(AppApiContainer);

// types
type mapStatePropsType = {
  isInitialization: boolean;
};
type mapDispatchPropsPropsType = {
  appInitializationAsync: () => void;
};
export type AppPropsType = mapStatePropsType & mapDispatchPropsPropsType;
