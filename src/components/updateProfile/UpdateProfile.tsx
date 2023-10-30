import { Field, Form, Formik, FormikProps } from 'formik'
import style from './style.module.scss'
import { Button } from '../Button/Button'
import { updateProfilePropsType } from './UpdateProfileContainer'
import { useNavigate } from 'react-router-dom'

type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export type updateUserProfile = {
    aboutMe: string
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
}

export function UpdateProfile(props: updateProfilePropsType) {
    const navigate = useNavigate()
    const initialValues: updateUserProfile = {
        aboutMe: '',
        userId: props.userProfileData.userId,
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        contacts: {
            github: '',
            vk: '',
            facebook: '',
            instagram: '',
            twitter: '',
            website: '',
            youtube: '',
            mainLink: ''
        }
    }

    const contacts: { [index: string]: any } = props.userProfileData.contacts

    return (
        <div className={style.wrapper}>
            <Formik
                initialValues={initialValues}
                onSubmit={async (values, submitProps) => {
                    props.updateUserProfileAsync(values, submitProps)
                    try {
                        console.log(values)
                        // navigate('/profile')
                        submitProps.resetForm()
                    }catch (error){
                        console.error()
                    }
                }}
            >
                {(props: FormikProps<updateUserProfile>) => (
                    <Form className={style.form}>
                        <label htmlFor='fullName'>full Name</label>
                        <Field
                            id='fullName'
                            type='text'
                            name='fullName'
                            className={style.field} />

                        <label htmlFor='lookingForAJob'>looking For A Job</label>
                        <Field
                            id='lookingForAJob'
                            type='checkbox'
                            name='lookingForAJob'
                            className={style.field}
                        />

                        <label htmlFor='lookingForAJobDescription'>Job Description</label>
                        <Field
                            id='lookingForAJobDescription'
                            type='text'
                            name='lookingForAJobDescription'
                            className={style.field}
                        />

                        <label htmlFor='aboutMe'>about Me</label>
                        <Field
                            id='aboutMe'
                            type='text'
                            name='aboutMe'
                            className={style.field} />

                        {Object.keys(contacts).map(key => {
                            return <Contacts key={key} contactTitle={key} />
                        })}

                        {props.status && <span style={{ color: 'red' }}>{props.status}</span>}

                        <Button type='submit' className={style.btn}>
                            Submit
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

type ContactPropsType = {
    contactTitle: string
}

const Contacts = ({ contactTitle }: ContactPropsType) => {
    return (
        <>
            <label htmlFor={contactTitle}>{contactTitle}</label>
            <Field
                id={contactTitle}
                type={contactTitle}
                name={`contacts.${contactTitle}`}
                className={style.field} />
        </>
    )
}
