import { Tabs } from 'antd'
import HomeLayout from 'Modules/layouts/home'
import React, { useState } from 'react'
import CollectionList from './collection_list'
import Description from './description'
import MainInfo from './main_info'
import { Wrapper, ListWrapper } from './styled'
import { useParams } from 'react-router-dom'
import { useGetDetailNftCollection, getNftAllItemAction } from 'Hooks'
import { useEffect } from 'react'
import { trimPublicAddress, ethFormat } from 'Utils'
import { Container } from 'Components'

const { TabPane } = Tabs

const CollectionDetailScreen = () => {
  let { collectionId } = useParams()
  const { data, getDetailNftCollectionAction } = useGetDetailNftCollection()
  useEffect(() => {
    getDetailNftCollectionAction({ collectionId })
  }, [])

  console.log('data', data)

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
    crypto_currency
  } = data

  return (
    <HomeLayout>
      <Wrapper>
        <Container className="collection-container">
          <MainInfo
            logoUrl={logo_url}
            bannerUrl={banner_url}
            collectionName={collection_name}
            collectionAddress={trimPublicAddress(collection_address, 3)}
            floor_price_wei_24_h={ethFormat(floor_price_wei_24_h)}
            totalItems={max_items}
            current_number_of_items={current_number_of_items}
            volume_wei_24_h={ethFormat(volume_wei_24_h)}
            crypto_currency={crypto_currency === 'wei' && 'ETH'}
          />
          <Description description={description} />
          <ListWrapper>
            <CollectionList />
          </ListWrapper>
        </Container>
      </Wrapper>
    </HomeLayout>
  )
}

export default CollectionDetailScreen
