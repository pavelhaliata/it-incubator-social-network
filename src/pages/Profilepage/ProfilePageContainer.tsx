import { Dispatch } from "redux";
import { connect } from "react-redux";
import { headerTitleAC } from "../../redux/headerComponent_reducer";
import { AppStateType} from "../../redux/redux-store";
import ProfilePage from "./Profilepage";

type mapStatePropsType = {

}
type mapDispatchPropsPropsType = {
  setupHeaderTitle: (title: string) => void
}
export type ProfilePagePropsType = mapStatePropsType & mapDispatchPropsPropsType

const mapStateToProps = (state: AppStateType) => {
  return {};
};
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsPropsType => {
  return {
    setupHeaderTitle: (title: string) => {dispatch(headerTitleAC(title));},
  };
};

export const ProfilePageContainer = connect(mapStateToProps,mapDispatchToProps)(ProfilePage);
