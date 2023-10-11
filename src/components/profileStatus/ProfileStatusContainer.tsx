import { connect } from "react-redux";
import { StateType } from "../../store-redux/redux-store";
import { ProfileStatus } from "./ProfileStatus";
import { updateStatusAuthorizedUserAsync } from "store-redux/MainPage_reducer";


const mapStateToProps = (state: StateType): mapStatePropsType => {
  return {
	statusAuthorizedUser: state.profilePage.statusAuthorizedUser
  };
};
export const ProfileStatusContainer = connect(mapStateToProps, { updateStatusAuthorizedUserAsync })(ProfileStatus);


//types
type mapStatePropsType = {
	statusAuthorizedUser: string
};
type mapDispatchPropsPropsType = {
    updateStatusAuthorizedUserAsync: (textStatus: string) => void 
};
export type ProfileStatusPropsType = mapStatePropsType & mapDispatchPropsPropsType;
