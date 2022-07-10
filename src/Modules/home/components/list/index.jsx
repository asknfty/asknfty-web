import { Button, List, Row, Skeleton } from 'antd'
import { BUTTON_IMAGE } from 'Assets';
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

    const { data, getNftAllCollectionAction, pagination, isLoading } = useGetNftAllCollection()

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
        getNftAllCollectionAction({ params: { page: page + 1, pageSize: COUNT_ITEM_LOAD_MORE, queries: 'nam' } })
        const newData = nftCollectionName.concat(data?.records)
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
                        <Skeleton key={index} active avatar title={false} loading={loading}>
                            <CardSearch url={item?.logo_url} name={item?.collection_name} title={item?.description} />
                        </Skeleton>
                    ))
                }
            </Row>
            {loadMore}
        </>


        // <List
        //     className="loadmore-list"
        //     itemLayout="horizontal"
        //     loadMore={loadMore}
        //     dataSource={list}
        //     grid={{
        //         gutter: [24, 40],
        //         xs: 2,
        //         sm: 3,
        //         md: 4,
        //         lg: 4,
        //         xl: 4,
        //         xxl: 4
        //     }}
        //     renderItem={(item) => (
        //         <Skeleton active avatar title={false} loading={isLoading}>
        //             <CardSearch url={item?.logo_url} name={item?.collection_name} title={item?.description} />
        //         </Skeleton>
        //     )}
        // />
    )
}

export default ListNFT