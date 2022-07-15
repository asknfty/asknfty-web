import { Col, Row, Skeleton, Spin } from 'antd'
import { getNftAllCollectionAPI } from 'Apis'
import { ICON_LOAD_MORE, NOT_FOUND } from 'Assets'
import { TextNormal, CardSearch, Image } from 'Components'
import { PAGESIZE_DEF } from 'Constants'
import { useGetNftAllCollection, useInfiniteScroll } from 'Hooks'
import React, { useState, useEffect } from 'react'
import { Wrapper } from './styled'

const ListNFT = () => {
  const [list, setList] = useState([])
  const [pageLoadMore, setPageLoadMore] = useState(0)
  const [isLoadingMore, setIsLoadingMore] = useState(false)

  const { data, pagination, queries, isLoading } = useGetNftAllCollection()

  const { pageSize, total } = pagination

  const allowLoadMore = !!data.records?.length && total - list.length > 0

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
    const loadMoreData = await getNftAllCollectionAPI({
      params: { page: pageLoadMore + 1, pageSize: pageSize, queries: queries }
    })

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
          {(list || []).map((item, index) => (
            <Col span={12} xl={6} md={8} key={index}>
              <CardSearch
                id={item?.id}
                url={item?.logo_url || item?.banner_url}
                name={item?.collection_name}
                title={item?.description}
                loading={item.loading}
              />
            </Col>
          ))}
          {total === 0 && (
            <div className="not-found">
              <img src={NOT_FOUND} alt="not-found" />
              <TextNormal fontSize="size_20" fontWeight="fw_700">
                No collections found. Please try another keyword.
              </TextNormal>
            </div>
          )}
        </Row>
        {allowLoadMore && <Image src={ICON_LOAD_MORE} alt="load-more" className="load__more" />}
      </Wrapper>
    </Spin>
  )
}

export default ListNFT
