import {combineReducers, legacy_createStore as createStore} from "redux";
import { profilePageReducer } from "./profilePage_reducer";
import { blogPageReducer } from "./blogPage_reducer";

export type ReduxStateType = ReturnType<typeof rootReducers>

const rootReducers = combineReducers({
  blogPage: blogPageReducer,
  profilePage: profilePageReducer,
});
const store = createStore(rootReducers);

export default store;

