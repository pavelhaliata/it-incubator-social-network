import {StateType} from "../../../store-redux/redux-store";
import {connect} from "react-redux";
import {setHeaderTitle} from "../../../app/app-reducer";
import {User} from "./User";
import {getProfileUser} from "../../../store-redux/profilePage_reducer";
import {ProfileUserType} from "../../../api/social-network-api";


export type UserPagePropsType = mapStatePropsType & mapDispatchPropsPropsType

const mapStateToProps = (state: StateType) => {
    return {
        ProfileUserData: state.profilePage.profileUserData
    };
};

export const UserPageContainer = connect(mapStateToProps, { setHeaderTitle, getProfileUser })(User);

// types
type mapStatePropsType = {
    ProfileUserData: ProfileUserType
}
type mapDispatchPropsPropsType = {
    setHeaderTitle: (title: string) => void
    getProfileUser: (userId: number) => void
}