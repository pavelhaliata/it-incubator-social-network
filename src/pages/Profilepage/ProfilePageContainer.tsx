import { Dispatch } from "redux";
import { connect } from "react-redux";
import { headerTitleAC } from "../../redux/headerComponents_reducer";
import { StateType } from "../../redux/redux-store";
import ProfilePage from "./Profilepage";

const mapStateToProps = (state: StateType) => {
  return {};
};
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setUpHeaderTitle: (title: string) => {dispatch(headerTitleAC(title));},
  };
};

export const ProfilePageContainer = connect(mapStateToProps,mapDispatchToProps)(ProfilePage);
