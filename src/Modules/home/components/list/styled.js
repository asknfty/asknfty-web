import { MEDIA_WIDTHS } from 'Themes'
import styled from 'styled-components'

export const Wrapper = styled.div`
    /* text-align: center; */
    .ske {
        background: white;
        display: flex;
        flex-direction: column;
        border-radius: 4px;
        padding-top: 20px;
        padding-bottom: 20px;
    }
    .ant-skeleton-header {
        padding-right: unset;
    }
    .ant-skeleton-avatar {
        border-radius: unset !important;
        max-width: 220px;
        width: 100%;
        height: 222px;
        margin-bottom: 8px;
    }
    .ant-skeleton-paragraph {
        padding-right: 16px;
        padding-left: 16px;
    }
    @media screen and (max-width: ${MEDIA_WIDTHS.upToSmall}px) {
        .ant-skeleton-avatar {
            max-width: 132px;
            height: 132px;
        }
    }
    .not-found {
        margin: 0 auto;
        text-align: center;
        img {
            margin-bottom: 24px;
        }
    }
`