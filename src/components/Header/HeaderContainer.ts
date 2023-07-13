import { connect } from "react-redux";
import { Dispatch } from "redux";
import { StateType } from "../../redux/redux-store";
import { Header } from "./Header";



type mapStatePropsType = {
	headerTitle: string
}
type mapDispatchPropsType = {

}
export type HeaderPropsType = mapStatePropsType & mapDispatchPropsType

const mapStateToProps = (state: StateType ): mapStatePropsType => {
	return {
	  headerTitle: state.app.headerTitle
	}
  };
  const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
	return {
	  
	};
  };
  export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);
  