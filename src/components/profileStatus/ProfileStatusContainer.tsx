import { connect } from "react-redux";
import { AppRootState } from "store-redux/redux-store";
import { ProfileStatus } from "./ProfileStatus";
import { updateUserStatusAsync } from "store-redux/MainPage_reducer";


const mapStateToProps = (state: AppRootState): mapStatePropsType => {
  return {
	  userStatus: state.profilePage.userStatus && state.profilePage.userStatus
  };
};
export const ProfileStatusContainer = connect(mapStateToProps, { updateUserStatusAsync })(ProfileStatus);


//types
type mapStatePropsType = {
    userStatus: string,
};
type mapDispatchPropsPropsType = {
    updateUserStatusAsync: (textStatus: string) => void
};
export type ProfileStatusPropsType = mapStatePropsType & mapDispatchPropsPropsType;
