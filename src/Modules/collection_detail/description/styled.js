import styled from 'styled-components'

export const DesWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 40px;
  margin: 43px 0 40px 0;
  .ant-row {
    width: 100%;
  }

  .description__item {
    &__title {
      background: ${({ theme }) => theme.bg_green_dark};
      padding: 10px 16px;
    }
    &__content {
      padding: 8px 16px;
      flex: 1;
      height: 100%;
      &.range {
        display: flex;
        padding: 16px;
        .estimate {
          width: 140px;
        }
        .ant-slider {
          flex: 1;
          &.ant-slider-disabled {
            cursor: auto;
            .ant-slider-track {
              background-color: ${({ theme }) => theme.secondary} !important;
            }
          }
          .ant-slider-rail {
            height: 6px;
            background: ${({ theme }) => theme.bg_grey_light};
          }
          .ant-slider-track {
            background: ${({ theme }) => theme.secondary};
            height: 6px;
          }
          .ant-slider-step {
            .ant-slider-dot {
              width: 12px;
              height: 12px;
              border-radius: 0;
              background: ${({ theme }) => theme.bg_orange_low};
              border: 0;
              &:last-child {
                background: ${({ theme }) => theme.bg_grey_low};
              }
            }
          }
          .ant-slider-handle {
            display: none;
          }
        }
      }
    }
  }
`

export const Wrapper = styled.div`
  width: 50%;
  padding: 24px;

  .price__estimate {
    display: flex;
    align-items: center;
    margin-bottom: 24px;
    &__item {
      width: 25%;
      p {
        text-align: center;
      }
      &__data {
        display: flex;
        justify-content: center;
        align-items: center;
        .icon__crypto__price {
          width: 22px;
          height: 22px;
          margin-right: 8px;
          border-radius: 50%;
          background: ${({ theme }) => theme.bg_green_yellow};
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
    .line {
      height: 32px;
      width: 1px;
      background: ${({ theme }) => theme.bd_grey_low};
    }
  }

  .price__estimate__range {
    display: flex;
    .ant-slider {
      flex: 1;
      margin-left: 16px;
      width: 100%;
      &.ant-slider-disabled {
        cursor: auto;
        .ant-slider-track {
          background-color: ${({ theme }) => theme.secondary} !important;
        }
      }
      .ant-slider-rail {
        height: 6px;
      }
      .ant-slider-track {
        background: ${({ theme }) => theme.secondary};
        height: 6px;
      }
      .ant-slider-step {
        .ant-slider-dot {
          width: 12px;
          height: 12px;
          border-radius: 0;
          background: ${({ theme }) => theme.bg_orange_low};
          border: 0;
          &:last-child {
            display: none;
          }
        }
      }
      .ant-slider-handle {
        display: none;
      }
    }
  }
`

export const DataRange = styled.div`
  display: flex;
  align-items: center;
  .icon__crypto__price {
    width: 16px;
    height: 16px;
    margin-right: 4px;
    border-radius: 50%;
    background: ${({ theme }) => theme.secondary};
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
