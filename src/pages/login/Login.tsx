import { Formik, Field, Form, ErrorMessage, FormikProps } from 'formik';
import * as Yup from 'yup';
import {LoginDataType} from "api/social-network-api";
import style from "./login.module.scss"

type PropsType = {
    loginAsync: (data: LoginDataType) => void
}


export const Login = (props: PropsType) => {

    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
            <Formik
				initialValues={{ email: '', password: '', rememberMe: false}}
				validationSchema={Yup.object({
					email: Yup.string().email('Invalid email address').required('Required'),
					password: Yup.string().required('Required')
				})}
				onSubmit={(values) => {
					props.loginAsync(values)
				}}
				>
				<Form style={{display: 'flex', flexDirection: 'column', gap: '15px', width: '300px'}}>
					
					<label htmlFor="email">Email Address</label>
					<Field name="email" type="email" placeholder="Email@" style={{padding: '5px'}}/>
					<ErrorMessage name="email" />

					<label htmlFor="password">Password</label>
					<Field name="password" type="password" placeholder="Password" style={{padding: '5px'}}/>
					<ErrorMessage name="password" className={style.error}/>

					<label htmlFor="rememberMe">Remember Me</label>
					<Field name="rememberMe" type="checkbox" />

					<button type="submit" style={{padding: '5px'}}>Sign In</button>
				</Form>
    		</Formik>
        </div>
    );
}
