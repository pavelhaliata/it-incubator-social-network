import { Formik, Field, Form, ErrorMessage, FormikProps, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import {LoginDataType} from "api/social-network-api";
import style from "./login.module.scss"
import { LoginPropsType } from './LoginContainer';

type PropsType = {
    loginAsync: (data: LoginDataType, submitProps: FormikHelpers<LoginFormValues>) => void
}

export interface LoginFormValues {
	email: string
	password: string
	rememberMe: boolean
}

export const Login = (props: PropsType) => {

const initialValues: LoginFormValues  = {email: '', password: '', rememberMe: false}

    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
            <Formik
				initialValues={initialValues}
				validationSchema={Yup.object({
					email: Yup.string().email('Invalid email address').required('Required'),
					password: Yup.string().required('Required')
				})}
				onSubmit={ (values, submitProps) => {
					props.loginAsync(values, submitProps)
				}}
				>
					{(props: FormikProps<LoginFormValues>)=>(
						<Form style={{display: 'flex', flexDirection: 'column', gap: '5px', maxWidth: '450px', width: '100%'}}>
						
							<label htmlFor="email">Email Address</label>
							<Field name="email" type="email" id="email" placeholder="Email@" style={{padding: '5px'}}/>
							<span className={style.error}><ErrorMessage name="email" /></span>
							
							<label htmlFor="password">Password</label>
							<Field name="password" type="password" id="password" placeholder="Password" style={{padding: '5px'}}/>
							<span className={style.error}><ErrorMessage name="password" /></span>

							<div style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
								<Field name="rememberMe" type="checkbox" id="rememberMe"/>
								<label htmlFor="rememberMe"> Remember Me</label>
								<button type="submit" style={{padding: '5px 10px', marginLeft: 'auto',}}>Sign In</button>
							</div>

							<div style={{textAlign: 'center', height: '20px'}}>{props.status && <span style={{color: 'red'}}>{props.status}</span>}</div>
						</Form>
						
					)}
				
    		</Formik>
        </div>
    );
}
