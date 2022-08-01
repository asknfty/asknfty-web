import React from 'react'
import styled from 'styled-components'
import Container from '../container'
import { Image, TextPrimary, LinkIcon } from '..'
import { MEDIA_WIDTHS } from 'Themes'
import { LOGO_COMPANY, LOGO_FOOTER } from 'Assets'
import { Col, Row } from 'antd'

const FooterBox = styled.div`
    background: ${({ theme }) => theme.secondary};
    .footer {
        min-height: 48px;
        position: relative;
        .link {
            display: inherit;
            justify-content: flex-end;
            .link__page {
                color: ${({ theme }) => theme.black_text};
                &:first-child {
                    margin-right: 32px;
                }
            }
        }
        .logo {
            text-align: center;
        }
    }
    @media screen and (max-width: ${MEDIA_WIDTHS.upToSmall}px) {
        .footer {
            text-align: center;
            padding-top: 24px;
            padding-bottom: 24px;
            .link {
                justify-content: center;
                margin-top: 24px;
                margin-bottom: 24px;
                .link__page {
                    p {
                        font-size: 16px;
                        line-height: 22px;
                    }
                }
            }
            .info {
                order: 2;
            }
            .info {
               p {
                font-size: 16px;
                line-height: 22px;
               }
            }
        }
    }
`

const Link = styled.div`
`

const Footer = ({ ...rest }) => {
    return (
        <FooterBox {...rest}>
            <Container>
                <Row align='middle' justify='space-between' className="footer">
                    <Col span={24} md={8} xl={8} className="info">
                        <TextPrimary fontSize="size_16">
                            All rights servered
                        </TextPrimary>
                    </Col>
                    <Col span={24} md={8} xl={8} className="logo">
                        <LinkIcon className="logo__company" src={LOGO_FOOTER} to="/" />
                    </Col>
                    <Col span={24} md={8} xl={8} className="link">
                        <a target="_blank" href="https://docs.google.com/document/d/1ofzaQyN7w3VOrJ40d4aKxq6REvGUesZCbd5iBWcudWk/edit?usp=sharing" className="link__page">
                            <TextPrimary fontSize="size_16">Privacy Policy</TextPrimary>
                        </a>
                        <a target="_blank" href="https://docs.google.com/document/d/1WH8B8jf7bOMTRTVLRIirZVgrnmlNZha_vDLYO3ZYxqY/edit?usp=sharing" className="link__page">
                            <TextPrimary fontSize="size_16">Terms of Service</TextPrimary>
                        </a>
                    </Col>
                </Row>
            </Container>
        </FooterBox>
    )
}

export default Footer
