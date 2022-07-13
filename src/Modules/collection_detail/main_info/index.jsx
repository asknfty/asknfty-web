import { UserOutlined } from '@ant-design/icons'
import { Avatar, Tabs, Row, Col } from 'antd'
import {
  BG_BUTTON_TURN_ON_ALERT,
  ICON_EYE,
  ICON_FLOOR_PRICE,
  ICON_HEART,
  ICON_INCLUDE,
  ICON_ON_EXCHANGE,
  ICON_VOLUME_TRADED
} from 'Assets'
import { ButtonImage, TextNormal, Image } from 'Components'
import React from 'react'
import { BoxWrapper } from 'Themes'
import { ImageWrapper, MainInfoWrapper } from './styled'

const MainInfo = ({
  logoUrl,
  collectionName,
  current_number_of_items,
  collectionAddress,
  totalItems,
  crypto_currency,
  bannerUrl,
  floor_price_wei_24_h,
  volume_wei_24_h
}) => {
  const swapCurrent = (current_number_of_items > totalItems) ? totalItems : current_number_of_items
  const swapTotal = (current_number_of_items > totalItems) ? current_number_of_items : totalItems
  return (
    <BoxWrapper>
      <ImageWrapper>
        <Image className="banner-img" height={320} width="100%" style={{ backgroundImage: `url(${bannerUrl})` }} />
        <Avatar src={logoUrl} className="avatar" size={160} icon={<UserOutlined />} />
      </ImageWrapper>
      <MainInfoWrapper>
        <Row gutter={[0, 22]} justify="space-between" className="main__content">
          <Col span={24} xl={12} className="main__content__left">
            <TextNormal
              className="main__content__left__name"
              color="text_primary"
              fontSize="size_24"
              fontWeight="fw_700"
              lineHeight="32px"
            >
              {collectionName}
            </TextNormal>
            <div className="main__content__left__create">
              <TextNormal color="bd_grey_dark">Address</TextNormal>
              <span className="line" />
              <TextNormal color="bd_active_red">{collectionAddress}</TextNormal>
            </div>
          </Col>
          <Col span={24} xl={12} className="main__content__right">
            <div className="main__content__right__item">
              <div className="icon">
                <Image src={ICON_INCLUDE} />
              </div>
              <div className="data">
                <TextNormal color="title_grey" fontSize="size_16">
                  Max Total Supply
                </TextNormal>
                <TextNormal color="text_primary" fontWeight="fw_700">
                  {swapTotal} items
                </TextNormal>
              </div>
            </div>
            <div className="main__content__right__item">
              <div className="icon">
                <Image src={ICON_ON_EXCHANGE} />
              </div>
              <div className="data">
                <TextNormal color="title_grey" fontSize="size_16">
                  Total Supply
                </TextNormal>
                <TextNormal color="text_primary" fontWeight="fw_700">
                  {swapCurrent} items
                </TextNormal>
              </div>
            </div>
            <div className="main__content__right__item">
              <div className="icon">
                <Image src={ICON_FLOOR_PRICE} />
              </div>
              <div className="data">
                <TextNormal color="title_grey" fontSize="size_16">
                  Floor Price
                </TextNormal>
                <TextNormal color="text_primary" fontWeight="fw_700">
                  {floor_price_wei_24_h} {crypto_currency}
                </TextNormal>
              </div>
            </div>
            <div className="main__content__right__item">
              <div className="icon">
                <Image src={ICON_VOLUME_TRADED} />
              </div>
              <div className="data">
                <TextNormal color="title_grey" fontSize="size_16">
                  Volume Traded
                </TextNormal>
                <TextNormal color="text_primary" fontWeight="fw_700">
                  {volume_wei_24_h} {crypto_currency}
                </TextNormal>
              </div>
            </div>
          </Col>
        </Row>
      </MainInfoWrapper>
    </BoxWrapper>
  )
}

export default MainInfo
