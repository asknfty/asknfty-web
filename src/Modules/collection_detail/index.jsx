import HomeLayout from 'Modules/layouts/home'
import React from 'react'
import CollectionList from './collection_list'
import Description from './description'
import MainInfo from './main_info'
import { Wrapper, ListWrapper } from './styled'
import { useParams } from 'react-router-dom'
import { useGetDetailNftCollection } from 'Hooks'
import { useEffect } from 'react'
import { trimPublicAddress } from 'Utils'
import { Container } from 'Components'

const CollectionDetailScreen = () => {
  let { collectionId } = useParams()
  const { data, getDetailNftCollectionAction, isLoading } = useGetDetailNftCollection()
  useEffect(() => {
    getDetailNftCollectionAction({ collectionId })
  }, [])

  const {
    description,
    logo_url,
    banner_url,
    collection_name,
    collection_address,
    floor_price_wei_24_h,
    max_items,
    current_number_of_items,
    volume_wei_24_h,
    crypto_currency,
    token_price_estimation
  } = data

  return (
    <HomeLayout>
      <Wrapper>
        <Container className="main-info-container">
        <MainInfo
            logoUrl={logo_url}
            bannerUrl={banner_url}
            collectionName={collection_name}
            collectionAddress={trimPublicAddress(collection_address, 5)}
            floor_price_wei_24_h={floor_price_wei_24_h}
            totalItems={max_items}
            current_number_of_items={current_number_of_items}
            volume_wei_24_h={volume_wei_24_h}
            crypto_currency={crypto_currency === 'wei' && 'ETH'}
          />
        </Container>
        <Container className="collection-container">
          <Description
            description={description}
            token_price_estimation={token_price_estimation}
            isLoading={isLoading}
          />
          <ListWrapper>
            <CollectionList />
          </ListWrapper>
        </Container>
      </Wrapper>
    </HomeLayout>
  )
}

export default CollectionDetailScreen
