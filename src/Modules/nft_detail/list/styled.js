import styled from 'styled-components'
import { MEDIA_WIDTHS } from 'Themes'

export const ListWrapper = styled.div`
  padding: 40px 0 40px 160px;

  .list__content {
    margin-top: 40px;
    display: flex;
    width: 100%;
    &__left {
      margin-right: 52px;
      padding: 5px 0;
      &--avatar {
        margin-bottom: 20px;
        cursor: pointer;
      }
      .create__by {
        display: flex;
        align-items: center;
        .ant-avatar {
          margin: 0 4px 0 10px;
        }
      }
    }
    &__right {
      overflow-x: hidden;
      .slick-list {
        margin-left: -24px;
        padding: 5px 10px;
        .slick-slide {
          height: auto;
          > * {
            margin-left: 24px;
          }
        }
      }
      .btn__group {
        margin-top: 30px;
        .ant-image {
          cursor: pointer;
          &:first-child {
            margin-right: 24px;
          }
        }
      }
    }
  }
  @media screen and (max-width: ${MEDIA_WIDTHS.upToMedium}px) {
    padding: 24px 16px;
  }
`
