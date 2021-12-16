import * as yup from 'yup'

const SignupSchema = yup.object().shape({
  email: yup.string()
    .required('Обязательное поле')
    .email('Не является Email`ом'),
  password: yup.string()
    .required('Обязательное поле')
    .min(2, 'Слишком коротко!')
    .max(50, 'Слишком длинно'),
})

export default SignupSchema