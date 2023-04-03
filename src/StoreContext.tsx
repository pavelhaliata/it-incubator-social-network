import React from "react";
import store from './redux/redux-store';

export const StoreContext = React.createContext(store);

type ProviderPropsType = {
    store: any
    children: any
}

export const Provider = ({store, children}: ProviderPropsType) => {
    return (
        <StoreContext.Provider value={store}>
            {children}
        </StoreContext.Provider>
    )
}




