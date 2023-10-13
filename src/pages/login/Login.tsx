import {Component} from 'react';
import { Navigate } from 'react-router-dom';
import { LoginPropsType } from './LoginContainer';
import { SignupForm } from './SignupForm';


export class Login extends Component<LoginPropsType> {

	render() {
		if(this.props.isLogin){
			debugger
			return(
				 <Navigate to='/'/>
			  )
		  }
		return (
			<div style={{margin: "0 auto", width:"800px"}}>
				<SignupForm/>
			</div>
		);
	}
}


