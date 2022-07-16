import { Slider, Row, Col, Skeleton } from 'antd'
import { ICON_NFT_PRICE } from 'Assets'
import { Image, TextNormal } from 'Components'
import React from 'react'
import { BoxWrapper } from 'Themes'
import { DataRange, DesWrapper } from './styled'

const marks = {
  0: {
    label: (
      <DataRange>
        <div className="icon__crypto__price">
          <Image src={ICON_NFT_PRICE} />
        </div>
        <TextNormal color="bd_grey_dark" fontSize="size_16">
          20,650
        </TextNormal>
      </DataRange>
    )
  },
  59: {
    label: (
      <DataRange>
        <div className="icon__crypto__price">
          <Image src={ICON_NFT_PRICE} />
        </div>
        <TextNormal fontSize="size_16">20,650</TextNormal>
      </DataRange>
    )
  },
  100: {
    label: (
      <DataRange>
        <div className="icon__crypto__price">
          <Image src={ICON_NFT_PRICE} />
        </div>
        <TextNormal color="bd_grey_dark" fontSize="size_16">
          20,650
        </TextNormal>
      </DataRange>
    )
  }
}

const Description = ({ description, token_price_estimation, isLoading }) => {
  return (
    <DesWrapper>
      <Row gutter={[token_price_estimation && 40, 0]}>
        <Col span={24} xl={token_price_estimation ? 12 : 24} className="description__item">
          <BoxWrapper>
            <TextNormal fontWeight="fw_800" color="text_grey" className="description__item__title">
              Description
            </TextNormal>
            <div className="description__item__content">
              <Skeleton loading={isLoading}>
                <TextNormal lineHeight="28px" color="title_grey">
                  {description}
                </TextNormal>
              </Skeleton>
            </div>
          </BoxWrapper>
        </Col>
        {token_price_estimation && (
          <Col span={24} xl={12} className="description__item">
            <BoxWrapper>
              <TextNormal fontWeight="fw_800" color="text_grey" className="description__item__title">
                Price Estimate
              </TextNormal>
              <div className="description__item__content range">
                <Skeleton loading={isLoading}>
                  <TextNormal className="estimate" fontWeight="fw_700" color="grey_text">
                    Estimated Price Range
                  </TextNormal>
                  <Slider marks={marks} defaultValue={59} disabled />
                </Skeleton>
              </div>
            </BoxWrapper>
          </Col>
        )}
      </Row>
    </DesWrapper>
  )
}

export default Description
