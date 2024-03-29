import React, { useState } from 'react'
import { LinkIcon } from '../index'
import { Wrapper, Left, Right, Link } from './styled'
import { LOGO_COMPANY } from 'Assets'
import { CloseOutlined } from '@ant-design/icons'
import Login from './components/login'
import { useGetNftAllCollection } from 'Hooks'

const Header = ({ ...rest }) => {
    const [isOpen, setIsOpen] = useState(false)
    const { deleteNftAllCollectionAction } = useGetNftAllCollection()
    return (
        <Wrapper {...rest}>
            <Left>
                <LinkIcon to="/" className="logo__company" src={LOGO_COMPANY} onClick={deleteNftAllCollectionAction} />
            </Left>
            <Right className={isOpen && 'show'}>
                {isOpen && (
                    <CloseOutlined className="close-outlined" onClick={(e) => setIsOpen(!isOpen)} color="#ffffff" />
                )}
                <Link className="link__page" to="/" onClick={deleteNftAllCollectionAction}>
                    askNFTY
                </Link>
                <Link className="link__page" to='/search'>
                    Search
                </Link>
                <a className="link__page partner-link" target="_blank" href='https://forms.gle/hEnruK6yARuYrMZ26'>
                    Partner with Us
                </a>
            </Right>
            <button className="hamburger-icon" onClick={(e) => setIsOpen(!isOpen)}>
                <svg width="44" height="44" viewBox="0 0 100 100">
                    <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"></path>
                    <path className="line line2" d="M 20,50 H 80"></path>
                    <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"></path>
                </svg>
            </button>
        </Wrapper>
    )
}

export default Header