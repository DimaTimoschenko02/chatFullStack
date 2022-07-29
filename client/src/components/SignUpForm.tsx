import React, { FC, useContext } from "react";
import { Formik, Form, Field } from "formik";
import userService from "../services/UserService";
import { loginSchema, signupSchema } from "../schemas/UserSchemas";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "..";
import { observer } from "mobx-react-lite";

export const CustomForm: FC = () => {
  const navigate = useNavigate();
  const {store} = useContext(Context)
  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
          confirmPassword: "",
          name: "",
        }}
        validationSchema={signupSchema}
        onSubmit={async (values) => {
          await store.signup(values)
          navigate("/");
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="email" type="email" placeholder="email" />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <Field name="name" type="name" placeholder="name" />
            {errors.name && touched.name ? <div>{errors.name}</div> : null}
            <Field
              name="confirmPassword"
              type="password"
              placeholder="confirm"
            />
            {errors.confirmPassword && touched.confirmPassword ? (
              <div>{errors.confirmPassword}</div>
            ) : null}
            <Field name="password" type="password" placeholder="password" />
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}
            <button type="submit">Sign-up</button>
            <span>
              Already have an accoutn? <Link to="/login">Login</Link>
            </span>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default observer(CustomForm);
