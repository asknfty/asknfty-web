import { ICON_ARROW_LEFT, IMG_DEFAULT } from 'Assets'
import { Image, TextNormal } from 'Components'
import { IMAGE_TYPES } from 'Constants'
import React from 'react'
import { HeaderWrapper } from './styled'

const Header = ({ data, goToCollectionDetail, collectionId }) => {

  
  const renderImage = (data) => {
    if ((data.content_type === IMAGE_TYPES.VIDEO) || (data.content_type === IMAGE_TYPES.MP3))
     return data.image_url
    return data.url
  }

  return (
    <HeaderWrapper>
      <div onClick={collectionId && goToCollectionDetail} className="header__back">
        <Image src={ICON_ARROW_LEFT} />
        <TextNormal fontWeight="fw_800">Back to collection</TextNormal>
      </div>
      <div className="header__avatar">
        <Image width={480} height={480} className="header__avatar__img" src={renderImage(data)} />
      </div>
      {/* <TextNormal fontWeight="fw_800" textAlign fontSize="size_28">
        Price Estimate: 22.43 ETH
      </TextNormal> */}
    </HeaderWrapper>
  )
}

export default Header
