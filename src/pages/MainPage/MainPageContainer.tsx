import { connect } from "react-redux";
import { StateType } from "store-redux/redux-store";
import { MainPage } from "./MainPage";
import { setHeaderTitle } from "app/app-reducer";
import {AuthUserDataType} from "api/social-network-api";



const mapStateToProps = (state: StateType): mapStatePropsType => {
  return {
      authUserData: state.authData
  };
};
export const MainPageContainer = connect(mapStateToProps, { setHeaderTitle })(MainPage);


//types
type mapStatePropsType = {
    authUserData: AuthUserDataType

};
type mapDispatchPropsPropsType = {
    setHeaderTitle: (title: string) => void;
};
export type MainPagePropsType = mapStatePropsType & mapDispatchPropsPropsType;