import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import thunk from "redux-thunk";
import { profilePageReducer } from "./profilePage_reducer";
import { blogPageReducer } from "./blogPage_reducer";
import { weatherPageReducer } from "./weatherPage_reducer";
import { inputValueReducer } from "./inputComponent_reducer";
import { appReducer } from "../app/app-reducer";

export type StateType = ReturnType<typeof rootReducer>
const rootReducer = combineReducers({
  app: appReducer,
  inputValueComponent: inputValueReducer,
  blogPage: blogPageReducer,
  profilePage: profilePageReducer,
  weatherPage: weatherPageReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

