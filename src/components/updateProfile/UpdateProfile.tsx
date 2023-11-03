import { Field, Form, Formik, FormikProps } from 'formik'
import style from './style.module.scss'
import { Button } from '../Button/Button'
import { updateProfilePropsType } from './UpdateProfileContainer'
import { useNavigate } from 'react-router-dom'
import { UpdateUserProfileType } from 'api/social-network-api'

export function UpdateProfile(props: updateProfilePropsType) {
    const navigate = useNavigate()
    const initialValues: UpdateUserProfileType = {
        aboutMe: props.userProfileData.aboutMe,
        userId: props.userId,
        lookingForAJob: props.userProfileData.lookingForAJob,
        lookingForAJobDescription: props.userProfileData.lookingForAJobDescription,
        fullName: props.userProfileData.fullName,
        contacts: {
            github: props.userProfileData.contacts.github,
            vk: props.userProfileData.contacts.vk,
            facebook: props.userProfileData.contacts.facebook,
            instagram: props.userProfileData.contacts.instagram,
            twitter: props.userProfileData.contacts.twitter,
            website: props.userProfileData.contacts.website,
            youtube: props.userProfileData.contacts.youtube,
            mainLink: props.userProfileData.contacts.mainLink,
        },
    }

    const contacts: { [index: string]: any } = props.userProfileData.contacts

    return (
        <div className={style.wrapper}>
            <Formik
                initialValues={initialValues}
                onSubmit={async (values, submitProps) => {
                    try {
                        await props.updateUserProfileAsync(values, submitProps)
                        navigate('/profile')
                    } catch (error) {
                        submitProps.setStatus(error)
                    }
                }}
            >
                {(props: FormikProps<UpdateUserProfileType>) => (
                    <Form className={style.form}>
                        <label htmlFor='fullName'>full Name</label>
                        <Field id='fullName' type='text' name='fullName' className={style.field} />

                        <div style={{ display: 'flex', gap: '10px' }}>
                            <Field id='lookingForAJob' type='checkbox' name='lookingForAJob' className={style.field} />
                            <label htmlFor='lookingForAJob'>looking For A Job</label>
                        </div>

                        <label htmlFor='lookingForAJobDescription'>Job Description</label>
                        <Field
                            id='lookingForAJobDescription'
                            type='text'
                            name='lookingForAJobDescription'
                            className={style.field}
                        />

                        <label htmlFor='aboutMe'>about Me</label>
                        <Field id='aboutMe' type='text' name='aboutMe' className={style.field} />

                        {Object.keys(contacts).map(key => {
                            return <Contacts key={key} contactTitle={key} />
                        })}

                        <ul>
                            {props.status &&
                                props.status.map((item: string, index: number) => (
                                    <li style={{ color: 'red' }} key={index}>
                                        {item}
                                    </li>
                                ))}
                        </ul>
                        <Button type='submit'>Submit</Button>
                        <Button
                            onClick={() => {
                                navigate('/profile')
                            }}
                        >
                            cancel
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
            <Field id={contactTitle} type={contactTitle} name={`contacts.${contactTitle}`} className={style.field} />
        </>
    )
}
