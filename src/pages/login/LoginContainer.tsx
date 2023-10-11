import { connect } from "react-redux";
import { StateType } from "../../store-redux/redux-store";
import { setHeaderTitle } from "../../app/app-reducer";
import { Login } from "./Login";


const mapStateToProps = (state: StateType): mapStatePropsType => {
  return {
	isLogin: state.authData.isLogin
  };
};
export const LoginContainer = connect(mapStateToProps, { setHeaderTitle })(Login);


//types
type mapStatePropsType = {
	isLogin: boolean
};
type mapDispatchPropsPropsType = {
    
};
export type LoginPropsType = mapStatePropsType & mapDispatchPropsPropsType;
