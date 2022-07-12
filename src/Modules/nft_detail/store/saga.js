import { put, takeLatest } from 'redux-saga/effects'

import { REQUEST, SUCCESS, FAILURE } from 'Stores'

import { GET_NFT_DETAIL } from './constants'

import { getNftItemDetailAPI } from 'Apis'

export function* getNftDetailSaga({ payload }) {
    const { callback } = payload
    try {
        const { code, data } = yield getNftItemDetailAPI(payload)
        if (code === 'MAR0000') {
            yield put({
                type: SUCCESS(GET_NFT_DETAIL),
                data
            })
            if (data.collection) {
                callback(data.collection.id)
            }
        }
    } catch (error) {
        yield put({
            type: FAILURE(GET_NFT_DETAIL),
            error
        })
    }
}

export default function* nftSaga() {
    yield takeLatest(REQUEST(GET_NFT_DETAIL), getNftDetailSaga)
}