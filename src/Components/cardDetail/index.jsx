import React from 'react'
import { Wrapper } from './styled'
import { TextNormal, Image } from 'Components'
import { IMAGE_CARD_DEFAULT, IMG_DEFAULT } from 'Assets'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import { ROUTE_NAMES } from 'Routes/constant'
import { Skeleton } from 'antd'

const CardDetail = ({ url, favorites, order, name, price, id, loading, ...rest }) => {
  const history = useHistory()

  const goToDetail = () => {
    history.push(ROUTE_NAMES.NFT_DETAIL(id))
  }

  const renderImage = () => {
    if (url && url.includes('ipfs') && !url.includes('https')) { // Show image card default if type image is IPFS
      return <div className="card-img" style={{ backgroundImage: `url(${IMAGE_CARD_DEFAULT})` }}></div>
    } else if (url) {
      return <div className="card-img" style={{ backgroundImage: `url(${url})` }}></div>
    } else return <Image src={IMG_DEFAULT} className="card-img-default" alt="default" />
  }
  return (
    <Wrapper {...rest}>
      <Skeleton className="ske" active avatar title={false} loading={loading}>
        <div className="wrap-content">
          <div className="card" onClick={goToDetail}>
            {renderImage()}
            <TextNormal fontSize="size_16" lineHeight="24px" color="title_grey" className="card-name">
              #{order || 0}
            </TextNormal>
            <div className="card-title">
              <TextNormal fontSize="size_18" fontWeight="fw_700" color="text_grey" lineHeight="24px">
                {name || ''}
              </TextNormal>
            </div>
            {/* <div className="card-price">
              <TextNormal fontSize="size_20" lineHeight="28px" fontWeight="fw_700" color="white"> 1000</TextNormal>
            </div> */}
          </div>
        </div>
      </Skeleton>
    </Wrapper>
  )
}

CardDetail.defaultProps = {
  url: '',
  favorites: 0,
  order: '',
  name: '',
  price: 0
}

CardDetail.propTypes = {
  url: PropTypes.string,
  favorites: PropTypes.number,
  order: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number
}

export default CardDetail
