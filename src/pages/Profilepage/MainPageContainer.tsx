import { connect } from "react-redux";
import { StateType } from "../../store-redux/redux-store";
import { MainPage } from "./MainPage";
import { setHeaderTitle } from "../../app/app-reducer";
import { AuthUserDataType } from "../../api/social-network-api";

type mapStatePropsType = {
  authData: AuthUserDataType
};
type mapDispatchPropsPropsType = {
  setHeaderTitle: (title: string) => void;
};
export type MainPagePropsType = mapStatePropsType & mapDispatchPropsPropsType;

const mapStateToProps = (state: StateType) => {
  return {
      authData: state.authData
  };
};

export const MainPageContainer = connect(mapStateToProps, { setHeaderTitle })(
  MainPage
);
