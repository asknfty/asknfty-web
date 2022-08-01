import { DIRECTION_LINE, HERO_DIRECTION } from 'Assets'
import styled from 'styled-components'
import { MEDIA_WIDTHS } from 'Themes'

export const HeroWrapper = styled.div`
  padding-top: 69px;
  height: 100%;
  text-align: center;
  .hand-asknfty {
    position: relative;
  }
  .form-wrapper {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: fit-content;
  }
  .form-content {
    position: relative;
    .form-container {
      content: '';
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 100%;
      p {
        margin-bottom: 12px;
      }
      .mail-form {
        input, button {
          border: 1px solid #AFABAB;
          box-shadow: 4px 4px 0px #391B8E;
        }
        input {
          &:focus, &:hover {
            box-shadow: none;
            & + button {
              box-shadow: none; 
            }
          }
        }
      }
    }
  }
 
  @media screen and (max-width: ${MEDIA_WIDTHS.upToMedium}px) {
    padding-top: 14px;
    .hand-asknfty {
      img {
        max-width: 304px;
      }
    }
    p {
      font-size: 32px;
      line-height: 150%;
    }
    .form-content {
      .form-container {
        .label-form {
          font-size: 20px;
          line-height: 28px;
          max-width: 245px;
          margin: 0 auto;
        }
      }
    }
  }
`

export const BannerWrapper = styled.div`
  width: 100%;
  height: 535px;
  margin-top: 72px;
  background: url(${HERO_DIRECTION}) no-repeat bottom center;
  background-size: contain;
  @media screen and (max-width: ${MEDIA_WIDTHS.upToMedium}px) {
    margin-top: 35px;
    height: 332px;
  }
`

export const GoalWrapper = styled.div`
  text-align: center;
  margin-top: 89px;
  .quote {
    padding: 15px 29px 38px 29px;
    background: #D7E283;
    border: 4px solid #000000;
    max-width: 1165px;
    margin: 0 auto;
    text-align: center;
    position: relative;
    p {
      font-size: 40px;
      line-height: 54px;
      line-height: -6%;
      font-weight: 700;
      max-width: 1109px;
    }
  }
  @media screen and (max-width: ${MEDIA_WIDTHS.upToMedium}px) {
    padding-left: 24px;
    padding-right: 24px;
    margin-top: 24px;
    margin-bottom: 24px;
    .quote {
      p {
        font-size: 24px;
        line-height: 32px;
      }
      p + p {
        margin-top: 20px;
      }
    }
  }
`

export const WindowWrapper = styled.div`
  width: 100%;
  margin-top: 68px;
  .nft-info {
    max-width: 1123px;
  }
  .header {
    border: 1px solid #8E8E8E;
    padding-bottom: 9px;
    padding-top: 15px;
    display: flex;
    align-items: center;
    gap: 84px; 
    p {
      font-size: 20px;
      line-height: 28px;
      letter-spacing: -0.3px;
      font-weight: 700;
    }
    &.search {
      background: #6AD2D8;
    }
    &.tracker {
      background: #FDE19B;
    }
  }
  .list-dot {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-left: 21px;
    padding-top: 18px;
    padding-bottom: 19px;
    .dot {
      width: 15px;
      height: 15px;
      border: 2px solid #000000;
      border-radius: 50%;
    }
    &.tracker-search {
      > * {
        background: #EFD552;
      }
    }
    &.tracker-dot {
      > * {
        background: #F0A8A8;
      }
    }
  }
  .content-search {
    background: white;
    padding: 20px 16px;
    border: 1px solid #8E8E8E;
    min-height: 494px;
    ul {
      padding-left: 26px;
      li {
        list-style: disc;
        font-size: 20px;
        line-height: 28px;
        letter-spacing: -0.3px;
      }
      li, li + li {
        margin-bottom: 12px;
      }
    }
    .content-img {
      width: 100%;
      margin-top: 20px;
      margin-left: auto;
      margin-right: auto;
      &.search {
        max-width: 449px;
      }
      &.tracker {
        max-width: 332px;
      }
      img {
        display: block;
        margin: 0 auto;
      }
    }
  }
  @media screen and (max-width: ${MEDIA_WIDTHS.upToMedium}px) {
    .header {
      gap: 20px;
    }
    .list-dot {
      gap: 8px;
    }
  }
`

export const MissionWrapper = styled.div`
  margin-top: 116px;
  
  .mission-content {
    position: relative;
    text-align: center;
    margin-top: 64px;
    .content {
      content: '';
      position: absolute;
      top: 72px;
      max-width: 783px;
      width: 100%;
      /* left: 140px; */
      left: 50%;
      transform: translateX(-50%);
      p {
        font-size: 24px;
        line-height: 32px;
        letter-spacing: -0.5px;
        color: #4E4B4B;
      }
      p + p {
        margin: 20px 0;
      }
    }
  }
  @media screen and (max-width: ${MEDIA_WIDTHS.upToMedium}px) {
    margin-top: 30px;
    .mission-content {
      .content {
        left: calc(50% + 62px);
        transform: translateX(calc(-50% - 36px));
        max-width: 265px;
        p {
          font-size: 16px;
          line-height: 24px;
        }
      }
    }
  }
`

export const HeaderWrapper = styled.div`
  text-align: center;
  border: 4px solid #000000;
  background: #DD4D26;
  max-width: 753px;
  margin: 0 auto;
  padding: 15px 0;
  p {
    font-size: 40px;
    line-height: 48px;
    font-weight: 700;
    letter-spacing: -0.1px;
    color: white;
  }
  @media screen and (max-width: ${MEDIA_WIDTHS.upToMedium}px) {
    margin-left: 24px;
    margin-right: 24px;
    p {
      font-size: 24px;
      line-height: 32px;
    }
  }
`

export const DataWrapper = styled.div`
  margin-top: 145px;
  .container {
    max-width: 952px;
  }
  .list-data {
    text-align: center;
    &.first {
     margin-top: 86px;
    }
    &.second {
      margin-top: 40px;
      margin-bottom: 48px;
      justify-content: center;
      .ant-col {
        width: 100%;
        max-width: 248px;
        .item {
          width: 100%;
        }
      }
    }
    .item {
      position: relative;
      width: fit-content;
      .content {
        content: '';
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 16px;
        top: 12px;
        left: 24px;
        width: fit-content;
      }
      p {
        font-weight: 700;
        font-size: 20px;
        line-height: 22px;
      }
    }
  }
  .line-end {
    max-width: 1920px;
  }
  @media screen and (max-width: ${MEDIA_WIDTHS.upToMedium}px) {
    margin-top: 56px;
    .list-data {
      &.first {
        margin-top: 26px;
      }
      &.second {
        margin-top: 16px;
        justify-content: flex-start;
      }
      .item {
        .content {
          left: 16px;
          img {
            width: 32px;
          }
          p {
            font-size: 16px;
            line-height: 22px;
          }
        }
      }     
    }
    
  }
`