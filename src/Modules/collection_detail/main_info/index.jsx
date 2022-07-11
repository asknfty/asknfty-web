import { UserOutlined } from '@ant-design/icons'
import { Avatar, Tabs } from 'antd'
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

const MainInfo = () => {
  return (
    <BoxWrapper>
      <ImageWrapper>
        <Image height={320} />
        <Avatar className="avatar" size={160} icon={<UserOutlined />} />
      </ImageWrapper>
      <MainInfoWrapper>
        <div className="main__alert">
          <ButtonImage imageButton={BG_BUTTON_TURN_ON_ALERT} text="Turn on alert" fontSize="size_20" />
        </div>
        <div className="main__content">
          <div className="main__content__left">
            <TextNormal
              className="main__content__left__name"
              color="text_primary"
              fontSize="size_32"
              fontWeight="fw_700"
            >
              Omniscience
            </TextNormal>
            <div className="main__content__left__social">
              <div className="main__content__left__social__item">
                <Image src={ICON_EYE} />
                <span>1.298</span>
              </div>
              <div className="main__content__left__social__item">
                <Image src={ICON_HEART} />
                <span>1.298</span>
              </div>
            </div>
            <div className="main__content__left__create">
              <TextNormal color="bd_grey_dark">Created by</TextNormal>
              <div className="main__content__left__create__user">
                <Avatar size={22} icon={<UserOutlined />} />
                <TextNormal>bterwiliger</TextNormal>
              </div>
              <span className="line" />
              <TextNormal color="bd_active_red">0x52...355b</TextNormal>
            </div>
          </div>
          <div className="main__content__right">
            <div className="main__content__right__item">
              <div className="icon">
                <Image src={ICON_INCLUDE} />
              </div>
              <div className="data">
                <TextNormal color="grey_text" fontSize="size_16">
                  Include
                </TextNormal>
                <TextNormal color="text_primary" fontWeight="fw_700">
                  1456 items
                </TextNormal>
              </div>
            </div>
            <div className="main__content__right__item">
              <div className="icon">
                <Image src={ICON_ON_EXCHANGE} />
              </div>
              <div className="data">
                <TextNormal color="grey_text" fontSize="size_16">
                  On Exchange
                </TextNormal>
                <TextNormal color="text_primary" fontWeight="fw_700">
                  1456 items
                </TextNormal>
              </div>
            </div>
            <div className="main__content__right__item">
              <div className="icon">
                <Image src={ICON_FLOOR_PRICE} />
              </div>
              <div className="data">
                <TextNormal color="grey_text" fontSize="size_16">
                  Floor Price
                </TextNormal>
                <TextNormal color="text_primary" fontWeight="fw_700">
                  1456 items
                </TextNormal>
              </div>
            </div>
            <div className="main__content__right__item">
              <div className="icon">
                <Image src={ICON_VOLUME_TRADED} />
              </div>
              <div className="data">
                <TextNormal color="grey_text" fontSize="size_16">
                  Volume Traded
                </TextNormal>
                <TextNormal color="text_primary" fontWeight="fw_700">
                  1456 items
                </TextNormal>
              </div>
            </div>
          </div>
        </div>
      </MainInfoWrapper>
    </BoxWrapper>
  )
}

export default MainInfo
