import {combineReducers, legacy_createStore as createStore} from "redux";
import { profilePageReducer, ProfilePageType } from "./profilePage_reducer";
import { blogPageReducer, InitialBlogPageStateType } from "./blogPage_reducer";
import {headerComponentsReducer, HeaderTitleType} from "./headerComponents_reducer";


export type StateType = {
  headerTitle: HeaderTitleType,
  profilePage: ProfilePageType;
  blogPage: InitialBlogPageStateType;
};

export type AppStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
  headerTitle: headerComponentsReducer,
  blogPage: blogPageReducer,
  profilePage: profilePageReducer,

});
const store = createStore(rootReducer);

export default store;

