/* eslint-disable react/prop-types */
import React, { useCallback } from 'react'
import { InputNumber } from 'antd'
import { useController, useFormContext } from 'react-hook-form'
import styled from 'styled-components'
import { FormItemStyled } from './styled'

const WrapperLabel = styled.div`
	width: 100%;
	font-size: 13px;
`

const FormInputNumber = ({
  label,
  name,
  rules,
  defaultValue = '',
  wrapperProps,
  maxLength = null,
  isHideButtonHandle = false,
  isTypingDot = true,
  ...rest
}) => {
  const { control } = useFormContext()
  const {
    field: { onChange, value },
    fieldState: { error }
  } = useController({ name, control, rules, defaultValue })

  const handleKeyDown = useCallback((e) => {
    if (!((e.keyCode > 95 && e.keyCode < 106)
			|| (e.keyCode > 47 && e.keyCode < 58)
      || (e.keyCode === 190 && isTypingDot)
      || e.keyCode === 8
    )) {
      e.preventDefault()
    }
    if (maxLength) {
      if (e.target.value.length === maxLength && !(e.keyCode === 8)) {
        e.preventDefault()
      }
    }
  }, [maxLength, isTypingDot])

  return (
    <FormItemStyled
      {...wrapperProps}
      label={label && <WrapperLabel>{label}</WrapperLabel>}
      validateStatus={error ? 'error' : ''}
      help={error?.message}
      isHideButtonHandle={isHideButtonHandle}
    >
      <div className="input-number">
        <InputNumber
          type="number"
          onChange={onChange}
          onKeyDown={handleKeyDown}
          value={value}
          min={0}
          {...rest}
        />
      </div>
    </FormItemStyled>
  )
}

export default FormInputNumber
