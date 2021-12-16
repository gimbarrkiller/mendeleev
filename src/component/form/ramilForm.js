import React, { useState } from 'react'
import axios from 'axios'
import { get } from 'lodash'
import {useTranslation} from 'react-i18next'

const RamilForm = ({ onSubmit }) => {
  const { t } = useTranslation()
  const [emailInputVal, setEmailInputVal] = useState('');
  const [passwordInputVal, setPasswordInputVal] = useState('');
  const [isSubmitting, setSubmittingStatus] = useState(false)
  const [errorBack, setErrorBack] = useState()

  const submitHandler = (e) => {
    e.preventDefault();
    if (isSubmitting) {
        return 
    }

    setSubmittingStatus(true);
    axios
      .post('http://localhost:8000/auth/signUp', {email: emailInputVal, password: passwordInputVal})
      .then((res) => {
        onSubmit(res)
        setSubmittingStatus(false)
      })
      .catch((err) => {
        setErrorBack(get(err, 'response.data.message'))
        setSubmittingStatus(false)
      });
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        text={emailInputVal}
        onChange={(e) => setEmailInputVal(e.target.value)}
        placeholder="email"
      />
      <input
        type="password"
        text={passwordInputVal}
        onChange={(e) => setPasswordInputVal(e.target.value)}
      />
      <button disabled={isSubmitting} type="submit">{t(`form.${isSubmitting ? 'loading' : 'send'}`)}</button>
      {errorBack && <div>{errorBack}</div>}
    </form>
  );
};

export default RamilForm;
