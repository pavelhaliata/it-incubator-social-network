import {StateDataType} from "../../../redux/store"
import {Friends} from "./Friends";
import {connect} from "react-redux";


type FriendsContainerProps = {
    store: any
}

 const FriendsContainer_block = ({store}: FriendsContainerProps) => {
    const state: StateDataType = store.getState()
    return (
        <>
            <Friends personsData={state.profilePage.personsData}/>
        </>
    )
}
//!!! типизация state из redux/store

const mapStateToProps = (state: StateDataType) => {
    return {
        personsData: state.profilePage.personsData
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {}
}

export const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)
