import { put, takeLatest } from 'redux-saga/effects'
import { notification } from 'antd'

import { REQUEST, SUCCESS, FAILURE } from 'Stores'

import { GET_NFT_ALL_COLLECTION, GET_NFT_ALL_ITEM } from './constants'

import { getNftAllCollectionAPI, getNftAllItemAPI } from 'Apis'

export function* getNftAllCollectionSaga({ payload }) {
    try {
        const { code, data } = yield getNftAllCollectionAPI(payload)
        const { result: nftAllCollection, ...pagination } = data
        if (code === 200) {
            yield put({
                type: SUCCESS(GET_NFT_ALL_COLLECTION),
                payload: {
                    data,
                    pagination,
                    filter: payload?.params?.filter
                }
            })
        }
    } catch (error) {
        yield put({
            type: FAILURE(GET_NFT_ALL_COLLECTION),
            error
        })
    }
}

export function* getNftAllItemSaga({ payload }) {
    try {
        const { code, data } = yield getNftAllItemAPI(payload)
        const { result: nftAllItem, ...pagination } = data
        if (code === 200) {
            yield put({
                type: SUCCESS(GET_NFT_ALL_ITEM),
                payload: {
                    data,
                    pagination,
                    filter: payload?.params?.filter
                }
            })
        }
    } catch (error) {
        yield put({
            type: FAILURE(GET_NFT_ALL_ITEM),
            error
        })
    }
}

export default function* nftSaga() {
    yield takeLatest(REQUEST(GET_NFT_ALL_COLLECTION), getNftAllCollectionSaga)
}