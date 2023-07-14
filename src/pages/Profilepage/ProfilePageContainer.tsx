import { Dispatch } from "redux";
import { connect } from "react-redux";
import { StateType} from "../../store-redux/redux-store";
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

export const ProfilePageContainer = connect(mapStateToProps, { setHeaderTitle })(ProfilePage);
