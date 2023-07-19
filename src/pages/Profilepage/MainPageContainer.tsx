import { connect } from "react-redux";
import { StateType } from "../../store-redux/redux-store";
import { MainPage } from "./MainPage";
import { setHeaderTitle } from "../../app/app-reducer";

type mapStatePropsType = {};
type mapDispatchPropsPropsType = {
  setHeaderTitle: (title: string) => void;
};
export type MainPagePropsType = mapStatePropsType & mapDispatchPropsPropsType;

const mapStateToProps = (state: StateType) => {
  return {};
};

export const MainPageContainer = connect(mapStateToProps, { setHeaderTitle })(
  MainPage
);
