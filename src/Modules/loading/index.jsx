import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'
import React from 'react'
import styled from 'styled-components'

const antIcon = <LoadingOutlined style={{ fontSize: 40 }} spin />

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const LoadingScreen = () => (
  <Wrapper>
    <Spin size="large" indicator={antIcon} />
  </Wrapper>
)

export default LoadingScreen
