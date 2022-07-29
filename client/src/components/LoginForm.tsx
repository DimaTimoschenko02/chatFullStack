import React, { FC, useContext } from "react";
import { Formik, Form, Field } from "formik";
import userService from "../services/UserService";
import { loginSchema } from "../schemas/UserSchemas";
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
        }}
        validationSchema={loginSchema}
        onSubmit={async (values) => {
          await store.login(values)
          navigate("/");
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="email" type="email" placeholder="email" />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <Field name="password" type="password" placeholder="password" />
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}
            <button type="submit">LOGIN</button>
            <span>
              Dont have an accoutn <Link to="/sign-up">Sign-up</Link>
            </span>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default observer(CustomForm);
