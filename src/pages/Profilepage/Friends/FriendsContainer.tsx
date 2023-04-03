import {StateDataType} from "../../../redux/store"
import {Friends} from "./Friends";


type FriendsContainerProps = {
    store: any
}

export const FriendsContainer = ({ store }: FriendsContainerProps) => {
    const state: StateDataType = store.getState()
    return (
        <>
            <Friends state={state.profilePage.personsData}/>
        </>
    )
}


