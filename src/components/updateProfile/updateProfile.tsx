import { Component } from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { UserProfileType } from "api/social-network-api";


type FormValues = UserProfileType

export class updateProfile extends Component<any> {

	inintialValue: FormValues = {aboutMe: '',fullName: '', lookingForAJob: false, lookingForAJobDescription: '', photos: {large: '', small: ''}, userId: 0, 
	contacts: {facebook: '', github: '', instagram: '', mainLink: '', twitter: '', vk: '', website: '', youtube: ''}}

	
	render() {
		return (
			<Formik
				initialValues={this.inintialValue}
				validationSchema={Yup.object({
					fullName: Yup.string().required(),
					lookingForAJobDescription: Yup.string().required(),
					aboutMe: Yup.string().required(),
				})}
				onSubmit={(values, { setSubmitting }) => {
					setTimeout(() => {
					alert(JSON.stringify(values, null, 2));
					setSubmitting(false);
					}, 400);
				}}
				>
				<Form>
					<label htmlFor="fullName">fullName</label>
					<Field name="fullName" type="text" />
					<ErrorMessage name="fullName" />
			
					<label htmlFor="lookingForAJobDescription">lookingForAJobDescription</label>
					<Field name="lookingForAJobDescription" type="text" />
					<ErrorMessage name="lookingForAJobDescription" />
			
					<label htmlFor="aboutMe">aboutMe</label>
					<Field name="aboutMe" type="text" />
					<ErrorMessage name="aboutMe" />
			
					<button type="submit">Submit</button>
				</Form>
     </Formik>
		);
	}
}

