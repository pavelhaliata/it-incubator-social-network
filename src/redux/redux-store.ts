import {combineReducers, legacy_createStore as createStore} from "redux";
import { profilePageReducer } from "./profilePage_reducer";
import { blogPageReducer } from "./blogPage_reducer";
import { headerComponentReducer } from "./headerComponent_reducer";
import { weatherPageReducer } from "./weatherPage_reducer";


export type StateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
  headerComponent: headerComponentReducer,
  blogPage: blogPageReducer,
  profilePage: profilePageReducer,
  weatherPage : weatherPageReducer
});
const store = createStore(rootReducer);

export default store;

