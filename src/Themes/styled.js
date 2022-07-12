import styled from 'styled-components'

export const WrapperCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const BoxWrapper = styled.div`
  /* border: 1px solid ${({ theme }) => theme.bd_grey_dark}; */
  background: ${({ theme }) => theme.white};
  width: 100%;
  height: 100%;

  &.no__border__bottom {
    border-bottom: none;
  }
`
