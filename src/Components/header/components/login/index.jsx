import React from 'react'
import { TextNormal, Image } from 'Components'
import styled from 'styled-components'
import { AVATAR_DEFAULT, SUB_LOGIN } from 'Assets'

const Wrapper = styled.div`
    margin-left: 32px;
    margin-right: 32px;
    cursor: pointer;
    position: relative;
    .login__text {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .wrap-avatar {
        border-radius: 50%;
        background: white;
        width: 40px;
        overflow: hidden;
        margin-right: 8px;
    }
`

const Login = ({ authenticated, userAvatar, userName }) => {
    if (authenticated) {
        return (
            <Wrapper style={{ display: 'flex', alignItems: 'center' }}>
                <div className="wrap-avatar">
                    <Image
                        className="avatar-image"
                        src={AVATAR_DEFAULT}
                        srcDefault={AVATAR_DEFAULT}
                        alt="avatar_img"
                    />
                </div>
                <TextNormal color='white'>{userName || 'nam nguyen'}</TextNormal>
            </Wrapper>
        )
    }
    return (
        <Wrapper>
            <Image src={SUB_LOGIN} alt='' />
            <TextNormal color="white" className="login__text">Login</TextNormal>
        </Wrapper>
    )
}

export default Login