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
        p {
          &:first-child {
            margin-right: 19px;
          }
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
  }
  @media screen and (max-width: ${MEDIA_WIDTHS.upToMedium}px) {
    padding: 40px 16px;
  }
`