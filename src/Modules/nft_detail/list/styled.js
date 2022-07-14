import styled from 'styled-components'
import { MEDIA_WIDTHS } from 'Themes'

export const ListWrapper = styled.div`
  padding: 40px 0 40px 160px;

  .list__content {
    margin-top: 20px;
    display: flex;
    width: 100%;
    @media screen and (max-width: ${MEDIA_WIDTHS.upToMedium}px) {
     flex-direction: column;
     margin-top: 24px;
    }
    &__left {
      margin-right: 52px;
      padding: 10px 0;
      @media screen and (max-width: ${MEDIA_WIDTHS.upToMedium}px) {
        display: flex;
      }
      &--avatar {
        margin-bottom: 20px;
        cursor: pointer;
        @media screen and (max-width: ${MEDIA_WIDTHS.upToMedium}px) {
          margin-right: 18px;
        }
      }
      &--data {

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
        padding: 10px;
        .slick-slide {
          height: auto;
          > * {
            margin-left: 24px;
          }
          .ske {
            background: white;
            display: flex !important;
            flex-direction: column !important;
            border-radius: 4px;
            padding: 20px 0;
            max-width: 256px;
            @media screen and (max-width: ${MEDIA_WIDTHS.upToMedium}px) {
              max-width: 132px;
              margin: 0 auto;
            }
          }
          .ant-skeleton-header {
            padding-right: unset;
            text-align: center;
          }
          .ant-skeleton-avatar {
            border-radius: unset !important;
            max-width: 256px;
            width: 100%;
            height: 222px;
            @media screen and (max-width: ${MEDIA_WIDTHS.upToMedium}px) {
              max-width: 132px;
              height: 120px;
            }
          }
          .ant-skeleton-paragraph {
            padding-right: 16px;
            padding-left: 16px;
          }
        }
      }

      .btn__group {
        margin-top: 30px;
        @media screen and (max-width: ${MEDIA_WIDTHS.upToMedium}px) {
          margin-top: 24px;
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
