import styled from 'styled-components'
import { CURRENT_ITEM, HERO, CURRENT_RIGHT, BG_CURRENT, BG_ART, SB_ART, BG_PARTNER, PARTNER_ITEM, WINDOW_SEA, WINDOW_SMILE, BG_FEATURE, DIFFERENCE_ITEM, BG_DIFFERENCE, BG_ECO, QUOTE, BG_CRYPTO, SEARCH_BOTTOM, SEARCH_CENTER } from 'Assets'
import { MEDIA_WIDTHS } from 'Themes'

export const WrapperWhy = styled.div`
    text-align: center;
    background: url(${HERO}) top center no-repeat;
    background-size: cover;
    padding-top: 120px;
    padding-bottom: 103px;
    .problem-text {
        max-width: 834px;
        margin: 40px auto 48px auto;
    }
    @media screen and (max-width: ${MEDIA_WIDTHS.upToSmall}px) {
        padding-top: 48px;
        padding-bottom: 48px;
    }
`

export const WrapperCurrent = styled.div`
    padding-top: 82px;
    padding-bottom: 82px;
    background: 
    url(${BG_CURRENT}) center center no-repeat,
    linear-gradient(0deg, #E9A4B1 3.33%, #90DDFD 100%);
    background-size: contain;
    &.different-wrapper {
        background: 
        url(${BG_DIFFERENCE}) center center no-repeat,
        linear-gradient(338.63deg, #E9E2A4 -28.39%, #E7D3D7 113.87%);
        background-size: cover;
    }
    .header {
        margin-bottom: 40px;
        p {
            margin-left: 20px;
        }
        &.header-different {
            p {
                margin-left: unset;
            }
        }
    }
    .current-container {
        max-width: 100%;
        padding-left: 70px;
        .ant-row {
            flex-flow: unset;
        }
    }
    .list-current {
        padding-left: 90px;
        &.list-different {
            padding-left: unset;
        }
        .item:not(:last-child) {
            margin-bottom: 16px;
        }
        .item {
            position: relative;
            display: flex;
            align-items: center;
            margin-bottom: 24px;
            p {
                content: '';
                position: absolute;
            }
        }
        .content {
            font-weight: 700;
            padding-left: 32px;
            max-width: 446px;
        }
    }
    @media screen and (max-width: ${MEDIA_WIDTHS.upToMedium}px) {
        .list-current {
            padding-left: 0;
        }
    }
    @media screen and (max-width: ${MEDIA_WIDTHS.upToSmall}px) {
        padding-bottom: 48px;
        padding-top: 48px;
        .current-container {
            padding-left: 16px;
            .ant-row {
                flex-flow: row wrap;
            }
            .header {
                text-align: center;
            }
        }
        .list-current {
            padding-left: 0;
            margin-bottom: 24px;
        }
    }
`

export const WrapperArtBo = styled.div`
    background: 
    url(${BG_ART}) center center no-repeat,
    linear-gradient(45.75deg, #C8E6E6 -100%, #E1C4C9 -15%, #E1C4C9 0%, #E1C4C9 15%, #C8E6E6 100%);
    background-size: cover;
    text-align: center;
    padding-top: 120px;
    padding-bottom: 120px;
    .artbo {
        margin: 40px auto 0 auto;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        p {
            content: '';
            position: absolute;
        }
    }
`

export const WrapperOurPartner = styled.div`
    background: 
    url(${BG_PARTNER}) top center no-repeat,
    linear-gradient(134.25deg, #F19FAA 0%, #F19FAA 21%, #DEE798 100%);
    background-size: cover;
    text-align: center;
    padding-top: 100px;
    padding-bottom: 108px;
    .list-partner {
        margin-top: 40px;
        margin-bottom: 40px;
        .item {
            background: url(${PARTNER_ITEM}) center top no-repeat;
            background-size: contain;
            height: 80px;
            padding-top: 12px;
            p {
                margin-left: 16px;
            }
           
        }
    }
    .contact {
        background: white;
        padding-top: 56px;
        padding-bottom: 56px;
        margin-top: 80px;
        .social {
            margin-top: 40px;
            p {
                margin-left: 10px;
            }
        }
    }
    @media screen and (max-width: ${MEDIA_WIDTHS.upToSmall}px) {
        padding-top: 48px;
        padding-bottom: 48px;
        .list-partner {
            margin-bottom: 24px;
            .item {
                height: 56px;
                img {
                    width: 32px;
                }
                p {
                    margin-left: 8px;
                    font-weight: 700;
                }
            }
        }
        .coming {
            font-size: 20px;
            line-height: 22px;
        }
        .contact {
            margin-top: 40px;
            padding-top: 32px;
            .social {
                margin-top: 24px;
                p {
                    font-size: 20px;
                    line-height: 22px;
                }
            }
        }
    }
`

export const WrapperFeature = styled.div`
    text-align: center;
    padding-top: 80px;
    padding-bottom: 80px;
    background: 
    url(${BG_FEATURE}) center center no-repeat,
    linear-gradient(0deg, #FFCE88 0%, #F4C59A 8%, #D6ACD0 32%, #CAA7F3 50%, #C6A6FD 60%, #D1C1FE 100%);
    background-size: cover;
    .list-feature {
        margin-top: 40px;
        .header {
            padding: 15px 16px;
            text-align: left;
            border: 1px solid #8E8E8E;
            &.mvp {
                background: #6AD2D8;
            }
            &.poss {
                background: #DEE798;
            }
        }
    }
    ul {
        border: 1px solid #8E8E8E;
        padding: 20px 20px 20px 36px;
        min-height: 546px;
        background: white;
        li {
            text-align: left;
            margin-bottom: 12px;
            line-height: 22px;
            &::marker {
                font-size: 13px;
            }
            &:last-child {
                margin-bottom: unset;
            }
        }
    }
    .table-mvp, .table-poss {
        z-index: 1;
        @media screen and (max-width: ${MEDIA_WIDTHS.upToLarge}px) {
            &:after {
                height: unset !important;
            }
        }
        &:after {
            content: '';
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
        }
    }
    .table-mvp {
        &:after {
            left: -10%;
            background: url(${WINDOW_SEA}) bottom left no-repeat;
        }
    }
    .table-poss {
        &:after {
            right: -10%;
            background: url(${WINDOW_SMILE}) bottom right no-repeat;
        }
    }

    @media screen and (max-width: ${MEDIA_WIDTHS.upToSmall}px) {
        padding-top: 48px;
        padding-bottom: 48px;
        ul {
            min-height: unset;
        }
    }
`

export const WrapperEco = styled.div`
    background: 
    url(${BG_ECO}) center center no-repeat,
    linear-gradient(134.25deg, #F19FAE 0%, #F19FAA 21%, #DEE798 100%);
    background-size: cover;
    padding-top: 240px;
    padding-bottom: 240px;
    text-align: center;
    .quote {
        text-align: center;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        p {
            content: '';
            position: absolute;
            max-width: 710px;
        }
    }
    @media screen and (max-width: ${MEDIA_WIDTHS.upToSmall}px) {
        .quote {
            p {
                padding: 24px 32px;
                line-height: 22px;
            }
        }
    }
`

export const WrapperCrypto = styled.div`
    text-align: center;
    padding-top: 100px;
    padding-bottom: 61px;
    background: 
    url(${BG_CRYPTO}) center bottom no-repeat,
    linear-gradient(359.98deg, #FF9C9C -51.72%, #FFE1E7 65.59%);    
    background-size: cover;
    .crypto-content {
        text-align: left;
        margin-top: 16px;
        .title {
            margin-bottom: 24px;
            margin-top: 77px;
        }
        ul {
            list-style: none;
            padding: 0;
            @media screen and (max-width: ${MEDIA_WIDTHS.upToMedium}px) {
                list-style: disc;
            }
        }
        .user-problem {
            ul {
                li {
                    margin-bottom: 28px;
                }
            }
        }
        .asknfty {
            ul {
                li {
                    margin-bottom: 50px;
                }
            }
        }
    }
    @media screen and (max-width: ${MEDIA_WIDTHS.upToSmall}px) {
        padding-top: 48px;
        padding-bottom: 189px;
        text-align: left;
        .crypto-content {
            margin-top: 24px;
            .title {
                margin-top: unset;
                font-size: 20px;
                line-height: 22px;
                margin-bottom: 16px;
            }
            ul {
                padding-left: 20px;
                li {
                    margin-bottom: 16px !important;
                }
            }
            
        }
    }

    @media screen and (max-width: ${MEDIA_WIDTHS.upToLarge}px) {
        .crypto-center {
            text-align: center;
        }
    }
`

export const WrapperSearch = styled.div`
    text-align: center;
    padding-top: 156px;
    padding-bottom: 156px;
    background: 
    url(${SEARCH_BOTTOM}) bottom center no-repeat,
    linear-gradient(0deg, #9EF5F5 0%, #FFC2C2 100%);
    background-size: contain;
    .search-content {
        margin-top: 40px;
        text-align: left;
        .table-header {
            margin-bottom: 16px;
        }
        ul {
            li {
                margin-bottom: 12px;
                color: #545454;
                &::marker {
                    font-size: 12px;
                }
            }
        }
        .solutions {
            background: url(${SEARCH_CENTER}) center center no-repeat;
            background-size: contain;
            height: 302px;
            position: relative;
            p {
                position: absolute;
                content: '';
                text-align: center;
            }
            p:first-child {
                top: 25%;
                left: 25%;
            }
            p:last-child {
                bottom: 25%;
                right: 30%;
               
            }
        }
    }
    @media screen and (max-width: ${MEDIA_WIDTHS.upToSmall}px) {
        padding-top: 41px;
        padding-bottom: 289px;
        text-align: left;
        .table-header {
            font-size: 20px;
            line-height: 22px;
        }
    }
`