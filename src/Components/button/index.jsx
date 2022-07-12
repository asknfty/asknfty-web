import { Image, TextNormal } from 'Components'
import React from 'react'
import styled from 'styled-components'

const WrapperButton = styled.div`
  cursor: pointer;
  position: relative;
  .login__text {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
  }
`

const ButtonImage = ({ text, onClick, color = 'white', fontSize, fontWeight, imageButton, ...rest }) => (
  <WrapperButton onClick={onClick} {...rest}>
    <Image src={imageButton} alt="button__img" />
    <TextNormal className="login__text" color={color} fontSize={fontSize} fontWeight={fontWeight}>
      {text}
    </TextNormal>
  </WrapperButton>
)

export { ButtonImage }
