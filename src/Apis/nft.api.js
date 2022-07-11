import { parseParamsToQueryString } from 'Utils'
import AxiosClient from './api'
import END_POINT from './constants'

function getNftAllCollectionAPI({ params }) {
    const query = parseParamsToQueryString(params)
    console.log('Boy 🚀 ~ file: nft.api.js ~ line 8 ~ getNftAllCollectionAPI ~ query', query)
    return AxiosClient.get(`${END_POINT.NFT.GET_ALL_NFT_COLLECTION}${query.replace(/%20/g, ' ')}`)
        .then((res) => res.data)
}

function getNftAllItemAPI({ params }) {
    return AxiosClient.get(END_POINT.NFT.GET_ALL_NFT_ITEM, '', { params })
        .then((res) => res.data)
}

function getNftCollectionDetailAPI({ nftCollectionsId }) {
    return AxiosClient.get(END_POINT.NFT.GET_DETAILS_NFT_COLLECTION(nftCollectionsId))
        .then((res) => res.data)
}

function getNftItemDetailAPI({ nftId }) {
    return AxiosClient.get(END_POINT.NFT.GET_DETAILS_NFT_ITEM(nftId))
        .then((res) => res.data)
}

export {
    getNftAllCollectionAPI,
    getNftAllItemAPI,
    getNftCollectionDetailAPI,
    getNftItemDetailAPI
}