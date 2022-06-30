import { Spin } from 'antd'
import React from 'react'
import { WrapperCenter } from 'Themes/styled'

const LoadingScreen = () => (
    <WrapperCenter>
        <Spin size="large" />
    </WrapperCenter>
)

export default LoadingScreen
