import React from 'react'
import { useTranslation } from 'react-i18next'

import FormikFirst from './firmikFirst'
import HookForm from './hookForm'
import RamilForm from './ramilForm'

const Form = () => {
  const { t } = useTranslation()
  return(
    <div>
      <h1>{t('form.reusableForms')}</h1>
      <h2>{t('form.formik')}</h2>
      <FormikFirst />
      <h2>{t('form.hookForm')}</h2>
      <HookForm />
      <h2>{t('form.ramilForm')}</h2>
      <RamilForm />
    </div>
  )
}
export default Form