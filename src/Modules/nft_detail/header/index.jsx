import { ICON_ARROW_LEFT, IMG_DEFAULT } from 'Assets'
import { Image, TextNormal } from 'Components'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { HeaderWrapper } from './styled'

const Header = ({ data }) => {
  const history = useHistory()
  const goBack = () => {
    history.goBack()
  }
  return (
    <HeaderWrapper>
      <div onClick={goBack} className="header__back">
        <Image src={ICON_ARROW_LEFT} />
        <TextNormal fontWeight="fw_800">Back to collection</TextNormal>
      </div>
      <div className="header__avatar">
        <Image width={480} height={480} className="header__avatar__img" src={data.url || IMG_DEFAULT} />
      </div>
      {/* <TextNormal fontWeight="fw_800" textAlign fontSize="size_28">
        Price Estimate: 22.43 ETH
      </TextNormal> */}
    </HeaderWrapper>
  )
}

export default Header
