import React from 'react'
import { Wrapper } from './styled'
import { TextNormal, Image } from 'Components'
import { IMG_DEFAULT } from 'Assets'
import { useHistory } from 'react-router-dom'
import { ROUTE_NAMES } from 'Routes/constant'
import { Skeleton } from 'antd'

const CardSearch = ({ url, name, title, id, loading }) => {
  const history = useHistory()

  const goToDetail = () => {
    history.push(ROUTE_NAMES.COLLECTION_DETAIL(id))
  }

  return (
    <Wrapper>
      <Skeleton className="ske" active avatar title={false} loading={loading}>
        <div className="wrap-content">
          <div className="card" onClick={goToDetail}>
            {(url && !url.includes('ipfs')) ? (
              <div className="card-img" style={{ backgroundImage: `url(${url})` }}></div>
            ) : (
              <Image src={IMG_DEFAULT} className="card-img-default" alt="default" />
            )}
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
