import { useGetNftAllItem, useGetNftDetail, useGetDetailNftCollection } from 'Hooks'
import HomeLayout from 'Modules/layouts/home'
import React, { useMemo } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Detail from './detail'
import Header from './header'
import List from './list'

const NFTDetailScreen = () =>
{
  const { nftId } = useParams()

  const { data, getNftDetailAction } = useGetNftDetail()
  const { data: dataNftAll, getNftAllItemAction } = useGetNftAllItem()
  const { data: dataCollection, getDetailNftCollectionAction } = useGetDetailNftCollection()

  useEffect(() => {
    getNftDetailAction({ nftId })
  }, [])

  const collectionId = useMemo(() => data.collection ? data.collection.id : '', [data])

  useEffect(() => {
    if (collectionId) {
      getNftAllItemAction({ params: { page: 1, pageSize: 20, filters: collectionId } })
      getDetailNftCollectionAction({ collectionId: collectionId })
    }
  }, [collectionId])

  return (
    <HomeLayout>
      <Header data={data} />
      <Detail data={data} dataCollection={dataCollection} />
      <List dataCollection={dataCollection} dataNftAll={dataNftAll} collectionId={collectionId} />
    </HomeLayout>
  )
}

export default NFTDetailScreen
