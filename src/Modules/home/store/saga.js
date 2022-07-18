import { put, takeLatest } from 'redux-saga/effects'

import { REQUEST, SUCCESS, FAILURE } from 'Stores'

import { GET_DETAILS_NFT_COLLECTION, GET_NFT_ALL_COLLECTION, GET_NFT_ALL_ITEM } from './constants'

import { getNftAllCollectionAPI, getNftAllItemAPI, getNftCollectionDetailAPI } from 'Apis'
import { API_CODE_SUCCESS } from 'Constants'

export function* getNftAllCollectionSaga({ payload }) {
  try {
    const { code, data } = yield getNftAllCollectionAPI(payload)
    const { result: nftAllCollection, ...pagination } = data
    if (API_CODE_SUCCESS.includes(code)) {
      yield put({
        type: SUCCESS(GET_NFT_ALL_COLLECTION),
        payload: {
          data,
          pagination,
          queries: payload.params.queries
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
  const { callback } = payload
  try {
    const { code, data, pagination } = yield getNftAllItemAPI(payload)
    if (API_CODE_SUCCESS.includes(code)) {
      yield put({
        type: SUCCESS(GET_NFT_ALL_ITEM),
        payload: {
          data,
          pagination
        }
      })
      if (callback) {
        callback()
      }
    }
  } catch (error) {
    yield put({
      type: FAILURE(GET_NFT_ALL_ITEM),
      error
    })
  }
}


export function* getDetailNftCollectionSaga({ payload }) {
  try {
    const { code, data } = yield getNftCollectionDetailAPI(payload)
    if (API_CODE_SUCCESS.includes(code)) {
      yield put({
        type: SUCCESS(GET_DETAILS_NFT_COLLECTION),
        payload: {
          data
        }
      })
    }
  } catch (error) {
    yield put({
      type: FAILURE(GET_DETAILS_NFT_COLLECTION),
      error
    })
  }
}

export default function* nftSaga() {
  yield takeLatest(REQUEST(GET_NFT_ALL_COLLECTION), getNftAllCollectionSaga)
  yield takeLatest(REQUEST(GET_DETAILS_NFT_COLLECTION), getDetailNftCollectionSaga)
  yield takeLatest(REQUEST(GET_NFT_ALL_ITEM), getNftAllItemSaga)
}