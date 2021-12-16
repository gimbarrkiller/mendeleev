import React from "react"
import Button from "react-bootstrap/Button"
import * as yup from "yup"
import { Formik } from "formik"

const schema = yup.object({
  username: yup.string().required('Введите имя'),
  email: yup
    .string()
    .email()
    .required('Введите почту'),
  confirmEmail: yup
    .string()
    .email()
    .required()
    .oneOf([yup.ref("email"), null], "почты должны совпадать"),
})

const FormFormik = () => {
  return (
    <Formik
      validationSchema={schema}
      initialValues={{
        username: "",
        email : "",
        confirmEmail : "",
      }}
    >
      {({
        handleSubmit,
        handleChange,
        values,
        errors,
      }) => (
        <div className="SignUpForm">
          <h1 className="SignInHeading">Formik</h1>
          <form noValidate onSubmit={handleSubmit}>
              <input
                type="text"
                name="username"
                value={values.username}
                onChange={handleChange}
                placeholder="Имя"
                isInvalid={!!errors.username}
              />
              <p>
                {errors.username}
              </p>
              <input
                type="email"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
                name="email"
                isInvalid={!!errors.email}
              />
              <p>
                {errors.email}
              </p>
              <input
                type="email"
                name="confirmEmail"
                value = {values.confirmEmail}
                onChange={handleChange}
                placeholder="повторите Email"
                isInvalid={!!errors.confirmEmail}
              />
              <p>
                {errors.confirmEmail}
              </p>
            <Button variant="primary" className="SignUpButton" type="submit">
              Отправить
            </Button>
          </form>
        </div>
      )}
    </Formik>
  )
}

export default FormFormik