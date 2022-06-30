import React from 'react'
import styled from 'styled-components'
import classNames from 'classnames'

const Div = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding-left: 16px;
  padding-right: 16px;
`

const Container = ({ children, className }) => {
  className = classNames(className, 'container')
  return (
    <Div className={className}>{children}</Div>
  )
}

export default Container
