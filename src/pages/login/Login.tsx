import {Component} from 'react';
import { Navigate } from 'react-router-dom';
import { LoginPropsType } from './LoginContainer';


export class Login extends Component<LoginPropsType> {

	render() {
		if(this.props.isLogin){
			return(
				 <Navigate to='/'/>
			  )
		  }
		return (
			<div>
				Login, pls, enter your emil and pass
			</div>
		);
	}
}

