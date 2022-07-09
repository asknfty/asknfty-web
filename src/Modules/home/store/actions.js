import { REQUEST } from 'Stores'
import { DELETE__NFT_ALL_COLLECTION, GET_DETAILS_NFT_ITEM, GET_NFT_ALL_COLLECTION, GET_NFT_ALL_ITEM } from './constants'

export const getNftAllCollection = (payload) => ({
    type: REQUEST(GET_NFT_ALL_COLLECTION),
    payload
})

export const getNftAllItem = (payload) => ({
    type: REQUEST(GET_NFT_ALL_ITEM),
    payload
})

export const getDetailNftCollection = (payload) => ({
    type: REQUEST(GET_DETAILS_NFT_ITEM),
    payload
})

export const getDetailNftItem = (payload) => ({
    type: REQUEST(GET_DETAILS_NFT_ITEM),
    payload
})

export const deleteNftAllCollection = () => ({
    type: REQUEST(DELETE__NFT_ALL_COLLECTION)
})
