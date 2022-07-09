import { Button, List, Skeleton } from 'antd'
import { BUTTON_IMAGE } from 'Assets';
import { ButtonImage } from 'Components';
import CardSearch from 'Components/cardSearch';
import { useGetNftAllCollection } from 'Hooks';
import { getNftAllCollection } from 'Modules/home/store/actions';
import React, { useState, useEffect } from 'react'

const COUNT_ITEM_LOAD_MORE = 10
const fakeDataUrl = `https://randomuser.me/api/?results=${COUNT_ITEM_LOAD_MORE}&inc=name,gender,email,nat,picture&noinfo`;

const ListNFT = () => {
    const [initLoading, setInitLoading] = useState(true)
    const [loading, setLoading] = useState(false)
    const [nftCollection, setNftCollectionName] = useState()
    const [list, setList] = useState([])

    const { data, getNftAllCollectionAction } = useGetNftAllCollection()

    useEffect(() => {
        setNftCollectionName(data)
        setList(data?.records)
    }, [data])

    // const onLoadMore = () => {
    //     setLoading(true)
    //     setList(
    //         nftCollection.concat(
    //             [...new Array(COUNT_ITEM_LOAD_MORE)].map(() => ({
    //                 loading: true,
    //                 name: {},
    //                 picture: {}
    //             }))
    //         )
    //     )

    //     getNftAllCollection({params: {}})

    //     fetch(fakeDataUrl)
    //         .then((res) => res.json())
    //         .then((res) => {
    //             const newData = data.concat(res.results)
    //             setData(newData)
    //             setList(newData)
    //             setLoading(false)
    //             window.dispatchEvent(new Event('resize'))
    //         })

    // }

    // const loadMore =
    //     !initLoading && !loading ? (
    //         <ButtonImage className="btn-image" imageButton={BUTTON_IMAGE} onClick={onLoadMore} text="Load More" color="quote_text" fontWeight="fw_700" />
    //     ) : null;
    return (
        <List
            className="loadmore-list"
            // loading={initLoading}
            itemLayout="horizontal"
            // loadMore={loadMore}
            dataSource={list}
            grid={{
                gutter: [24, 40],
                xs: 2,
                sm: 3,
                md: 4,
                lg: 4,
                xl: 4,
                xxl: 4
            }}
            renderItem={(item) => (
                <CardSearch url={item?.logo_url} name={item?.collection_name} title={item?.description} />

                // <Skeleton active avatar title={false} loading={item.loading}>
                // </Skeleton>
            )}
        />
    )
}

export default ListNFT