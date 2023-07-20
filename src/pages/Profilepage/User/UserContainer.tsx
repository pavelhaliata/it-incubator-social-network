import {StateType} from "../../../store-redux/redux-store";
import {connect} from "react-redux";
import {RequestStatus, setHeaderTitle} from "../../../app/app-reducer";
import {User} from "./User";
import {getProfileUser} from "../../../store-redux/profilePage_reducer";
import {ProfileUserType} from "../../../api/social-network-api";


export type UserPagePropsType = mapStatePropsType & mapDispatchPropsPropsType

const mapStateToProps = (state: StateType) => {
    return {
        ProfileUserData: state.profilePage.profileUserData,
        requestStatus: state.app.status
    };
};

export const UserPageContainer = connect(mapStateToProps, { setHeaderTitle, getProfileUser })(User);

// types
type mapStatePropsType = {
    ProfileUserData: ProfileUserType
    requestStatus: RequestStatus
}
type mapDispatchPropsPropsType = {
    setHeaderTitle: (title: string) => void
    getProfileUser: (userId: number) => void
}