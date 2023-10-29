import { useFormik } from 'formik'
import style from './style.module.scss'
import { Button } from '../Button/Button'
import { updateProfilePropsType } from './UpdateProfileContainer'
import { useNavigate } from 'react-router-dom'

export type updateUserProfile = {
    aboutMe: string
    // userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    // contacts: {
    //     github: string
    //     vk: string
    //     facebook: string
    //     instagram: string
    //     twitter: string
    //     website: string
    //     youtube: string
    //     mainLink: string
    // }
}

export function UpdateProfile(props: updateProfilePropsType) {
    const navigate =  useNavigate()
    const initialValues: updateUserProfile = {
        aboutMe: '',
        // userId: props.userId,
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        // contacts: {
        //     github: '',
        //     vk: '',
        //     facebook: '',
        //     instagram: '',
        //     twitter: '',
        //     website: '',
        //     youtube: '',
        //     mainLink: ''
        // }
    }

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: (values, submitProps) => {
            submitProps.resetForm()
            console.log(values)
            props.updateUserProfileAsync(values, submitProps)
            navigate('/profile')
        }
    })
    return (
        <div className={style.wrapper}>
            <form onSubmit={formik.handleSubmit} className={style.form}>
                <label htmlFor='fullName'>full Name</label>

                <input
                    id='fullName'
                    type='text'
                    {...formik.getFieldProps('fullName')}
                    className={style.field}
                />
                <label htmlFor='lookingForAJob'>looking For A Job</label>

                <input
                    id='lookingForAJob'
                    type='checkbox'
                    {...formik.getFieldProps('lookingForAJob')}
                    className={style.field}
                />

                <label htmlFor='lookingForAJobDescription'>Job Description</label>

                <input
                    id='lookingForAJobDescription'
                    type='text'
                    {...formik.getFieldProps('lookingForAJobDescription')}
                    className={style.field}
                />

                <label htmlFor='aboutMe'>about Me</label>

                <input
                    id='aboutMe'
                    type='text'
                    {...formik.getFieldProps('aboutMe')}
                    className={style.field}
                />

                {formik.status ? <span style={{ color: 'red' }}>{formik.status}</span> : null}

                <Button type='submit' className={style.btn}>
                    Submit
                </Button>
            </form>
        </div>
    )
}
