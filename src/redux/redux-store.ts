import {combineReducers, legacy_createStore as createStore} from "redux";
import { profilePageReducer, ProfilePageType } from "./profilePage_reducer";
import { blogPageReducer, BlogPageType } from "./blogPage_reducer";


export type StateDataType = {
  profilePage: ProfilePageType;
  blogPage: BlogPageType;
};

export type ReduxStateType = ReturnType<typeof rootReducers>

const rootReducers = combineReducers({
  blogPage: blogPageReducer,
  profilePage: profilePageReducer,
});
const store = createStore(rootReducers);

export default store;

