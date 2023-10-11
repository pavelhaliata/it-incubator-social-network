import { connect } from "react-redux";
import { AppRootState } from "../../store-redux/redux-store";
import { ProfileStatus } from "./ProfileStatus";
import { updateStatusAuthorizedUserAsync } from "store-redux/MainPage_reducer";


const mapStateToProps = (state: AppRootState): mapStatePropsType => {
  return {
	statusAuthorizedUser: state.profilePage.statusAuthorizedUser
  };
};
export const ProfileStatusContainer = connect(mapStateToProps, { updateStatusAuthorizedUserAsync })(ProfileStatus);


//types
type mapStatePropsType = {
	statusAuthorizedUser: string|null
};
type mapDispatchPropsPropsType = {
    updateStatusAuthorizedUserAsync: (textStatus: string) => void 
};
export type ProfileStatusPropsType = mapStatePropsType & mapDispatchPropsPropsType;
