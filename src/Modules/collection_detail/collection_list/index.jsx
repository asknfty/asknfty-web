import { Spin, Row, Col } from "antd"
import { getNftAllItemAPI } from "Apis"
import { ICON_LOAD_MORE } from "Assets"
import { CardDetail, Image, LoadMore } from "Components"
import { PAGESIZE_DEF, PAGE_SIZE_MAX } from "Constants"
import { useGetNftAllItem, useInfiniteScroll } from "Hooks"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Wrapper } from "./styled"
const CollectionList = () => {
  const [list, setList] = useState([])
  const [pageLoadMore, setPageLoadMore] = useState(0)
  const [isLoadingMore, setIsLoadingMore] = useState(false)
  const [allowLoadMore, setAllowLoadMore] = useState(true)

  const { data, isLoading, getNftAllItemAction } = useGetNftAllItem()

  const { pageSize } = data

  const { collectionId } = useParams()

  useEffect(() => {
    getNftAllItemAction({
      params: {
        page: 0,
        pageSize: PAGESIZE_DEF,
        filters: collectionId,
      },
    })
  }, [])

  useEffect(() => {
    setList(data.records || [])
  }, [data])

  const onLoadMore = async () => {
    if (pageLoadMore < PAGE_SIZE_MAX && data.records.length) {
      setIsLoadingMore(true)
      // add items have loading ==> fake data before callAPI
      const listLoading = list.concat(
        [...new Array(PAGESIZE_DEF)].map(() => ({
          loading: true,
        }))
      )
      setList(listLoading)
      const loadMoreData = await getNftAllItemAPI({
        params: {
          page: pageLoadMore + 1,
          pageSize: pageSize,
          filters: collectionId,
        },
      })
      listLoading.splice(listLoading.length - PAGESIZE_DEF, listLoading.length)

      if (loadMoreData.data.records?.length) {
        // remove data fakeAPI
        setList(listLoading.concat(loadMoreData.data.records))
        setPageLoadMore((prev) => prev + 1)
      } else {
        setAllowLoadMore(false)
      }
      setIsLoadingMore(false)
      setIsFetching(false)
    } else {
      setIsFetching(false)
    }
  }

  const [setIsFetching] = useInfiniteScroll(
    onLoadMore,
    isLoadingMore,
    allowLoadMore
  )

  return (
    <Wrapper>
      <Spin spinning={isLoading} size="large">
        <Row gutter={[24, 40]}>
          {list.length > 0 &&
            list.map((item, index) => (
              <Col span={12} xl={6} md={8} key={index}>
                <CardDetail
                  id={item?.id}
                  url={item?.image_url}
                  order={item?.token_id}
                  name={
                    item?.token_name ? item?.token_name : `#${item?.token_id}`
                  }
                  loading={item?.loading}
                />
              </Col>
            ))}
        </Row>
        {isLoadingMore ? (
          <LoadMore margin="24px 0" />
        ) : (
          allowLoadMore &&
          data.records.length > 0 &&
          pageLoadMore < PAGE_SIZE_MAX && (
            <Image
              src={ICON_LOAD_MORE}
              alt="load-more"
              className="load__more"
            />
          )
        )}
      </Spin>
    </Wrapper>
  )
}

export default CollectionList
