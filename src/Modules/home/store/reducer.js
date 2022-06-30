import { createReducer, updateObject, REQUEST, SUCCESS, FAILURE } from 'Stores'
import { GET_DETAILS_NFT_COLLECTION, GET_DETAILS_NFT_ITEM, GET_NFT_ALL_COLLECTION, GET_NFT_ALL_ITEM } from './constants'

const nftAllCollection = {
    isLoading: false,
    data: [],
    pagination: {},
    filter: {},
    error: null
}

const nftAllItem = {
    isLoading: false,
    data: [],
    pagination: {},
    filter: {},
    error: null
}

const nftItemDetail = {
    isLoading: false,
    data: {},
    error: null
}

const nftCollectionDetail = {
    isLoading: false,
    data: {},
    error: null
}


export const initialState = {
    isLoading: false,
    nftAllCollection: { ...nftAllCollection },
    nftAllItem: { ...nftAllItem },
    nftItemDetail: { ...nftItemDetail },
    nftCollectionDetail: { ...nftCollectionDetail },
    filter: {},
    pagination: {
        page: 1,
        pages: 1,
        total: 0,
        limit: 100
    },
    error: null
}

function loadNftAllCollection(state) {
    return updateObject(state, {
        nftAllCollection: {
            ...state.nftAllCollection,
            isLoading: true
        }
    })
}

function loadNftAllCollectionSuccess(state, { payload }) {
    const { data, pagination, filter } = payload
    return updateObject(state, {
        nftAll: {
            ...state.nftAllCollection,
            isLoading: false,
            data,
            pagination,
            filter
        }
    })
}

function loadNftAllCollectionFailure(state) {
    return updateObject(state, {
        error: null,
        isLoading: false
    })
}

function loadNftAllItem(state) {
    return updateObject(state, {
        nftAllItem: {
            ...state.nftAllItem,
            isLoading: true
        }
    })
}

function loadNftAllItemSuccess(state, { payload }) {
    const { data, pagination, filter } = payload
    return updateObject(state, {
        nftAllItem: {
            ...state.nftAllItem,
            isLoading: false,
            data,
            pagination,
            filter
        }
    })
}

function loadNftAllItemFailure(state) {
    return updateObject(state, {
        error: null,
        isLoading: false
    })
}

function loadDetailsNftItem(state) {
    return updateObject(state, {
        nftItemDetail: {
            ...state.nftItemDetail,
            isLoading: true
        }
    })
}

function loadDetailsNftItemSuccess(state, { data }) {
    return updateObject(state, {
        nftItemDetail: {
            ...state.nftItemDetail,
            isLoading: false,
            data
        }
    })
}

function loadDetailsNftItemFailure(state, { error }) {
    return updateObject(state, {
        nftItemDetail: {
            ...state.nftItemDetail,
            isLoading: false,
            error
        }
    })
}

function loadDetailsNftCollection(state) {
    return updateObject(state, {
        nftCollectionDetail: {
            ...state.nftCollectionDetail,
            isLoading: true
        }
    })
}

function loadDetailsNftCollectionSuccess(state, { data }) {
    return updateObject(state, {
        nftCollectionDetail: {
            ...state.nftCollectionDetail,
            isLoading: false,
            data
        }
    })
}

function loadDetailsNftCollectionFailure(state, { error }) {
    return updateObject(state, {
        nftCollectionDetail: {
            ...state.nftCollectionDetail,
            isLoading: false,
            error
        }
    })
}

export default createReducer(initialState, {
    [REQUEST(GET_NFT_ALL_COLLECTION)]: loadNftAllCollection,
    [SUCCESS(GET_NFT_ALL_COLLECTION)]: loadNftAllCollectionSuccess,
    [FAILURE(GET_NFT_ALL_COLLECTION)]: loadNftAllCollectionFailure,

    [REQUEST(GET_NFT_ALL_ITEM)]: loadNftAllItem,
    [SUCCESS(GET_NFT_ALL_ITEM)]: loadNftAllItemSuccess,
    [FAILURE(GET_NFT_ALL_ITEM)]: loadNftAllItemFailure,

    [REQUEST(GET_DETAILS_NFT_COLLECTION)]: loadDetailsNftCollection,
    [SUCCESS(GET_DETAILS_NFT_COLLECTION)]: loadDetailsNftCollectionSuccess,
    [FAILURE(GET_DETAILS_NFT_COLLECTION)]: loadDetailsNftCollectionFailure,

    [REQUEST(GET_DETAILS_NFT_ITEM)]: loadDetailsNftItem,
    [SUCCESS(GET_DETAILS_NFT_ITEM)]: loadDetailsNftItemSuccess,
    [FAILURE(GET_DETAILS_NFT_ITEM)]: loadDetailsNftItemFailure,
})