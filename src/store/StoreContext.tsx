import React from 'react'
import { MainPageActionsType } from '../store-redux/ProfilePage_reducer'
import { BlogPageActionsType } from '../store-redux/blogPage_reducer'
import { AppRootState } from '../store-redux/redux-store'
import { Store } from 'redux'

export type ActionCreatorsTypes = MainPageActionsType | BlogPageActionsType

export const StoreContext = React.createContext({} as Store<AppRootState, ActionCreatorsTypes>)

type ProviderType = {
    store: Store<AppRootState, ActionCreatorsTypes>
    children: React.ReactNode
}

export const Provider = ({ store, children }: ProviderType) => {
    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}
