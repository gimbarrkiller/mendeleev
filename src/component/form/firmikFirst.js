import React, {useState} from 'react'
import {ErrorMessage, Field, Form, Formik} from 'formik'

import SignupSchema from './yup'
import axios from 'axios'
import {get} from 'lodash'

const FormikFirst = () => {
  const [submittingStatus, setSubmittingStatus] = useState(false)
  const [errorBack, setErrorBack] = useState()

  const field = get(errorBack, 'field')
  const message = get(errorBack, 'message')

  return (
    <Formik
      initialValues={{
      email: '',
      password: '',
    }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        setErrorBack(null)
        if (submittingStatus) {
          return
        }
        setSubmittingStatus(true)
        axios
          .post('http://localhost:8000/auth/signUp', {email: values.email, password: values.password})
          .then((res) => {
            setSubmittingStatus(false)
            setErrorBack(get(res, 'data'))
            console.log(res)
          })
          .catch((err) => {
            console.log(err)
            setErrorBack(get(err, 'response.data'))
            setSubmittingStatus(false)
          })
      }}
    >
      {({ errors, touched, handleChange }) => (
        <Form>
          <Field
            type="text"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          /><br />
          <ErrorMessage name="email" /><br />
          {field === 'email' && <div>{message}</div>}
          <Field
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          /><br />
          <ErrorMessage name="password" /><br />
          {field === 'password' && <div>{message}</div>}
          <button type="submit">
            Отправить
          </button>
          {field === 'ok' && <div>{message}</div>}
        </Form>
      )}
    </Formik>
  )
}

export default FormikFirst
