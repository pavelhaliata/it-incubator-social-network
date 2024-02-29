import {
  ErrorMessage,
  Field,
  Form,
  Formik,
  FormikHelpers,
  FormikProps,
} from "formik";
import * as Yup from "yup";
import { LoginDataType } from "api/social-network-api";
import style from "./login.module.scss";
import { Button } from "components/Button/Button";

type PropsType = {
  loginAsync: (
    data: LoginDataType,
    submitProps: FormikHelpers<LoginFormValues>
  ) => void;
  captchaUrl: null | string;
};

export interface LoginFormValues {
  email: string;
  password: string;
  rememberMe: boolean;
  captcha?: string;
}

export const Login = ({ captchaUrl, loginAsync }: PropsType) => {
  const initialValues: LoginFormValues = {
    email: "",
    password: "",
    rememberMe: false,
    captcha: "",
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password: Yup.string().required("Required"),
        })}
        onSubmit={(values, submitProps) => {
          loginAsync(values, submitProps);
        }}
      >
        {(props: FormikProps<LoginFormValues>) => (
          <Form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              maxWidth: "450px",
              width: "100%",
            }}
          >
            <div>
              <p>
                To log in get registered{" "}
                <a
                  href="https://social-network.samuraijs.com/"
                  target="_blank"
                  className={style.link}
                >
                  <strong>here</strong>
                </a>{" "}
                or use common test account credentials:
              </p>
              <p>
                <strong>Email:</strong> free@samuraijs.com{" "}
              </p>
              <p>
                <strong>Password:</strong> free
              </p>
            </div>
            <h1>Sign In</h1>
            <label htmlFor="email">Email Address</label>
            <Field
              name="email"
              type="email"
              id="email"
              placeholder="Email@*"
              style={{ padding: "5px" }}
            />
            <span className={style.error}>
              <ErrorMessage name="email" />
            </span>

            <label htmlFor="password">Password</label>
            <Field
              name="password"
              type="password"
              id="password"
              placeholder="Password*"
              style={{ padding: "5px" }}
            />
            <span className={style.error}>
              <ErrorMessage name="password" />
            </span>

            <div
              style={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
              }}
            >
              <Field name="rememberMe" type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe"> Remember Me</label>
              <Button
                label="Sign In"
                type="submit"
                style={{
                  padding: "5px 10px",
                  marginLeft: "auto",
                }}
              />
            </div>

            <div style={{ textAlign: "center", height: "20px" }}>
              {props.status && (
                <span style={{ color: "red" }}>{props.status}</span>
              )}
            </div>
            {captchaUrl && (
              <div
                style={{
                  marginTop: "15px",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Field
                  name="captcha"
                  type="input"
                  placeholder="captcha*"
                  style={{ padding: "5px", width: "100%" }}
                />
                <img style={{ maxWidth: "300px" }} src={captchaUrl} />
                <span>please, enter the captcha</span>
              </div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};
