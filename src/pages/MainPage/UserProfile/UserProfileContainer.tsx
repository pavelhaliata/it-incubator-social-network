import {AppRootState} from "store-redux/redux-store";
import {connect} from "react-redux";
import {RequestStatus, setHeaderTitle} from "app/app-reducer";
import {User} from "./UserProfile";
import {getUserProfileAsync, getUserStatusAsync} from "store-redux/MainPage_reducer";
import {UserProfileType} from "api/social-network-api";


export type UserPagePropsType = mapStatePropsType & mapDispatchPropsPropsType

const mapStateToProps = (state: AppRootState) => {
    return {
        profileUserData: state.profilePage.userProfileData,
        requestStatus: state.app.requestStatus,
        userStatus: state.profilePage.userStatus
    };
};

export const UserPageContainer = connect(mapStateToProps,
    { setHeaderTitle, getProfileUserAsync: getUserProfileAsync, getUserStatusAsync })(User);

// types
type mapStatePropsType = {
    profileUserData: UserProfileType
    requestStatus: RequestStatus
    userStatus: string
}
type mapDispatchPropsPropsType = {
    setHeaderTitle: (title: string) => void
    getProfileUserAsync: (userId: number) => void
    getUserStatusAsync:(userId: number) => void
}