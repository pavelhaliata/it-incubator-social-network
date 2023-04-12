import { connect } from "react-redux";
import { StateType } from "../../redux/redux-store";
import Header from "./Header";

export{}


const mapStateToProps = (state: StateType ) => {
	return {
	  headerTitle: state.headerTitle.headerTitle
	}
  };
  const mapDispatchToProps = (dispatch: any) => {
	return {
	  
	};
  };
  export const HeaderContainer = connect(mapStateToProps)(Header);
  