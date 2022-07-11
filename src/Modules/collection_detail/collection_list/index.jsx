import { BG_BUTTON_LOAD_MORE } from 'Assets'
import { ButtonImage, CardDetail } from 'Components'
import React from 'react'
import { Wrapper } from './styled'

const CollectionList = () => {
  return (
    <Wrapper>
      <CardDetail favorites={10} order={1} name="Creatures of Leisure" price={0.034} />
      <CardDetail favorites={10} order={1} name="Creatures of Leisure" price={0.034} />
      <CardDetail favorites={10} order={1} name="Creatures of Leisure" price={0.034} />
      <CardDetail favorites={10} order={1} name="Creatures of Leisure" price={0.034} />
      <div className="load__more">
        <ButtonImage
          fontSize="size_16"
          fontWeight="fw_800"
          text="Load more"
          color="text_red"
          imageButton={BG_BUTTON_LOAD_MORE}
        />
      </div>
    </Wrapper>
  )
}

export default CollectionList
