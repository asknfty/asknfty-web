import * as yup from 'yup'

export const FilterBlockSchema = () =>
  yup.object().shape({
    queries: yup
      .string()
      .trim()
      .required('Please type something')
  })
