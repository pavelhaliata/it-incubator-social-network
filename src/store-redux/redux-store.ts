import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension';
import { profilePageReducer } from './MainPage_reducer'
import { blogPageReducer } from './blogPage_reducer'
import { weatherPageReducer } from './weatherPage_reducer'
import { inputValueReducer } from './inputComponent_reducer'
import { appReducer } from '../app/app-reducer'
import { authReducer } from './auth_reducer'

const rootReducer = combineReducers({
    app: appReducer,
    authData: authReducer,
    inputValueComponent: inputValueReducer,
    blogPage: blogPageReducer,
    profilePage: profilePageReducer,
    weatherPage: weatherPageReducer,
})
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store

//types
export type AppRootState = ReturnType<typeof rootReducer>

//@ts-ignore
window.store = store
