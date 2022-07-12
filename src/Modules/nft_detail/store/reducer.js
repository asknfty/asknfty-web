import { LOCATION_CHANGE } from 'connected-react-router'
import { createReducer, updateObject, REQUEST, SUCCESS, FAILURE } from 'Stores'
import { GET_NFT_DETAIL } from './constants'

export const initialState = {
    isLoading: false,
    data: {},
    error: null
}

function getNFTDetailRequest(state) {
    return updateObject(state, {
        isLoading: true
    })
}

function getNFTDetailSuccess(state, { data }) {
    return updateObject(state, {
        isLoading: false,
        data
    })
}

function getNFTDetailFailure(state, { error }) {
    return updateObject(state, {
        isLoading: false,
        error
    })
}

function resetState(state) {
    return updateObject(state, {
      ...initialState
    })
  }

export default createReducer(initialState, {
    [REQUEST(GET_NFT_DETAIL)]: getNFTDetailRequest,
    [SUCCESS(GET_NFT_DETAIL)]: getNFTDetailSuccess,
    [FAILURE(GET_NFT_DETAIL)]: getNFTDetailFailure,

    [LOCATION_CHANGE]: resetState // reset state when change route
})