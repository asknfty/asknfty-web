import { BG_COLLECTION_DETAIL } from 'Assets'
import styled from 'styled-components'
import { MEDIA_WIDTHS } from 'Themes'

export const Wrapper = styled.div`
  min-height: calc(100vh - 48px - 72px);
  background: url(${BG_COLLECTION_DETAIL});
  background-size: cover;
  width: 100%;
  .collection-container, .main-info-container {
    max-width: 1096px;
  }
  @media screen and (max-width: ${MEDIA_WIDTHS.upToLarge}px) {
    .main-info-container {
      padding-left: unset;
      padding-right: unset;
    }
  }
`

export const Container = styled.div`
  width: 1120px;
  margin: 0 auto;
`

export const DesWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 40px;
  margin: 43px 0 40px 0;

  .description__item {
    width: 50%;
    &__title {
      background: ${({ theme }) => theme.bg_green_dark};
      padding: 10px 16px;
    }

    &__content {
      padding: 8px 16px;
    }
  }
`

export const MainContent = styled.div`
  background: transparent;
  .ant-tabs {
    .ant-tabs-nav {
      padding: 0 32px;
      margin: 0 0 32px 0;
      background: ${({ theme }) => theme.white};
      border: 1px solid ${({ theme }) => theme.bd_grey_dark};
      border-top: none;
      &:before {
        border-bottom: none;
      }
      .ant-tabs-tab {
        &.ant-tabs-tab-active {
          .ant-tabs-tab-btn {
            font-weight: 700;
          }
        }
        .ant-tabs-tab-btn {
          color: ${({ theme }) => theme.text_primary};
          font-size: 20px;
        }
      }
      .ant-tabs-ink-bar {
        background: ${({ theme }) => theme.primary};
        height: 6px;
      }
    }
  }
`

export const CollectionWrapper = styled.div`
  width: 100%;
  display: flex;
`
export const ListWrapper = styled.div`
  max-width: 1096px;
  margin: 0 auto;
  padding-left: 12px;
  padding-right: 12px;
  margin-top: 72px;
  margin-bottom: 22px;
  .btn-image {
    margin-top: 40px;
  }
`
