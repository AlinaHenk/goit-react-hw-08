import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { useId } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./RegisterForm.module.css";

export default function RegisterForm() {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const nameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(register(values))
      .unwrap()
      .then(() => {
        console.log("register success");
      })
      .catch(() => {
        console.log("register error");
      });
    actions.resetForm();
  };

  const RegisterSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().required("Required"),
    password: Yup.string()
      .min(8, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  return (
    <Formik
      onSubmit={handleSubmit}
      validationSchema={RegisterSchema}
      initialValues={initialValues}
    >
      <Form className={css.form}>
        <label htmlFor={nameFieldId} className={css.label}>
          Username
          <Field type="text" name="name" id={nameFieldId} />
          <ErrorMessage className={css.error} name="name" component="span" />
        </label>
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
