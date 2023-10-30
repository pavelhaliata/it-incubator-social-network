import React from 'react'
import { ActionProfilePageType } from '../store-redux/MainPage_reducer'
import { ActionCreatorBlogPageType } from '../store-redux/blogPage_reducer'
import { AppRootState } from '../store-redux/redux-store'
import { Store } from 'redux'

export type ActionCreatorsTypes = ActionProfilePageType | ActionCreatorBlogPageType

export const StoreContext = React.createContext({} as Store<AppRootState, ActionCreatorsTypes>)

type ProviderType = {
    store: Store<AppRootState, ActionCreatorsTypes>
    children: React.ReactNode
}

export const Provider = ({ store, children }: ProviderType) => {
    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}
