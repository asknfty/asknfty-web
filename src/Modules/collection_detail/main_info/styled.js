import styled from 'styled-components'

export const ImageWrapper = styled.div`
  position: relative;
  .avatar {
    position: absolute;
    left: 36px;
    bottom: -80px;
  }
`

export const MainInfoWrapper = styled.div`
  border-top: 1px solid black;
  padding: 32px 32px 0 36px;

  .main__alert {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  .main__content {
    width: 100%;
    margin-top: 28px;
    display: flex;
    &__left {
      width: 50%;
      &__name {
        font-family: 'Roboto Mono';
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
      width: 50%;
      display: flex;
      flex-wrap: wrap;
      &__item {
        width: 50%;
        display: flex;
        margin-bottom: 24px;
        .icon {
          width: 48px;
          height 48px;
          border-radius: 50%;
          background: #F7A75D;
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
`
