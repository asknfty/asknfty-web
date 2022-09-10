import { Col, Row, Spin } from "antd"
import { getNftAllCollectionAPI } from "Apis"
import { ICON_LOAD_MORE, NOT_FOUND } from "Assets"
import { TextNormal, CardSearch, Image, LoadMore } from "Components"
import { PAGESIZE_DEF, PAGE_SIZE_MAX } from "Constants"
import { useGetNftAllCollection, useInfiniteScroll } from "Hooks"
import React, { useState, useEffect } from "react"
import { Wrapper } from "./styled"

const ListNFT = () => {
  const [list, setList] = useState([])
  const [pageLoadMore, setPageLoadMore] = useState(0)
  const [isLoadingMore, setIsLoadingMore] = useState(false)
  const [allowLoadMore, setAllowLoadMore] = useState(true)

  const { data, pagination, queries, isLoading } = useGetNftAllCollection()

  const { page_size } = pagination

  useEffect(() => {
    setList(data.records || [])
  }, [data])

  // reset pageLoadMore when research data
  useEffect(() => {
    setPageLoadMore(0)
    setAllowLoadMore(true)
  }, [data])

  const onLoadMore = async () => {
    if (pageLoadMore < PAGE_SIZE_MAX && queries) {
      setIsLoadingMore(true)
      // add items have loading ==> fake data before callAPI
      const listLoading = list.concat(
        [...new Array(PAGESIZE_DEF)].map(() => ({
          loading: true,
        }))
      )
      setList(listLoading)
      const loadMoreData = await getNftAllCollectionAPI({
        params: {
          page: pageLoadMore + 1,
          pageSize: page_size,
          queries
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
                loading={item?.loading}
              />
            </Col>
          ))}
          {queries && !data.records ? (
            <div className="not-found">
              <img src={NOT_FOUND} alt="not-found" />
              <TextNormal fontSize="size_20" fontWeight="fw_700">
                No collections found. Please try another keyword.
              </TextNormal>
            </div>
          ) : null}
        </Row>
        {isLoadingMore ? (
          <LoadMore className="loading" />
        ) : (
          allowLoadMore && data.records && pageLoadMore < PAGE_SIZE_MAX && (
            <Image
              src={ICON_LOAD_MORE}
              alt="load-more"
              className="load__more"
            />
          )
        )}
      </Wrapper>
    </Spin>
  )
}

export default ListNFT
