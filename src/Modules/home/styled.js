import { BG_WELCOME, BG_WELCOME_MOBILE } from 'Assets'
import styled from 'styled-components'
import { MEDIA_WIDTHS } from 'Themes'

export const Wrapper = styled.div`
  text-align: center;
  min-height: calc(100vh - 48px - 72px);
  background: url(${BG_WELCOME}) center center no-repeat, linear-gradient(0deg, #e9a4a4 -14.33%, #90ddfd 100%);
  background-size: cover;
  width: 100%;

  .search-block {
    margin-top: 306px;

    .label {
      margin-top: 64px;
      margin-bottom: 24px;
    }

    form {
      display: flex;
      justify-content: center;
      gap: 12px;
    }
  }

  @media screen and (max-width: ${MEDIA_WIDTHS.upToSmall}px) {
    min-height: calc(100vh - 74px - 162px); // calc height content with subtract header and footer
    background: url(${BG_WELCOME_MOBILE}) center center no-repeat,
    linear-gradient(0deg, #e9a4a4 -14.33%, #90ddfd 100%);
    background-size: cover;
    .search-block {
      margin-top: 48px;
    }
  }
`

export const CheckBoxWrapper = styled.div`
  max-width: 640px;
  text-align: left;
  margin: 25px auto 0 auto;
`
