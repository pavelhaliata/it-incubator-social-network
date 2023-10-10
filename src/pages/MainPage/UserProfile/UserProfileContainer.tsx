import {StateType} from "../../../store-redux/redux-store";
import {connect} from "react-redux";
import {RequestStatus, setHeaderTitle} from "../../../app/app-reducer";
import {User} from "./UserProfile";
import {getProfileUserAsync} from "../../../store-redux/MainPage_reducer";
import {ProfileUserType} from "../../../api/social-network-api";


export type UserPagePropsType = mapStatePropsType & mapDispatchPropsPropsType

const mapStateToProps = (state: StateType) => {
    return {
        ProfileUserData: state.profilePage.profileUserData,
        requestStatus: state.app.requestStatus
    };
};

export const UserPageContainer = connect(mapStateToProps, { setHeaderTitle, getProfileUserAsync })(User);

// types
type mapStatePropsType = {
    ProfileUserData: ProfileUserType
    requestStatus: RequestStatus
}
type mapDispatchPropsPropsType = {
    setHeaderTitle: (title: string) => void
    getProfileUserAsync: (userId: number) => void
}