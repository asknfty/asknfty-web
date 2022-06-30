import React from 'react'
import { CheckboxGroupStyled } from './styled'

const CheckboxGroup = ({ options, onChange, ...rest }) => {
  return (
    <CheckboxGroupStyled options={options} onChange={onChange} {...rest} />
  )
}

export default CheckboxGroup