import styled from "styled-components"

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
                /* background-image: url('https://static-nft.pancakeswap.com/mainnet/0xDf7952B35f24aCF7fC0487D01c8d5690a60DBa07/sparkle-1000.png'); */
                /* background-image: url('https://img.seadn.io/files/1b7241651acf9119214584f794d25655.png?fit=max&w=600'); */
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
        }
    }
`