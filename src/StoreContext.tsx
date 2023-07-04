import React from "react";
import {ActionCreatorProfilePageType} from "./redux/profilePage_reducer";
import {ActionCreatorBlogPageType} from "./redux/blogPage_reducer";
import {StateType} from "./redux/redux-store";
import {Store} from "redux";


export type ActionCreatorsTypes = ActionCreatorProfilePageType | ActionCreatorBlogPageType

export const StoreContext = React.createContext({} as Store<StateType, ActionCreatorsTypes>)

type ProviderType = {
    store: Store<StateType, ActionCreatorsTypes>
    children: React.ReactNode
}

export const Provider = ({store, children}: ProviderType) => {
    return (
        <StoreContext.Provider value={store}>
            {children}
        </StoreContext.Provider>
    )
}

