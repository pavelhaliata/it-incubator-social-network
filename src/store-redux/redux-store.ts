import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import thunk, { ThunkAction } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { MainPageActionsType, profilePageReducer } from "./ProfilePage_reducer";
import { BlogPageActionsType, blogPageReducer } from "./blogPage_reducer";
import { WeatherActionsType, weatherPageReducer } from "./weatherPage_reducer";
import { inputValueReducer } from "./inputComponent_reducer";
import { AppActionType, appReducer } from "../app/app-reducer";
import { AuthActionsType, authReducer } from "./auth_reducer";
import { ChatActionsType, chatReducer } from "./chat_reducer";

const rootReducer = combineReducers({
  app: appReducer,
  authData: authReducer,
  inputValueComponent: inputValueReducer,
  blogPage: blogPageReducer,
  profilePage: profilePageReducer,
  weatherPage: weatherPageReducer,
  chat: chatReducer,
});
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;

//types
export type AppRootState = ReturnType<typeof rootReducer>;
type ApplicationActionsType =
  | AppActionType
  | MainPageActionsType
  | AuthActionsType
  | BlogPageActionsType
  | WeatherActionsType
  | ChatActionsType;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppRootState,
  unknown,
  ApplicationActionsType
>;

//@ts-ignore
window.store = store;
