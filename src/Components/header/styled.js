import styled from 'styled-components'
import { MEDIA_WIDTHS } from 'Themes'
import { InternalLink } from '../link'

export const Wrapper = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.primary};
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo__company {
        padding: 25px 32px;
    }
    .hamburger-icon {
        display: inline-flex;
        background-color: transparent;
        border: none;
        padding: 0;
        background: ${({ theme }) => theme.quote_text};
        margin-right: 16px;
        margin-top: 15px;
        margin-bottom: 15px;
        @media screen and (min-width: ${MEDIA_WIDTHS.upToMedium}px) {
            display: none;
        }
    .line {
        fill: none;
        stroke: #ffffff;
        stroke-width: 6;
        transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
            stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
    }
    .line1 {
        stroke-dasharray: 60 207;
        stroke-width: 6;
    }
    .line2 {
        stroke-dasharray: 60 60;
        stroke-width: 6;
    }
    .line3 {
        stroke-dasharray: 60 207;
        stroke-width: 6;
    }
    &.opened .line1 {
        stroke-dasharray: 90 207;
        stroke-dashoffset: -134;
        stroke-width: 6;
    }
    &.opened .line2 {
        stroke-dasharray: 1 60;
        stroke-dashoffset: -30;
        stroke-width: 6;
    }
    &.opened .line3 {
        stroke-dasharray: 90 207;
        stroke-dashoffset: -134;
        stroke-width: 6;
    }
}

`

export const Left = styled.div`
    width: 40%;
`

export const Right = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    font-size: 20px;
    position: relative;
    .partner-link {
        position: relative;
        &:after {
            position: absolute;
            content:'';
            width: 2px;
            height: 40px;
            background: ${({ theme }) => theme.secondary};
            top: 50%;
            margin-left: 32px;
            transform: translateY(-50%);
        }
    }
    a {
        padding: 25px 32px;
        color: white;
    }

    .close-outlined {
        color: white;
        margin-left: auto;
        padding-right: 30px;
        padding-top: 30px;
    }

    @media screen and (max-width: ${MEDIA_WIDTHS.upToMedium}px) {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        margin-left: 0;
        z-index: 500;
        background-color: ${({ theme }) => theme.primary};
        max-width: 350px;
        width: 100%;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
        transform: translateX(-100%); 
        &.show {
            transform: translateX(0);
            transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
        }
        @media screen and (max-width: ${MEDIA_WIDTHS.upToSmall}px) {
            max-width: 250px;
        }
    }
`
export const Link = styled(InternalLink)`
`