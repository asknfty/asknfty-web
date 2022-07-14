import styled from 'styled-components'
import { MEDIA_WIDTHS } from 'Themes'

export const DetailWrapper = styled.div`
  padding: 40px 160px;
  background: ${({ theme }) => theme.bg_pink_low};

  .detail__content {
    display: flex;
    &__left {
      width: 50%;
      &--title {
        display: flex;
        align-items: center;
        margin: 10px 0 18px 0;
        span {
          margin-right: 19px;
          color: ${({ theme }) => theme.text_blue};
        }
      }
      &--content {
        display: flex;
        p {
          margin-bottom: 12px;
        }
        .item {
          width: 50%;
        }
      }
    }
    &__right {
      width: 50%;
      &--title {
        display: flex;
        align-items: center;
        margin: 10px 0 18px 0;
      }
      &--content {
        .item {
          display: flex;
          p {
            margin-bottom: 12px;
            width: 50%;
          }
        }
      }
    }
  }
  @media screen and (max-width: ${MEDIA_WIDTHS.upToMedium}px) {
    padding: 40px 16px;
  }
`