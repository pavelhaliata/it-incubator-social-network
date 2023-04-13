import { connect } from "react-redux";
import { Dispatch } from "redux";
import { AppStateType } from "../../redux/redux-store";
import Header from "./Header";


type mapStatePropsType = {
	headerTitle: string
}
type mapDispatchPropsType = {

}
export type HeaderPropsType = mapStatePropsType & mapDispatchPropsType

const mapStateToProps = (state: AppStateType ): mapStatePropsType => {
	return {
	  headerTitle: state.headerComponent.headerTitle
	}
  };
  const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
	return {
	  
	};
  };
  export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);
  