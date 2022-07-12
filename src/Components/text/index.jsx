/* eslint-disable react/prop-types */
import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { MEDIA_WIDTHS } from 'Themes'
import { getFontSize } from 'Utils'

const Wrapper = styled.p`
  color: ${({ color, theme }) => theme[color]};
  font-weight: ${({ fontWeight, theme }) => theme[fontWeight] || '400'};
  font-size: ${({ fontSize }) => getFontSize(fontSize) || '20px'};
  max-width: ${({ maxWidth }) => maxWidth || '100%'};
  line-height: ${({ lineHeight }) => lineHeight || '22px'};
  padding: 0;
  margin: 0;
  margin-bottom: ${({ marginBottom }) => marginBottom ? `${marginBottom}px` : 0 };
  margin-top: ${({ marginTop }) => marginTop ? `${marginTop}px` : 0 };
  text-align: ${({ textAlign }) => textAlign && 'center'};
  @media screen and (max-width: ${MEDIA_WIDTHS.upToLarge}px) {
    font-size: ${({ fontSize }) => getFontSize(fontSize, MEDIA_WIDTHS.upToLarge) || '14px'};
  }
  @media screen and (max-width: ${MEDIA_WIDTHS.upToMedium}px) {
    font-size: ${({ fontSize }) => getFontSize(fontSize, MEDIA_WIDTHS.upToMedium) || '14px'};
  }
  @media screen and (max-width: ${MEDIA_WIDTHS.upToExtraSmall}px) {
    font-size: ${({ fontSize }) => getFontSize(fontSize, MEDIA_WIDTHS.upToExtraSmall) || '14px'};
  }
`
const CategoryWrapper = styled.span`
  color: ${({ color, theme }) => theme[color]};
  font-weight: ${({ fontWeight, theme }) => theme[fontWeight] || '400'};
  font-size: ${({ fontSize, theme }) => theme[fontSize] || '14px'};
  padding: 0;
  margin: 0;
`

export const TextPrimary = forwardRef(
  ({ fontSize = 'size_20', fontWeight = 'fw400', size, ...rest }, ref) => (
    <Wrapper
      color="text_primary"
      fontSize={fontSize}
      size={size}
      fontWeight={fontWeight}
      {...rest}
      ref={ref}
    />
  )
)

export const TextSecondary = ({ fontSize = 'size_14', fontWeight = 'fw400', ...rest }) => (
  <Wrapper color="text_secondary" fontSize={fontSize} fontWeight={fontWeight} {...rest} />
)

export const TextNormal = ({
  fontSize = 'size_20',
  fontWeight = 'fw400',
  color = 'text_primary',
  maxWidth = '100%',
  lineHeight,
  marginTop = 0,
  marginBottom = 0,
  textAlign = false,
  ...rest
}) => (
  <Wrapper
    color={color}
    lineHeight={lineHeight}
    maxWidth={maxWidth}
    fontSize={fontSize}
    fontWeight={fontWeight}
    textAlign={textAlign}
    marginBottom={marginBottom}
    marginTop={marginTop}
    {...rest}
  />
)

export const TextSocial = ({ fontSize = 'size_16', fontWeight = 'fw400', color = 'white', ...rest }) => (
  <Wrapper color={color} fontSize={fontSize} fontWeight={fontWeight} {...rest} />
)

export const TextCategory = ({ fontSize = 'size_16', fontWeight = 'fw400', color = 'white', ...rest }) => (
  <CategoryWrapper color={color} fontSize={fontSize} fontWeight={fontWeight} {...rest} />
)

export const TextError = ({ fontSize = 'size_14', fontWeight = 'fw400', ...rest }) => (
  <Wrapper color="error" fontSize={fontSize} fontWeight={fontWeight} {...rest} />
)
