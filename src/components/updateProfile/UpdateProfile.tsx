import { Component } from "react";
import { Formik, Field, Form, ErrorMessage, FormikProps, useFormik } from 'formik';
import * as Yup from 'yup';
import { UserProfileType } from "api/social-network-api";
import style from "./style.module.scss"
import {Button} from "../Button/Button";
import {updateProfilePropsType} from "./UpdateProfileContainer";

export type updateUserProfile = {
	aboutMe: string
	userId: number
	lookingForAJob: boolean
	lookingForAJobDescription: string
	fullName: string
	contacts:{ 
		github: string
		vk: string
		facebook: string
		instagram: string
		twitter: string
		website: string
		youtube: string
		mainLink: string
	}
}

export const UpdateProfile = (props: updateProfilePropsType) => {

	const initialValues: updateUserProfile = {aboutMe:'', userId: props.userId, lookingForAJob: false, lookingForAJobDescription: '', fullName: '',
	contacts: {github: '', vk: '', facebook: '', instagram: '', twitter: '', website: '', youtube: '', mainLink: ''}}

	const formik = useFormik({
		initialValues: initialValues,
		onSubmit: (values, submitProps) => {
		//   alert(JSON.stringify(values, null, 2));
		  props.updateUserProfileAsync(values, submitProps.setStatus)
			submitProps.resetForm()
		},
	  });
	  
	  let apiErrors
	  if(formik.status) {
		  console.log(formik.status)
		  apiErrors = formik.status.map((item: string, index: string) => <p key={index}>{item}</p>)
	  }

		return (
			<div className={style.wrapper}>
				<form onSubmit={formik.handleSubmit} className={style.form}>
					<label htmlFor="fullName">full Name</label>
					<input id="fullName" type="text" {...formik.getFieldProps('fullName')} className={style.field}/>
					{/* <ErrorMessage name="fullName" /> */}
					{apiErrors}
					<label htmlFor="lookingForAJobDescription">looking For A Job Description</label>
					<input id="lookingForAJobDescription" type="text" {...formik.getFieldProps('lookingForAJobDescription')} className={style.field}/>
					{/* <ErrorMessage name="lookingForAJobDescription" /> */}

					<label htmlFor="aboutMe">about Me</label>
					<input id="aboutMe" type="text" {...formik.getFieldProps('aboutMe')} className={style.field}/>
					{/* <ErrorMessage name="aboutMe" /> */}
		
					<Button type="submit" className={style.btn}>Submit</Button>
				</form>
			</div>

		);
	
}

