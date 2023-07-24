import React from "react";
import {ActionProfilePageType} from "../store-redux/MainPage_reducer";
import {ActionCreatorBlogPageType} from "../store-redux/blogPage_reducer";
import {StateType} from "../store-redux/redux-store";
import {Store} from "redux";


export type ActionCreatorsTypes = ActionProfilePageType | ActionCreatorBlogPageType

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
