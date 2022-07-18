import { put, takeLatest } from 'redux-saga/effects'

import { REQUEST, SUCCESS, FAILURE } from 'Stores'

import { GET_NFT_DETAIL } from './constants'

import { getNftItemDetailAPI } from 'Apis'
import { API_CODE_SUCCESS } from 'Constants'

export function* getNftDetailSaga({ payload }) {
    try {
        const { code, data } = yield getNftItemDetailAPI(payload)
        if (API_CODE_SUCCESS.includes(code)) {
            yield put({
                type: SUCCESS(GET_NFT_DETAIL),
                data
            })
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