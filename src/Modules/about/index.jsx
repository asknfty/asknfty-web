import React from 'react'
import { Row, Col } from 'antd'
import { TextNormal, TextPrimary, TextCategory, Container, Image } from 'Components'
import HomeLayout from 'Modules/layouts/home'
import { WrapperArtBo, WrapperCrypto, WrapperCurrent, WrapperEco, WrapperFeature, WrapperOurPartner, WrapperSearch, WrapperWhy } from './styled'
import { ART_BO, COVALENT, CRYPTO_CENTER, CRYPTO_CENTER_MOBILE, CURRENT_ITEM, CURRENT_RIGHT, DIFFERENCE_ITEM, DIFFERENCE_LEFT, GLOBAL, HERO_NFTY, HERO_NFTY_MOBILE, LOOKSRARE, MAIL, OPENSEA, QUOTE, SB_ART, SIMPLE, SPICY, STAR_FEATURE, STAR_YELLOW, TWITTER, X2Y2 } from 'Assets'

const AboutScreen = () => {

    const TilteSection = (children, maxWidth) => {
        return (
            <TextNormal maxWidth={maxWidth} fontSize="size_40" fontWeight='fw_700' lineHeight='32px'>
                {children}
            </TextNormal >
        )
    }

    const renderWhy = () => {
        return (
            <Container>
                <TextNormal lineHeight="64px" fontSize='size_48' fontWeight='fw_700'>
                    Why we build this
                </TextNormal>
                <TextNormal color="grey_text">
                    NFT Search Engine & Analytics Tool
                </TextNormal>
                <div className="problem-text">
                    <TextNormal fontWeight='fw_700'>
                        <TextCategory color="quote_text" fontWeight='fw_700'>PROBLEM - </TextCategory>
                        NFTS TODAY SUFFER FROM LACK OF DATA TRANSPARENCY, COMPLEXITY, FRAGMENTATION, AND SAFE ACCESS PROBLEM
                    </TextNormal>
                </div>
                <div className="nfty">
                    <Image src={HERO_NFTY} alt="" className="hidden-mobile" />
                    <Row>
                        <Col span={24} xl={8}>
                            <TextNormal>
                                NFT data today is fragmented and comes from all of the following sources.
                            </TextNormal>
                        </Col>
                        <Col span={24} xl={8}>
                            <Image src={HERO_NFTY_MOBILE} alt="" className="hidden-desktop" />
                        </Col>
                        <Col span={24} xl={8}>
                            <TextNormal>
                                Projects use some, or all of these media channels to communicate with their communities.
                            </TextNormal>
                        </Col>
                    </Row>
                </div>
            </Container>
        )
    }

    const renderCurrent = () => {
        return (
            <Container className="current-container">
                <Row>
                    <Col flex="auto">
                        <Row className="header">
                            <Image className="hidden-mobile" src={STAR_YELLOW}></Image>
                            {TilteSection('This current state is not sustainable', '509px', '32px')}
                        </Row>
                        <div className="list-current">
                            <div className="item">
                                <Image src={CURRENT_ITEM} alt="" />
                                <TextNormal className="content">
                                    Intimidating for newcomers
                                </TextNormal>
                            </div>
                            <div className="item">
                                <Image src={CURRENT_ITEM} alt="" />
                                <TextNormal className="content">
                                    Newcomers need referrals, recommendations, and handholding
                                </TextNormal>
                            </div>
                            <div className="item">
                                <Image src={CURRENT_ITEM} alt="" />
                                <TextNormal className="content">
                                    Not user friendly
                                </TextNormal>
                            </div>
                            <div className="item">
                                <Image src={CURRENT_ITEM} alt="" />
                                <TextNormal className="content">
                                    Prone to scams, impersonations
                                </TextNormal>
                            </div>
                            <div className="item">
                                <Image src={CURRENT_ITEM} alt="" />
                                <TextNormal className="content">
                                    Requires immense amount of time and energy to participate in
                                </TextNormal>
                            </div>
                        </div>
                    </Col>
                    <Col flex="auto">
                        <Image src={CURRENT_RIGHT} alt="" />
                    </Col>
                </Row>
            </Container>
        )
    }

    const renderArtBo = () => {
        return (
            <Container>
                <Image src={ART_BO} alt="" />
                <div className="artbo">
                    <Image src={SB_ART} alt="" />
                    <TextNormal fontWeight='fw_700' maxWidth='576px'>
                        Today, NFT data comes in all shapes and sizes, there is no standardization, no singular source of truth
                    </TextNormal>
                </div>
            </Container>
        )
    }

    const renderFeature = () => {
        return (
            <Container>
                <Image src={STAR_FEATURE} />
                {TilteSection('Feature set')}
                <Row gutter={[24, 24]} className="list-feature">
                    <Col span={24} xl={12} className="item table-mvp">
                        <div className="header mvp">
                            <TextNormal fontWeight='fw_700'>MVP</TextNormal>
                        </div>
                        <ul>
                            <li>Simple, easy to use, refined search page</li>
                            <li>Multichain, blockchain agnostic</li>
                            <li>
                                <TextNormal>Instant indexed search results based on keywords</TextNormal>
                                <TextNormal fontSize="size_16">Suggestions if words do not match exactly</TextNormal>
                            </li>
                            <li>
                                <TextNormal>Widgets displaying results</TextNormal>
                                <TextNormal fontSize="size_16">Number of widgets will increase as we integrate more API functionality</TextNormal>
                            </li>
                            <li>Drag, drop, and pin functionality</li>
                        </ul>
                    </Col>
                    <Col span={24} xl={12} className="item table-poss">
                        <div className="header poss">
                            <TextNormal fontWeight='fw_700'>FUTURE POSSIBILITIES</TextNormal>
                        </div>
                        <ul>
                            <li>Profiles</li>
                            <li>Tailored personas</li>
                            <li>Custom suggestions based on historical searches/ saved collections</li>
                            <li>Ability to save boards</li>
                            <li>Notifications</li>
                            <li>Refresh API for latest data</li>
                            <li>API Service</li>
                            <li>Ads Engine</li>
                            <li>Launchpad for Creators</li>
                            <li>ENS Pages</li>
                            <li>NFT Data mint, rev share</li>
                            <li>NFT showcase</li>
                            <li>Governance token</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        )
    }

    const renderOurPartner = () => {
        return (
            <Container>
                {TilteSection('Our Partner Data')}
                <Row className="list-partner" gutter={[48, 56]} justify="center">
                    <Col span={12} xl={6} className="item">
                        <Row align='middle' justify='center'>
                            <Image src={OPENSEA} alt="" />
                            <TextNormal>Opensea</TextNormal>
                        </Row>
                    </Col>
                    <Col span={12} xl={6} className="item">
                        <Row align='middle' justify='center'>
                            <Image src={COVALENT} alt="" />
                            <TextNormal>Covalent</TextNormal>
                        </Row>
                    </Col>
                    <Col span={12} xl={6} className="item">
                        <Row align='middle' justify='center'>
                            <Image src={LOOKSRARE} alt="" />
                            <TextNormal>Looksrare</TextNormal>
                        </Row>
                    </Col>
                    <Col span={12} xl={6} className="item">
                        <Row align='middle' justify='center'>
                            <Image src={X2Y2} alt="" />
                            <TextNormal>X2Y2</TextNormal>
                        </Row>
                    </Col>
                    <Col span={12} xl={6} className="item">
                        <Row align='middle' justify='center'>
                            <Image src={SIMPLE} alt="" />
                            <TextNormal>Simplehash</TextNormal>
                        </Row>
                    </Col>
                    <Col span={12} xl={6} className="item">
                        <Row align='middle' justify='center'>
                            <Image src={SPICY} alt="" />
                            <TextNormal>Spicyest</TextNormal>
                        </Row>
                    </Col>
                </Row >
                <TextNormal className="coming" color="grey_text" fontSize="size_24" lineHeight="32px">More coming soon!</TextNormal>
                <div className="contact">
                    {TilteSection('Contact')}
                    <Row gutter={[80, 18]} justify='center' align='middle' className='social'>
                        <Col span={24} xl={8}>
                            <Row align="middle" justify='center'>
                                <Image src={GLOBAL} alt="" />
                                <TextNormal>asknfty.com</TextNormal>
                            </Row>
                        </Col>
                        <Col span={24} xl={8}>
                            <Row align="middle" justify='center'>
                                <Image src={MAIL} alt="" />
                                <TextNormal>patrick@asknfty.com</TextNormal>
                            </Row>
                        </Col>
                        <Col span={24} xl={8}>
                            <Row align="middle" justify='center'>
                                <Image src={TWITTER} alt="" />
                                <TextNormal>@asknfty</TextNormal>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </Container >
        )
    }

    const renderDifferent = () => {
        return (
            <Container className="current-container">
                <Row>
                    <Col flex="auto">
                        <Image src={DIFFERENCE_LEFT} alt="" />
                    </Col>
                    <Col flex="auto">
                        <Row className="header header-different">
                            {TilteSection('Current state is')}
                        </Row>
                        <div className="list-current list-different">
                            <div className="item">
                                <Image src={DIFFERENCE_ITEM} alt="" />
                                <TextNormal className="content">
                                    Different blockchains
                                </TextNormal>
                            </div>
                            <div className="item">
                                <Image src={DIFFERENCE_ITEM} alt="" />
                                <TextNormal className="content two">
                                    Different data sources
                                </TextNormal>
                            </div>
                            <div className="item">
                                <Image src={DIFFERENCE_ITEM} alt="" />
                                <TextNormal className="content">
                                    Different marketplaces & exchanges
                                </TextNormal>
                            </div>
                            <div className="item">
                                <Image src={DIFFERENCE_ITEM} alt="" />
                                <TextNormal className="content">
                                    Different personas/ level of crypto competence
                                </TextNormal>
                            </div>
                            <div className="item">
                                <Image src={DIFFERENCE_ITEM} alt="" />
                                <TextNormal className="content three">
                                    Completed fragmented and unusable for vast majority
                                </TextNormal>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }

    const renderEcoSystem = () => {
        return (
            <Container>
                <div className="quote">
                    <Image src={QUOTE} alt="" />
                    <TextNormal fontSize='size_24' lineHeight="32px" fontWeight='fw_700' color="quote_text" maxWidth='710px'>
                        Current ecosystem caters mainly to crypto native, those crypto curious and crypto clueless are left out.
                    </TextNormal>
                </div>
            </Container>
        )
    }

    const renderCrypto = () => {
        return (
            <Container>
                {TilteSection('Crypto today is not personalized')}
                <Row className="crypto-content">
                    <Col span="24" xl={8} className="user-problem">
                        <TextNormal className="title" fontSize='size_24' lineHeight="32px" fontWeight='fw_700'>User’s Problems</TextNormal>
                        <ul>
                            <li>
                                <TextNormal>
                                    <b>Crypto Clueless:</b> John has no clue about crypto, never owned a Bitcoin, but would love to click around, read about what NFTs are.
                                </TextNormal>
                            </li>
                            <li>
                                <TextNormal>
                                    <b>Crypto Curious:</b> Stacey has a Bitcoin she bought in 2020 from Robinhood, but doesn’t do much except follow the news
                                </TextNormal>
                            </li>
                            <li>
                                <TextNormal>
                                    <b>Crypto Native:</b> Brian lives and breathes crypto, he even invested in Ethereum’s ICO back in 2016.
                                </TextNormal>
                            </li>
                        </ul>
                    </Col>
                    <Col span="24" xl={8} className="crypto-center">
                        <Image src={CRYPTO_CENTER} alt="" className="hidden-mobile" />
                        <Image src={CRYPTO_CENTER_MOBILE} alt="" className="hidden-desktop" />
                    </Col>
                    <Col span="24" xl={8} className="asknfty">
                        <TextNormal className="title" fontSize='size_24' lineHeight="32px" fontWeight='fw_700'>With AskNFTY</TextNormal>
                        <ul>
                            <li>John can search and browse askNFTY about any NFT, no blockchain knowledge needed, he gets the data </li>
                            <li>Stacey can pick and choose what she cares about, create a personalized board, get notifications</li>
                            <li>Brian can see everything he wants, in real time and use it when he trades and collects the new hottest thing</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        )
    }

    const renderSearch = () => {
        return (
            <Container>
                {TilteSection('Why a new search & analytics tool?')}
                <Row className="search-content">
                    <Col span={24} xl={8}>
                        <TextNormal fontWeight='fw_700' maxWidth='376px' className="table-header">
                            NFTGo, OpenSea, LooksRare, Nansen AI, Dune Analytics, Various Startups
                        </TextNormal>
                        <ul>
                            <li>Do not offer access to the entire Blockchain ecosystem</li>
                            <li>Do not offer access to the entire Blockchain ecosystem</li>
                            <li>User interface is complicated, do not address key issues user personas face</li>
                            <li>Tribal, dismissive of other Blockchain projects</li>
                            <li>Tribal, dismissive of other Blockchain projects</li>
                        </ul>
                    </Col>
                    <Col span={24} xl={8}>
                        <div className="solutions">
                            <TextNormal fontWeight='fw_700' fontSize='size_24' lineHeight="32px">Current <br /> Solutions</TextNormal>
                            <TextNormal fontWeight='fw_700' fontSize='size_24' lineHeight="32px">Our <br />Solutions</TextNormal>
                        </div>
                    </Col>
                    <Col span={24} xl={8}>
                        <TextNormal fontWeight='fw_700' className="table-header">
                            askNFTY.com
                        </TextNormal>
                        <ul>
                            <li>
                                One-click access to reliable information across all blockchains, marketplaces, exchanges for all personas and level of crypto competence
                            </li>
                            <li>
                                Create personalized real time dashboards with our indexed database search tool
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container >
        )
    }
    return (
        <HomeLayout>
            <WrapperWhy>
                {renderWhy()}
            </WrapperWhy>
            <WrapperCurrent>
                {renderCurrent()}
            </WrapperCurrent>
            <WrapperArtBo>
                {renderArtBo()}
            </WrapperArtBo>
            <WrapperCurrent className="different-wrapper">
                {renderDifferent()}
            </WrapperCurrent>
            <WrapperEco>
                {renderEcoSystem()}
            </WrapperEco>
            <WrapperCrypto>
                {renderCrypto()}
            </WrapperCrypto>
            <WrapperSearch>
                {renderSearch()}
            </WrapperSearch>
            <WrapperFeature>
                {renderFeature()}
            </WrapperFeature>
            <WrapperOurPartner>
                {renderOurPartner()}
            </WrapperOurPartner>
        </HomeLayout>
    )
}

export default AboutScreen