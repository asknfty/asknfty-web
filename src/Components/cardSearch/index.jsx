import React from 'react'
import { Wrapper } from './styled'
import { TextNormal, Image } from 'Components'
import { IMG_DEFAULT } from 'Assets'
import { Col } from 'antd'

const CardSearch = ({ url, name, title }) => {
    return (
        <Col span={12} xl={6} md={8}>
            <Wrapper>
                <div className="wrap-content">
                    <a href="/" >
                        <div className="card">
                            {url ?
                                <div className="card-img" style={{ backgroundImage: `url(${url})` }}></div>
                                :
                                <Image src={IMG_DEFAULT} className="card-img" alt="default" />}
                            <TextNormal fontWeight='fw_700' fontSize='size_18' lineHeight="24px" color="text_grey" className="card-name">{name || ''}</TextNormal>
                            <div className="card-title">
                                <TextNormal fontSize='size_16' color="title_grey" lineHeight="24px">{title || ''}</TextNormal>
                            </div>
                        </div>
                    </a>
                </div>
            </Wrapper>
        </Col >
    )
}

export default CardSearch