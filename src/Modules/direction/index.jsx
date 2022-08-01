import { Col, Input, Row } from 'antd'
import { CONTENT_SEARCH, CONTENT_TRACKER, COVALENT_RED, DATA_DIRECTION, DIRECTION_CURIOUS, DIRECTION_LINE, DIRECTION_NATIVE, DIRECTION_WALLET, GOMU, HAND_ASK, LINE_DIRECTION_MOBILE, LOOKSRARE_RED, MISSION_CONTENT, MISSION_CONTENT_MOBILE, NFTSCAN, OPENSEA_RED, RARITY, SIGN_DIRECTION, SIGN_DIRECTION_MOBILE, SIMPLE_RED, SPICY_RED, X2Y2_RED } from 'Assets'
import { Container, Image, TextNormal } from 'Components'
import DirectionLayout from 'Modules/layouts/direction'
import React, { useState, useEffect } from 'react'
import MailForm from './mail-form'
import { BannerWrapper, DataWrapper, GoalWrapper, HeaderWrapper, HeroWrapper, MissionWrapper, WindowWrapper } from './styled'

const DirectionScreen = () => {
  const [width, setWidth] = useState(window.innerWidth)

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange)
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, [])

  const isMobile = width <= 768

  const Hero = () => (
    <HeroWrapper>
      <TextNormal fontWeight="fw_900" fontSize="size_64" lineHeight="64px" letterSpacing="-1px">Supercharge your NFT experience today with </TextNormal>
      <BannerWrapper>
        <div className="hand-asknfty">
          <Image src={HAND_ASK} alt='hand-asknfty' />
          <div className="form-wrapper">
            <div className="form-content">
              <Image src={isMobile ? SIGN_DIRECTION_MOBILE : SIGN_DIRECTION} alt="bg-form-mailchimp" />
              <div className="form-container">
                <TextNormal className="label-form" color="white" fontSize="size_20" lineHeight="28px" fontWeight="fw_700">Subscribe to our mailing list for updates</TextNormal>
                <MailForm className="mail-form" />
              </div>
            </div>
          </div>
        </div>
      </BannerWrapper>
    </HeroWrapper>
  )

  const Goal = () => (
    <GoalWrapper>
      <div className="quote">
        <TextNormal>Our goal is to make NFTs super acessible, useful, and exciting for all</TextNormal>
        <TextNormal>Our products are geared towards all interest levels</TextNormal>
      </div>
      <div className="line-direction">
        <Image src={isMobile ? LINE_DIRECTION_MOBILE : DIRECTION_LINE} alt="line-img" />
      </div>
    </GoalWrapper>
  )

  const Window = () => (
    <WindowWrapper>
      <Container className="nft-info">
        <Row gutter={[27, 34]} align="middle" justify="center">
          <Col span={24} xl={12}>
            <div className="header search">
              <div className="list-dot tracker-search">
                <div className="dot" />
                <div className="dot" />
                <div className="dot" />
              </div>
              <TextNormal>NFT Search & Wiki</TextNormal>
            </div>
            <div className="content-search">
              <ul>
                <li>Search by keyword from over 50 milion Ethereum tokens</li>
                <li>Find NFTs you find interesting to collect</li>
                <li>Soon projects can edit and customize their own page</li>
              </ul>
              <div className="content-img search">
                <Image src={CONTENT_SEARCH} alt="content-search" />
              </div>
            </div>
          </Col>
          <Col span={24} xl={12}>
            <div className="header tracker">
              <div className="list-dot tracker-dot">
                <div className="dot" />
                <div className="dot" />
                <div className="dot" />
              </div>
              <TextNormal>NFT Portfolio tracker</TextNormal>
            </div>
            <div className="content-search">
              <ul>
                <li>Load your NFTs ( while preserving your security & privacy)</li>
                <li>Follow & Discover new upcoming NFT events & conferences</li>
              </ul>
              <div className="content-img tracker">
                <Image src={CONTENT_TRACKER} alt="content-tracker" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </WindowWrapper>
  )

  const OurMission = () => (
    <MissionWrapper>
      <HeaderWrapper>
        <TextNormal>Our mission</TextNormal>
      </HeaderWrapper>
      <div className="mission-content">
        <Image src={isMobile ? MISSION_CONTENT_MOBILE : MISSION_CONTENT} alt="mission-content" />
        <div className="content">
          <TextNormal>NFTs today are: too complex, security breaches & scams run rampant, and lack fundamental value beyond hype.</TextNormal>
          <TextNormal>Yet, NFT technology has huge potential to disrupt every single domain: legal, gaming, web ownership, veblen goods, authentication, the list is truly endless.</TextNormal>
          <TextNormal>Our vision is to enable NFT technology to reach its fullest potential. To achieve this, askNFTY is developing suite of tools that will unlock the true value of NFTs that the world has yet seen.</TextNormal>
        </div>
      </div>
    </MissionWrapper>
  )

  const Data = () => (
    <DataWrapper>
      <HeaderWrapper>
        <TextNormal>Our Data Partners</TextNormal>
      </HeaderWrapper>
      <Container>
        <Row gutter={[24, 20]} className="list-data first">
          <Col span={12} xl={6}>
            <div className="item">
              <Image src={DATA_DIRECTION} alt="data-direction" />
              <a href="https://opensea.io/" target="_blank" className="content">
                <Image src={OPENSEA_RED} alt="opensea" />
                <TextNormal>Opensea</TextNormal>
              </a>
            </div>
          </Col>
          <Col span={12} xl={6}>
            <div className="item">
              <Image src={DATA_DIRECTION} alt="data-direction" />
              <a href="https://www.covalenthq.com/" target="_blank" className="content">
                <Image src={COVALENT_RED} alt="Covalent" />
                <TextNormal>Covalent</TextNormal>
              </a>
            </div>
          </Col>
          <Col span={12} xl={6}>
            <div className="item">
              <Image src={DATA_DIRECTION} alt="data-direction" />
              <a href="https://looksrare.org/" target="_blank" className="content">
                <Image src={LOOKSRARE_RED} alt="Looksrare" />
                <TextNormal>Looksrare</TextNormal>
              </a>
            </div>
          </Col>
          <Col span={12} xl={6}>
            <div className="item">
              <Image src={DATA_DIRECTION} alt="data-direction" />
              <a href="https://x2y2.io/" target="_blank" className="content">
                <Image src={X2Y2_RED} alt="x2y2" />
                <TextNormal>X2Y2</TextNormal>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="line-end">
        <Row gutter={[24, 20]} className="list-data second">
          <Col span={12}>
            <div className="item">
              <Image src={DATA_DIRECTION} alt="data-direction" />
              <a href="https://rarity.tools/" target="_blank" className="content">
                <Image src={RARITY} alt="Rarify" />
                <TextNormal>Rarify</TextNormal>
              </a>
            </div>
          </Col>
          <Col span={12}>
            <div className="item">
              <Image src={DATA_DIRECTION} alt="data-direction" />
              <a href="https://simplehash.com/" target="_blank" className="content">
                <Image src={SIMPLE_RED} alt="simple" />
                <TextNormal>SimpleHash</TextNormal>
              </a>
            </div>
          </Col>
          <Col span={12}>
            <div className="item">
              <Image src={DATA_DIRECTION} alt="data-direction" />
              <a href="https://www.spicyest.com/" className="content">
                <Image src={SPICY_RED} alt="spicy" />
                <TextNormal>Spicyest</TextNormal>
              </a>
            </div>
          </Col>
          <Col span={12}>
            <div className="item">
              <Image src={DATA_DIRECTION} alt="data-direction" />
              <a href="https://gomu.co/" target="_blank" className="content">
                <Image src={GOMU} alt="gomu" />
                <TextNormal>Gomu</TextNormal>
              </a>
            </div>
          </Col>
          <Col span={12}>
            <div className="item">
              <Image src={DATA_DIRECTION} alt="data-direction" />
              <a href="https://www.nftscan.com/" target="_blank" className="content">
                <Image src={NFTSCAN} alt="Nftscan" />
                <TextNormal>Nftscan</TextNormal>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </DataWrapper >
  )

  return (
    <DirectionLayout>
      <Hero />
      <Goal />
      <Window />
      <OurMission />
      <Data />
    </DirectionLayout>
  )
}

export default DirectionScreen