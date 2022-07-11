import React from 'react'
import { Wrapper } from './styled'
import { TextNormal, Image } from 'Components'
import { ICON_HEART_OUTLINED, IMG_DEFAULT } from 'Assets'
import PropTypes from 'prop-types'

const CardDetail = ({ url, favorites, order, name, price }) => {
  return (
    <Wrapper>
      <div className="wrap-content">
        <div className="card">
          <div className="card__favorite">
            <Image src={ICON_HEART_OUTLINED} />
            <TextNormal className="card__favorite__text" fontWeight="fw_800" fontSize="size_16" color="black">
              {favorites}
            </TextNormal>
          </div>
          {url ? (
            <div className="card__favorite__img" style={{ backgroundImage: `url(${url})` }}></div>
          ) : (
            <Image src={IMG_DEFAULT} className="card__favorite__img" alt="default" />
          )}
          <TextNormal marginBottom={2} fontSize="size_16" color="grey_low">
            {`#${order}`}
          </TextNormal>
          <TextNormal marginBottom={4} fontWeight={800} fontSize="size_18" color="text_grey">
            {name}
          </TextNormal>
          <TextNormal fontWeight={700} color="text_red">
            {`${price} ETH`}
          </TextNormal>
        </div>
      </div>
    </Wrapper>
  )
}

CardDetail.defaultProps = {
  url: '',
  favorites: 0,
  order: 0,
  name: 'nothing',
  price: 0
}

CardDetail.propTypes = {
  url: PropTypes.string,
  favorites: PropTypes.number,
  order: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.number
}

export default CardDetail
