import { Skeleton, Spin, Row, Col } from 'antd'
import { getNftAllItemAPI } from 'Apis'
import { ICON_LOAD_MORE } from 'Assets'
import { CardDetail, Image } from 'Components'
import { PAGESIZE_DEF } from 'Constants'
import { useGetNftAllItem, useInfiniteScroll } from 'Hooks'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Wrapper } from './styled'
const CollectionList = () => {
  const [list, setList] = useState([])
  const [pageLoadMore, setPageLoadMore] = useState(0)
  const [isLoadingMore, setIsLoadingMore] = useState(false)

  const { data, isLoading, getNftAllItemAction } = useGetNftAllItem()

  console.log('Boy ==>', data)

  const { pageSize, total } = data

  const { collectionId } = useParams()

  const allowLoadMore = !!data.records?.length && total - list.length > 0

  useEffect(() => {
    getNftAllItemAction({ params: { page: 1, pageSize: PAGESIZE_DEF, filters: collectionId } })
  }, [])

  useEffect(() => {
    setList(data.records || [])
  }, [data])

  const onLoadMore = async () => {
    setIsLoadingMore(true)
    const listLoading = list.concat(
      [...new Array(PAGESIZE_DEF)].map(() => ({
        loading: true
      }))
    )
    setList(listLoading)

    const loadMoreData = await getNftAllItemAPI({ params: { page: pageLoadMore + 1, pageSize: pageSize, filters: collectionId } })
    
    setIsLoadingMore(false)
    setPageLoadMore((prevPageLoadMore) => prevPageLoadMore + 1)

    listLoading.splice(listLoading.length - PAGESIZE_DEF, listLoading.length)

    setList(listLoading.concat(loadMoreData.data.records))
    setIsFetching(false)

    window.dispatchEvent(new Event('resize'))
  }

  const [setIsFetching] = useInfiniteScroll(onLoadMore, isLoadingMore, allowLoadMore)

  return (
    <Spin spinning={isLoading} size="large">
      <Wrapper>
        <Row gutter={[24, 40]}>
          {
            (list || []).map((item, index) => (
              <Col span={12} xl={6} md={8} key={index}>
                <Skeleton className="ske" active avatar title={false} loading={item?.loading}>
                  <CardDetail id={item.id} url={item.image_url} order={item.token_id} name={item.token_name ? item.token_name : `#${item.token_id}`} />
                </Skeleton>
              </Col>
            ))
          }
        </Row>
        {allowLoadMore && (
          <Image src={ICON_LOAD_MORE} alt="load-more" className="load__more" />
        )}
      </Wrapper>
    </Spin >
  )
}

export default CollectionList
