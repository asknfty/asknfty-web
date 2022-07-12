import { BG_NFT_DETAIL } from 'Assets'
import styled from 'styled-components'

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
`