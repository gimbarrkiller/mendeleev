import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import SignupSchema from './yup'
import axios from 'axios'
import { get } from 'lodash'
import {Form} from "formik";

const HookForm = () => {
  const [emailInputVal, setEmailInputVal] = useState("");
  const [passwordInputVal, setPasswordInputVal] = useState("");
  const [isSubmitting, setSubmittingStatus] = useState(false)
  const [errorBack, setErrorBack] = useState()

  const field = get(errorBack, 'field')
  const message = get(errorBack, 'message')
  console.log(message)
  const {
    register,
    handleSubmit,
    formState: {errors}} = useForm({
    resolver: yupResolver(SignupSchema),
  })
  const submitHandler = (e) => {
    setErrorBack(null)
    e.preventDefault()
    if (isSubmitting) {
      return
    }
    setSubmittingStatus(true);
    axios
      .post('http://localhost:8000/auth/signUp', {email: emailInputVal, password: passwordInputVal})
      .then((res) => {
        setSubmittingStatus(false)
        setErrorBack(get(res, 'data'))
      })
      .catch((err) => {
        setErrorBack(get(err, 'response.data'))
        setSubmittingStatus(false)
      })
  }

  return (
    <form
      onSubmit={handleSubmit(data => console.log(data)) && submitHandler}>
      <input
        {...register("email")}
        required
        onChange={(e) => setEmailInputVal(e.target.value)}
        placeholder="Email"
      /><br />
      {errors.email && <div>{errors.email.message}</div>}
      {field === 'email' && <div>{message}</div>}
      <input
        {...register("password")}
        required
        onChange={(e) => setPasswordInputVal(e.target.value)}
        placeholder="Password"
      /><br />
      {errors.password && <div>{errors.password.message}</div>}
      {field === 'password' && <div>{message}</div>}
      <input type="submit" />
      {field === 'ok' && <div>{message}</div>}
    </form>
  )
}

export default HookForm
