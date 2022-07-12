import styled from 'styled-components'
import { MEDIA_WIDTHS } from 'Themes'

export const ImageWrapper = styled.div`
  position: relative;
  .avatar {
    position: absolute;
    left: 36px;
    bottom: -80px;
  }
  .banner-img {
    background-position: center center;
    background-repeat: no-repeat;
  }
  @media screen and (max-width: ${MEDIA_WIDTHS.upToMedium}px) {
    .avatar {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`

export const MainInfoWrapper = styled.div`
  padding-left: 32px;

  .main__alert {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  .main__content {
    width: 100%;
    margin-top: 108px;
    display: flex;
    &__left {
      width: 50%;
      &__name {
        line-height: 42px;
      }

      &__social {
        margin: 11px 0 19px 0;
        display: flex;
        gap: 18px;
        &__item {
          display: flex;
          align-items: center;
          span {
            margin-left: 5px;
          }
        }
      }

      &__create {
        display: flex;
        margin-top: 20px;
        &__user {
          margin-left: 10px;
          display: flex;
          gap: 4px;
        }

        .line {
          height: 22px;
          width: 2px;
          background: ${({ theme }) => theme.bd_grey_low};
          margin: 0 16px;
        }
      }
    }

    &__right {
      display: flex;
      flex-wrap: wrap;
      padding-right: 80px;
      &__item {
        width: 50%;
        display: flex;
        margin-bottom: 24px;
        justify-content: center;
        .icon {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 12px;
        }
        .data {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
      }
    }
  }
  @media screen and (max-width: ${MEDIA_WIDTHS.upToMedium}px) {
    padding-left: unset;
    .main__content {
      margin-top: 72px;
      &__left {
        text-align: center;
        &__create {
          justify-content: center;
          margin-top: 0;
        }
      }
      &__right {
        padding-right: 0;
      }
    }
  }
`
