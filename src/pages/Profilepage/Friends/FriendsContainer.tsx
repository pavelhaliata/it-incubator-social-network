import {Friends} from "./Friends";
import {connect} from "react-redux";
import { AppStateType } from "../../../redux/redux-store";
import { followAC, setUsersAC, unFollowAC, UserType } from "../../../redux/profilePage_reducer";
import { Dispatch } from "redux";


// type FriendsContainerProps = {
//     store: any
// }

//  const FriendsContainer_block = ({store}: FriendsContainerProps) => {
//     const state: StateDataType = store.getState()
//     return (
//         <>
//             <Friends personsData={state.profilePage.personsData}/>
//         </>
//     )
// }
//!!! типизация state из redux/store

type mapStatePropsType = {
    usersData: Array<UserType>
}
type mapDispatchPropsProps = {
    followPerson: (userId: string) => void
    unFollowPerson: (userId: string) => void
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
        followPerson: (userId: string) => {dispatch(followAC(userId))},
        unFollowPerson: (userId: string) => {dispatch(unFollowAC(userId))},
        setUsers: (usersData:Array<UserType> ) => {dispatch(setUsersAC(usersData))}
    }
}

export const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)
