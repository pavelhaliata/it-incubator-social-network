import {Friends} from "./Friends";
import {connect} from "react-redux";
import { AppStateType } from "../../../redux/redux-store";
import { followAC, setUsersAC, unFollowAC } from "../../../redux/profilePage_reducer";
import { Dispatch } from "redux";
import {UserType} from "../../../api/social-network-api";



type mapStatePropsType = {
    usersData: Array<UserType>
}
type mapDispatchPropsProps = {
    followPerson: (userId: number) => void
    unFollowPerson: (userId: number) => void
    setUsers: (usersData:Array<UserType> ) => void
}

export type FriendsPropsType = mapStatePropsType & mapDispatchPropsProps

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        usersData: state.profilePage.usersData
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsProps => {
    return{
        followPerson: (userId: number) => {dispatch(followAC(userId))},
        unFollowPerson: (userId: number) => {dispatch(unFollowAC(userId))},
        setUsers: (usersData:Array<UserType> ) => {dispatch(setUsersAC(usersData))}
    }
}

export const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)
