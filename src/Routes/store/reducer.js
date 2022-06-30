import { createReducer, updateObject } from 'Stores'

import {
    CHECK_NETWORK
} from './constants'

export const initialState = {
    isOnline: true
}

function checkNetwork(state, { isOnline }) {
    return updateObject(state, {
        isOnline
    })
}

export default createReducer(initialState, {
    [CHECK_NETWORK]: checkNetwork
})