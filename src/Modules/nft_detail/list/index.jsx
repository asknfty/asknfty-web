import { Avatar } from 'antd'
import { IMAGE_BTN_NEXT, IMAGE_BTN_PREV, IMG_DEFAULT } from 'Assets'
import { CardDetail, Image, TextNormal } from 'Components'
import React, { useRef } from 'react'
import { ListWrapper } from './styled'
import Slider from 'react-slick'
import { ROUTE_NAMES } from 'Routes/constant'
import { useHistory } from 'react-router-dom'

const List = ({ dataCollection, dataNftAll, collectionId }) => {
  const history = useHistory()
  const settings = {
    dots: false,
    arrow: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 3
  }

  const sliderRef = useRef()

  const { logo_url, collection_name, max_items } = dataCollection
  const { records } = dataNftAll

  const onChangeSlide = (action) => {
    if (action === 'NEXT') sliderRef.current.slickNext()
    else sliderRef.current.slickPrev()
  }

  const goToCollectionDetail = () => {
    history.push(ROUTE_NAMES.COLLECTION_DETAIL(collectionId))
  }

  return (
    <ListWrapper>
      <TextNormal fontWeight="fw_700" fontSize="size_32" color="text_grey">
        More from this collection
      </TextNormal>
      <div className="list__content">
        <div className="list__content__left">
          <div className="list__content__left--avatar"  onClick={goToCollectionDetail}>
            <Avatar size={160} src={logo_url || IMG_DEFAULT} />
          </div>
          <TextNormal fontWeight="fw_700" fontSize="size_32" color="text_grey">
            {collection_name || '-'}
          </TextNormal>
          <TextNormal color="title_grey" marginBottom={10} marginTop={10}>
            {max_items} NFTs
          </TextNormal>
          {/* Hide for first demo */}
          {/* <TextNormal color="title_grey" className="create__by">
            By
            <Avatar size={32} src="https://picsum.photos/200/300" />
            <TextNormal color="text_grey">bterwiliger</TextNormal>
          </TextNormal> */}
        </div >
        <div className="list__content__right">
          <Slider {...settings} ref={sliderRef}>
            {(records || [...new Array(8)]).map((item, index) => (
              <CardDetail
                key={index}
                className="card-detail"
                url={item?.image_url}
                id={item?.id}
                order={item?.token_id}
                name={item?.token_name}
              />
            ))}
          </Slider>
          <div className="btn__group">
            <Image onClick={() => onChangeSlide('PREV')} src={IMAGE_BTN_PREV} />
            <Image onClick={() => onChangeSlide('NEXT')} src={IMAGE_BTN_NEXT} />
          </div>
        </div>
      </div >
    </ListWrapper >
  )
}

export default List
