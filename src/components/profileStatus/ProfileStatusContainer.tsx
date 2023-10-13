import { connect } from "react-redux";
import { AppRootState } from "store-redux/redux-store";
import { ProfileStatus } from "./ProfileStatus";
import { getUserStatusAsync, updateUserStatusAsync } from "store-redux/MainPage_reducer";


const mapStateToProps = (state: AppRootState): mapStatePropsType => {
  return {
	  userStatus: state.profilePage.userStatus,
    userAuthorizedId: state.authData.id
  };
};
export const ProfileStatusContainer = connect(mapStateToProps, { updateUserStatusAsync, getUserStatusAsync })(ProfileStatus);


//types
type mapStatePropsType = {
    userStatus: string,
    userAuthorizedId: number | null
};
type mapDispatchPropsPropsType = {
    updateUserStatusAsync: (textStatus: string) => void
    getUserStatusAsync: (userId: number) => void
};
export type ProfileStatusPropsType = mapStatePropsType & mapDispatchPropsPropsType;
