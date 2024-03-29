import styled from 'styled-components'
import { MEDIA_WIDTHS } from 'Themes'

export const ListWrapper = styled.div`
  padding: 40px 0 40px 160px;

  .list__content {
    margin-top: 40px;
    display: flex;
    width: 100%;
    @media screen and (max-width: ${MEDIA_WIDTHS.upToMedium}px) {
      flex-direction: column;
    }
    &__left {
      margin-right: 52px;
      padding: 5px 0;
      @media screen and (max-width: ${MEDIA_WIDTHS.upToMedium}px) {
        display: flex;
        margin-right: 0;
      }
      &--avatar {
        margin-bottom: 20px;
        cursor: pointer;
      }
      &--info {
        @media screen and (max-width: ${MEDIA_WIDTHS.upToMedium}px) {
          margin-left: 18px;
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
    &__right {
      overflow-x: hidden;
      .slick-list {
        margin-left: -24px;
        padding: 5px 10px;
        .slick-slide {
          height: auto;
          > * {
            @media screen and (max-width: ${MEDIA_WIDTHS.upToMedium}px) {
              display: flex;
              justify-content: center;
            }
            margin-left: 24px;
            @media screen and (max-width: ${MEDIA_WIDTHS.upToMedium}px) {
              margin-left: 20px;
            }
            @media screen and (max-width: ${MEDIA_WIDTHS.upToSmall}px) {
              margin-left: 14px;
            }
          }
        }
      }
      .btn__group {
        margin-top: 30px;
        @media screen and (max-width: ${MEDIA_WIDTHS.upToMedium}px) {
          text-align: center;
        }
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
