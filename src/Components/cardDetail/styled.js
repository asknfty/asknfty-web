import styled from "styled-components"
import { MEDIA_WIDTHS } from "Themes"

export const Wrapper = styled.div`
 max-width: 256px;
    transition: opacity 200ms ease 0s;
    box-shadow: 6px 6px 0px #636363;
    border: 1px solid #4E4B4B;
    background: white;
    position: relative;
    overflow: hidden;
    transition: transform .2s;
    &:hover {
        transform: scale(1.03);
    }
    .wrap-content {
        width: 100%;
        height: 100%;
        overflow: inherit;
        text-align: left;
        .card {
            padding: 16px;
            .card-img {
                background-repeat: no-repeat;
                background-size: contain;
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
                    letter-spacing: -0.2px;
                }
            }
            .card-img-default {
                height: 224px;
                @media screen and (max-width: ${MEDIA_WIDTHS.upToMedium}px){
                    height: 113px;
                }
            }
            .card-price {
                background: #1F1E1E;
                padding: 4px 8px;
                width: fit-content;
            }
        }
    }
    @media screen and (max-width: ${MEDIA_WIDTHS.upToMedium}px) {
        max-width: 156px;
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