import { React, useState } from 'react'
import { notification, Spin } from 'antd'
import { parse, stringfiy } from 'qs'
import styled from 'styled-components'

import Approutes from './Routes'
import { store } from '.'
import { BrowserRouter } from 'react-router-dom'
import 'antd/dist/antd.css'

const LoadingStyled = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`


const App = () => {
    const [loading, setLoading] = useState(true)

    if (!loading) {
        return (
            <LoadingStyled>
                <Spin size="large" />
            </LoadingStyled>
        )
    }

    return (
        <>
            <Approutes />
        </>
    )
}

export default App