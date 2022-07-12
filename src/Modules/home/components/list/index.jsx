import { Button, Col, List, Row, Skeleton, Space, Spin } from 'antd'
import { getNftAllCollectionAPI } from 'Apis'
import { BUTTON_IMAGE, NOT_FOUND } from 'Assets'
import { ButtonImage, TextNormal, CardSearch } from 'Components'
import { useGetNftAllCollection } from 'Hooks'
import React, { useState, useEffect } from 'react'
import { Wrapper } from './styled'

const COUNT_ITEM_LOAD_MORE = 10

const ListNFT = () => {
  const [nftCollectionName, setNftCollectionName] = useState([])
  const [list, setList] = useState([])
  const [pageLoadMore, setPageLoadMore] = useState(0)

  const { data, pagination, queries, isLoading } = useGetNftAllCollection()

  const { pageSize, total } = pagination

  useEffect(() => {
    setList(data?.records)
    setNftCollectionName(data?.records)
  }, [data])

  const onLoadMore = async () => {
    setList(
      nftCollectionName.concat(
        [...new Array(COUNT_ITEM_LOAD_MORE)].map(() => ({
          loading: true
        }))
      )
    )
    const loadMoreData = await getNftAllCollectionAPI({ params: { page: pageLoadMore + 1, pageSize: pageSize, queries: queries } })
    setPageLoadMore(pageLoadMore + 1)
    const newData = nftCollectionName.concat(loadMoreData.data?.records)
    setNftCollectionName(newData)
    setList(newData)
    window.dispatchEvent(new Event('resize'))
  }

  const loadMore =
    (data?.records && total - COUNT_ITEM_LOAD_MORE > 0) ? (
      <ButtonImage className="btn-image" imageButton={BUTTON_IMAGE} onClick={onLoadMore} text="Load More" color="quote_text" fontWeight="fw_700" />
    ) : null;
  return (
    <Spin spinning={isLoading} size="large">
      <Wrapper>
        <Row gutter={[24, 40]}>
          {
            list && list.map((item, index) => (
              <Col span={12} xl={6} md={8} key={index}>
                <Skeleton className="ske" active avatar title={false} loading={item?.loading}>
                  <CardSearch id={item?.id} url={item?.logo_url || item?.banner_url} name={item?.collection_name} title={item?.description} />
                </Skeleton>
              </Col>
            ))
          }
          {total === 0 && <div className="not-found">
            <img src={NOT_FOUND} alt="not-found" />
            <TextNormal fontSize="size_20" fontWeight="fw_700">No collections found. Please try another keyword.</TextNormal>
          </div>
          }
        </Row>
        {loadMore}
      </Wrapper>
    </Spin>
  )
}

export default ListNFT