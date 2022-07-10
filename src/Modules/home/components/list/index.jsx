import { Button, List, Row, Skeleton } from 'antd'
import { getNftAllCollectionAPI } from 'Apis';
import { BUTTON_IMAGE } from 'Assets';
import axios from 'axios';
import { ButtonImage } from 'Components';
import CardSearch from 'Components/cardSearch';
import { useGetNftAllCollection } from 'Hooks';
import { getNftAllCollection } from 'Modules/home/store/actions';
import React, { useState, useEffect } from 'react'

const COUNT_ITEM_LOAD_MORE = 10

const ListNFT = () => {
    const [initLoading, setInitLoading] = useState(true)
    const [loading, setLoading] = useState(false)
    const [nftCollectionName, setNftCollectionName] = useState([])
    const [list, setList] = useState([])
    const [pageLoadMore, setPageLoadMore] = useState(0)

    const { data, getNftAllCollectionAction, pagination, isLoading, queries } = useGetNftAllCollection()

    const { page, pageSize, total } = pagination

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
        <>
            <Row gutter={[24, 40]}>
                {
                    list && list.map((item, index) => (
                        <Skeleton key={index} active avatar title={false} loading={item?.loading}>
                            <CardSearch url={item?.logo_url} name={item?.collection_name} title={item?.description} />
                        </Skeleton>
                    ))
                }
            </Row>
            {loadMore}
        </>
    )
}

export default ListNFT