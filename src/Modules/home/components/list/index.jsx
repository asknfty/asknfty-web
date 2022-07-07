import { Button, List, Skeleton } from 'antd'
import { BUTTON_IMAGE } from 'Assets';
import { ButtonImage } from 'Components';
import CardSearch from 'Components/cardSearch';
import React, { useState } from 'react'
import { useEffect } from 'react'

const COUNT_ITEM_LOAD_MORE = 12
const fakeDataUrl = `https://randomuser.me/api/?results=${COUNT_ITEM_LOAD_MORE}&inc=name,gender,email,nat,picture&noinfo`;

const ListNFT = () => {
    const [initLoading, setInitLoading] = useState(true)
    const [loading, setLoading] = useState(false)
    const [list, setList] = useState([])
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(fakeDataUrl)
            .then((res) => res.json())
            .then((res) => {
                setInitLoading(false)
                setData(res.results)
                setList(res.results)
            })
    }, [])

    const onLoadMore = () => {
        setLoading(true)
        setList(
            data.concat(
                [...new Array(COUNT_ITEM_LOAD_MORE)].map(() => ({
                    loading: true,
                    name: {},
                    picture: {}
                }))
            )
        )

        fetch(fakeDataUrl)
            .then((res) => res.json())
            .then((res) => {
                const newData = data.concat(res.results)
                setData(newData)
                setList(newData)
                setLoading(false)
                window.dispatchEvent(new Event('resize'))
            })

    }

    const loadMore =
        !initLoading && !loading ? (
            <ButtonImage className="btn-image" imageButton={BUTTON_IMAGE} onClick={onLoadMore} text="Load More" color="quote_text" fontWeight="fw_700" />
        ) : null;
    return (
        <List
            className="loadmore-list"
            loading={initLoading}
            itemLayout="horizontal"
            loadMore={loadMore}
            dataSource={list}
            grid={{
                gutter: [24, 40],
                xs: 1,
                sm: 2,
                md: 4,
                lg: 4,
                xl: 4,
                xxl: 4
            }}
            renderItem={(item) => (
                <Skeleton active avatar title={false} loading={item.loading}>
                    <CardSearch url={item?.picture.large} name={item?.name.last} />
                </Skeleton>
            )}
        />
    )
}

export default ListNFT