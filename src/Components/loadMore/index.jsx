import React from 'react'
import { Loader, Wrapper } from './styled'

const LoadMore = ({ margin, ...rest }) => (
  <Wrapper margin={margin} {...rest}>
    <Loader />
  </Wrapper>
)

export default LoadMore
