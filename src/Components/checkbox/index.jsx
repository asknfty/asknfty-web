import React from 'react'
import { CheckboxStyled } from './styled'

const CheckBox = ({ label, ...rest }) => {
  return (
    <CheckboxStyled {...rest}>
      {label}
    </CheckboxStyled>
  )
}

export default CheckBox