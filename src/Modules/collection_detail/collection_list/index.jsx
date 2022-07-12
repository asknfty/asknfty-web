import { Skeleton, Spin, Row, Col } from 'antd'
import { getNftAllItemAPI } from 'Apis'
import { BG_BUTTON_LOAD_MORE, BUTTON_IMAGE } from 'Assets'
import { ButtonImage, CardDetail } from 'Components'
import { useGetNftAllItem } from 'Hooks'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Wrapper } from './styled'

const COUNT_ITEM_LOAD_MORE = 10
const CollectionList = () => {
  const [nftCollectionName, setNftCollectionName] = useState([])
  const [list, setList] = useState([])
  const [pageLoadMore, setPageLoadMore] = useState(0)

  const { data, isLoading, getNftAllItemAction } = useGetNftAllItem()

  const { pageSize, total } = data

  const { collectionId } = useParams()

  useEffect(() => {
    getNftAllItemAction({ params: { page: 1, pageSize: 10, filters: collectionId } })
  }, [])

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
    const loadMoreData = await getNftAllItemAPI({ params: { page: pageLoadMore + 1, pageSize: pageSize, filters: collectionId } })
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
                  <CardDetail id={item.id} url={item.image_url} order={item.token_id} name={item.token_name} />
                </Skeleton>
              </Col>
            ))
          }
        </Row>
        {loadMore}
      </Wrapper>
    </Spin >
  )
}

export default CollectionList
