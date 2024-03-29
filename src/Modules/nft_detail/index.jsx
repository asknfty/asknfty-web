import { useGetNftAllItem, useGetNftDetail, useGetDetailNftCollection } from 'Hooks'
import HomeLayout from 'Modules/layouts/home'
import React, { useMemo } from 'react'
import { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { ROUTE_NAMES } from 'Routes/constant'
import Detail from './detail'
import Header from './header'
import List from './list'

const NFTDetailScreen = () => {
  const history = useHistory()
  const { nftId } = useParams()

  const { data, getNftDetailAction } = useGetNftDetail()
  const { data: dataNftAll, getNftAllItemAction } = useGetNftAllItem()
  const { data: dataCollection, getDetailNftCollectionAction } = useGetDetailNftCollection()

  useEffect(() => {
    getNftDetailAction({ nftId })
  }, [nftId])

  const collectionId = useMemo(() => (data.collection ? data.collection.id : ''), [data])

  useEffect(() => {
    if (collectionId) {
      getNftAllItemAction({ params: { page: 1, pageSize: 20, filters: collectionId } })
      getDetailNftCollectionAction({
        collectionId: collectionId,
        params: {
          includeFields: ['logo_url', 'collection_name', 'max_items']
        }
      })
    }
  }, [collectionId])

  const goToCollectionDetail = () => {
    if (collectionId) {
      history.push(ROUTE_NAMES.COLLECTION_DETAIL(collectionId))
    }
  }

  return (
    <HomeLayout>
      <Header data={data} goToCollectionDetail={goToCollectionDetail} collectionId={collectionId} />
      <Detail data={data} dataCollection={dataCollection} />
      <List
        dataCollection={dataCollection}
        dataNftAll={dataNftAll}
        goToCollectionDetail={goToCollectionDetail}
      />
    </HomeLayout>
  )
}

export default NFTDetailScreen
