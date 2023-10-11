import { connect } from "react-redux";
import { AppRootState } from "../../store-redux/redux-store";
import { setHeaderTitle } from "../../app/app-reducer";
import { Login } from "./Login";


const mapStateToProps = (state: AppRootState): mapStatePropsType => {
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
