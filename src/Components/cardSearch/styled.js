import styled from 'styled-components'
import { MEDIA_WIDTHS } from 'Themes'

export const Wrapper = styled.div`
  max-width: 256px;
  transition: opacity 200ms ease 0s;
  box-shadow: 6px 6px 0px #636363;
  border: 1px solid #4e4b4b;
  background: white;
  position: relative;
  overflow: hidden;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.03);
  }

  .ske {
    padding: 16px;
    .ant-skeleton-avatar {
      @media screen and (max-width: ${MEDIA_WIDTHS.upToMedium}px) {
        max-height: 122px;
      }
    }
  }

  .ske {
    background: white;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    padding: 20px 0;

    .ant-skeleton-header {
      padding: 0 16px;
    }
    .ant-skeleton-avatar {
      border-radius: unset;
      max-width: 224px;
      width: 100%;
      height: 216px;
      margin-bottom: 8px;
    }
    .ant-skeleton-paragraph {
      padding: 0 16px;
    }
  }

  @media screen and (max-width: ${MEDIA_WIDTHS.upToMedium}px) {
    max-width: 122px;
    max-height: 122px;
  }

  .wrap-content {
    width: 100%;
    height: 100%;
    overflow: inherit;
    text-align: left;
    .card {
      padding: 16px;
      cursor: pointer;
      .card-img {
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        height: max-content;
        overflow: hidden;
        margin-bottom: 4px;
        position: relative;
        width: 100%;
        max-width: 224px;
        &:after {
          content: '';
          display: block;
          padding-top: 100%;
        }
      }
      .card-name {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1; /* number of lines to show */
        line-clamp: 1;
        -webkit-box-orient: vertical;
      }
      .card-title {
        height: 50px;
        @media screen and (max-width: ${MEDIA_WIDTHS.upToSmall}px) {
          height: 48px;
        }
        p {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2; /* number of lines to show */
          line-clamp: 2;
          -webkit-box-orient: vertical;
        }
      }
      .card-img-default {
        height: 206px;
        @media screen and (max-width: ${MEDIA_WIDTHS.upToMedium}px) {
          height: 120px !important;
        }
        @media screen and (max-width: ${MEDIA_WIDTHS.upToLarge}px) {
          height: 222px;
        }
      }
    }
  }

  @media screen and (max-width: ${MEDIA_WIDTHS.upToMedium}px) {
    max-width: 156px;
    max-height: 232px;
    margin: 0 auto;
    .wrap-content {
      .card {
        .card-img {
          max-width: 156px;
        }
      }
    }
  }
`
