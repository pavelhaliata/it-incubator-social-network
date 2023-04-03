import { combineReducers, legacy_createStore as createStore } from "redux";
import { profilePageReducer } from "./profilePage_reducer";
import { blogPageReducer } from "./blogPage_reducer";


const reducers = combineReducers({
  blogPage: blogPageReducer,
  profilePage: profilePageReducer,
});

const store = createStore(reducers);

export default store;
