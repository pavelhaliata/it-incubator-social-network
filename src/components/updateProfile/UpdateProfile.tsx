import { Component } from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { UserProfileType } from "api/social-network-api";
import style from "./style.module.scss"
import {Button} from "../Button/Button";
import {updateProfilePropsType} from "./UpdateProfileContainer";

type FormValues = UserProfileType

export class UpdateProfile extends Component<updateProfilePropsType> {

	initialValues: FormValues = {aboutMe: '',fullName: '', lookingForAJob: false, lookingForAJobDescription: '', photos: {large: '', small: ''}, userId: 29259,
	contacts: {facebook: '', github: '', instagram: '', mainLink: '', twitter: '', vk: '', website: '', youtube: ''}}

	
	render() {
		return (
			<div className={style.wrapper}>
				<Formik
					initialValues={this.initialValues}
					validationSchema={Yup.object({
						fullName: Yup.string().required(),
						lookingForAJobDescription: Yup.string().required(),
						aboutMe: Yup.string().required(),
					})}
					onSubmit={(values, { setSubmitting }) => {
						this.props.updateUserProfileAsync(values)
						setTimeout(() => {
							alert(JSON.stringify(values, null, 2));
							setSubmitting(false);
						}, 400);
					}}
				>
					<Form className={style.form}>
						<label htmlFor="fullName">fullName</label>
						<Field name="fullName" type="text" className={style.field}/>
						<ErrorMessage name="fullName" />

						<label htmlFor="lookingForAJobDescription">lookingForAJobDescription</label>
						<Field name="lookingForAJobDescription" type="text" className={style.field}/>
						<ErrorMessage name="lookingForAJobDescription" />

						<label htmlFor="aboutMe">aboutMe</label>
						<Field name="aboutMe" type="text" className={style.field}/>
						<ErrorMessage name="aboutMe" />

						<Button type="submit" className={style.btn}>Submit</Button>
					</Form>
				</Formik>
			</div>

		);
	}
}

