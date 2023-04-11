import {Friends} from "./Friends";
import {connect} from "react-redux";
import { StateDataType } from "../../../redux/redux-store";
import { followAC, setUsersAC, unFollowAC, userDataType } from "../../../redux/profilePage_reducer";


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
const mapStateToProps = (state: StateDataType) => {
    return {
        usersData: state.profilePage.usersData
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return{
        followPerson: (userId: string) => {dispatch(followAC(userId))},
        unFollowPerson: (userId: string) => {dispatch(unFollowAC(userId))},
        setUsers: (usersData:Array<userDataType> ) => {dispatch(setUsersAC(usersData))}
    }
}

export const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)
