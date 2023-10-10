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
			<div style={{margin: "0 auto", width:"400px", textAlign: "center", color: "orangered"}}>
				pls, enter your email and pass
			</div>
		);
	}
}

