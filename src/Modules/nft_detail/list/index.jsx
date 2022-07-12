import { Avatar } from 'antd'
import { IMG_DEFAULT } from 'Assets'
import { TextNormal } from 'Components'
import React from 'react'
import { ListWrapper } from './styled'

const List = ({ dataCollection }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3
  }

  const { logo_url, collection_name, max_items } = dataCollection
  return (
    <ListWrapper>
      <TextNormal fontWeight="fw_700" fontSize="size_32" color="text_grey">
        More from this collection
      </TextNormal>
      <div className="list__content">
        <div className="list__content__left">
          <div className="list__content__left--avatar">
            <Avatar size={160} src={logo_url || IMG_DEFAULT} />
          </div>
          <TextNormal fontWeight="fw_700" fontSize="size_32" color="text_grey">
            {collection_name}
          </TextNormal>
          <TextNormal color="title_grey" marginBottom={10} marginTop={10}>
            {max_items} NFTs
          </TextNormal>
          {/* <TextNormal color="title_grey" className="create__by">
            By
            <Avatar size={32} src="https://picsum.photos/200/300" />
            <TextNormal color="text_grey">bterwiliger</TextNormal>
          </TextNormal> */}
        </div>
        <div className="list__content__right">
          {/* <TextNormal color="title_grey" className="create__by">
            By
            <Avatar size={32} src="https://picsum.photos/200/300" />
            <TextNormal color="text_grey">bterwiliger</TextNormal>
          </TextNormal> */}
        </div>
      </div>
    </ListWrapper>
  )
}

export default List
