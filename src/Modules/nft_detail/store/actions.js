import { REQUEST } from 'Stores'
import { GET_NFT_DETAIL } from './constants'

export const getNftDetail = (payload) => ({
    type: REQUEST(GET_NFT_DETAIL),
    payload
})
