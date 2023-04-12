import React from "react";
import {ActionCreatorTypeProfilePage} from "./redux/profilePage_reducer";
import {ActionCreatorBlogPageType} from "./redux/blogPage_reducer";
import {AppStateType} from "./redux/redux-store";
import {Store} from "redux";


export type ActionCreatorsTypes = ActionCreatorTypeProfilePage | ActionCreatorBlogPageType

export const StoreContext = React.createContext({} as Store<AppStateType, ActionCreatorsTypes>)

type ProviderType = {
    store: Store<AppStateType, ActionCreatorsTypes>
    children: React.ReactNode
}

export const Provider = ({store, children}: ProviderType) => {
    return (
        <StoreContext.Provider value={store}>
            {children}
        </StoreContext.Provider>
    )
}

