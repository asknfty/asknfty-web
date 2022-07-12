import styled from 'styled-components'
import { MEDIA_WIDTHS } from 'Themes'

export const ListWrapper = styled.div`
  padding: 40px 160px;

  .list__content {
    margin-top: 40px;
    &__left {
      &--avatar {
        margin-bottom: 20px;
      }
      .create__by {
        display: flex;
        align-items: center;
        .ant-avatar {
          margin: 0 4px 0 10px;
        }
      }
    }
  }
  @media screen and (max-width: ${MEDIA_WIDTHS.upToMedium}px) {
    padding: 24px 16px;
  }
`
