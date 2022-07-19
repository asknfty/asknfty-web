import { BG_NFT_DETAIL } from 'Assets'
import styled from 'styled-components'
import { MEDIA_WIDTHS } from 'Themes'

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 640px;
  background: url(${BG_NFT_DETAIL}) no-repeat;
  background-size: cover;

  .header__back {
    display: flex;
    align-items: center;
    margin: 24px 0 28px 160px;
    cursor: pointer;
    width: max-content;
    .ant-image {
      margin-right: 16px;
    }
  }

  .header__avatar {
    display: flex;
    justify-content: center;
    margin-bottom: 24px;
    &__img {
      border: 4px solid white;
    }
  }

  @media screen and (max-width: ${MEDIA_WIDTHS.upToMedium}px) {
    .header__back {
      margin: 24px 16px;
      p {
        font-size: 20px;
        line-height: 28px;
        font-weight: 700;
        letter-spacing: -0.3px;
      }
    }
    .header__avatar {
      padding-right: 16px;
      padding-left: 16px;
    }
  }
`