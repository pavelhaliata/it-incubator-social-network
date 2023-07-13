import { Dispatch } from "redux";
import { connect } from "react-redux";
import { StateType} from "../../redux/redux-store";
import {ProfilePage} from "./ProfilePage";
import { setHeaderTitle } from "../../app/app-reducer";

type mapStatePropsType = {

}
type mapDispatchPropsPropsType = {
  setHeaderTitle: (title: string) => void
}
export type ProfilePagePropsType = mapStatePropsType & mapDispatchPropsPropsType

const mapStateToProps = (state: StateType) => {
  return {};
};
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsPropsType => {
  return {
    setHeaderTitle,
  };
};

export const ProfilePageContainer = connect(mapStateToProps,mapDispatchToProps)(ProfilePage);
