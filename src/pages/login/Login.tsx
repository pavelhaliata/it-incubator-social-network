import {useFormik} from "formik";
import {LoginDataType} from "../../api/social-network-api";

type PropsType = {
    loginAsync: (data: LoginDataType) => void
}

export const Login = (props: PropsType) => {

    const formik = useFormik({
        initialValues: {
            password: '',
            email: '',
        },
        onSubmit: values => {
            props.loginAsync(values)
        },
    });
    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
            <form onSubmit={formik.handleSubmit}
                  style={{display: 'flex', flexDirection: 'column', gap: '10px', width: '350px'}}>
                <label htmlFor="password">Password:</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
                <label htmlFor="email">Email Address:</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                <button type="submit">Enter</button>
            </form>
        </div>
    );
}



