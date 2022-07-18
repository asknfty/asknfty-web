import React from 'react'
import { Wrapper } from './styled'
import { TextNormal, Image } from 'Components'
import { IMAGE_CARD_DEFAULT, IMG_DEFAULT } from 'Assets'
import { useHistory } from 'react-router-dom'
import { ROUTE_NAMES } from 'Routes/constant'
import { Skeleton } from 'antd'

const CardSearch = ({ url, name, title, id, loading }) => {
  const history = useHistory()

  const goToDetail = () => {
    history.push(ROUTE_NAMES.COLLECTION_DETAIL(id))
  }

  if (url && url.includes('ipfs')) {
    console.log('Boy ==>', url)
  }

  const renderImage = () => {
    if (url && url.includes('ipfs')) { // Show image card default if type image is IPFS
      return <div className="card-img" style={{ backgroundImage: `url(${IMAGE_CARD_DEFAULT})` }}></div>
    } else if (url) {
      return <div className="card-img" style={{ backgroundImage: `url(${url})` }}></div>
    } else return <Image src={IMG_DEFAULT} className="card-img-default" alt="default" />
  }

  return (
    <Wrapper>
      <Skeleton className="ske" active avatar title={false} loading={loading}>
        <div className="wrap-content">
          <div className="card" onClick={goToDetail}>
            {renderImage()}
            <TextNormal
              fontWeight="fw_700"
              fontSize="size_18"
              lineHeight="24px"
              color="text_grey"
              className="card-name"
            >
              {name || ''}
            </TextNormal>
            <div className="card-title">
              <TextNormal fontSize="size_16" color="title_grey" lineHeight="24px">
                {title || ''}
              </TextNormal>
            </div>
          </div>
        </div>
      </Skeleton>
    </Wrapper>
  )
}

export default CardSearch
