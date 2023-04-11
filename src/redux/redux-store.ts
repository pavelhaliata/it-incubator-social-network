import {combineReducers, legacy_createStore as createStore} from "redux";
import { profilePageReducer, ProfilePageType } from "./profilePage_reducer";
import { blogPageReducer, BlogPageType } from "./blogPage_reducer";
import {headerComponentsReducer, HeaderTitleType} from "./headerComponents_reducer";


export type StateDataType = {
  headerTitle: HeaderTitleType,
  profilePage: ProfilePageType;
  blogPage: BlogPageType;
};

export type ReduxStateType = ReturnType<typeof rootReducers>

const rootReducers = combineReducers({
  headerTitle: headerComponentsReducer,
  blogPage: blogPageReducer,
  profilePage: profilePageReducer,

});
const store = createStore(rootReducers);

export default store;

