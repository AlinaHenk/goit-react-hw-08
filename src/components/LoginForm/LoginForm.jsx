import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import { useId } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./LoginForm.module.css";

export default function LoginForm() {
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
  };
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values))
      .unwrap()
      .then(() => {
        console.log("login success");
      })
      .catch(() => {
        console.log("login error");
      });
    actions.resetForm();
  };

  const LoginSchema = Yup.object().shape({
    email: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
  });

  return (
    <Formik
      onSubmit={handleSubmit}
      validationSchema={LoginSchema}
      initialValues={initialValues}
    >
      <Form className={css.form}>
        <label htmlFor={emailFieldId} className={css.label}>
          Email
          <Field type="email" name="email" id={emailFieldId} />
          <ErrorMessage className={css.error} name="email" component="span" />
        </label>
        <label htmlFor={passwordFieldId} className={css.label}>
          Password
          <Field type="password" name="password" id={passwordFieldId} />
          <ErrorMessage
            className={css.error}
            name="password"
            component="span"
          />
        </label>
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
}
