import { COLLECTIONS_FIELDS, COLLECTION_DETAIL_FIELDS, NFTS_FIELDS, NFT_DETAIL_FIELDS } from 'Constants'
import { parseParamsToQueryString } from 'Utils'
import AxiosClient from './api'
import END_POINT from './constants'

function getNftAllCollectionAPI({ params }) {
  const paramsIncludeFields = params.includeFields || { ...params, includeFields: COLLECTIONS_FIELDS }
  return AxiosClient.get(
    `${END_POINT.NFT.GET_ALL_NFT_COLLECTION}${parseParamsToQueryString(paramsIncludeFields)}`
  ).then((res) => res.data)
}

function getNftAllItemAPI({ params }) {
  const paramsIncludeFields = params.includeFields || { ...params, includeFields: NFTS_FIELDS }
  return AxiosClient.get(
    `${END_POINT.NFT.GET_ALL_NFT_ITEM}${parseParamsToQueryString(paramsIncludeFields)}`
  ).then((res) => res.data)
}

function getNftCollectionDetailAPI({ collectionId, params }) {
  const paramsIncludeFields =
    params && params.includeFields
      ? { includeFields: params.includeFields }
      : { includeFields: COLLECTION_DETAIL_FIELDS }
  return AxiosClient.get(
    `${END_POINT.NFT.GET_DETAILS_NFT_COLLECTION(collectionId)}${parseParamsToQueryString(
      paramsIncludeFields
    )}`
  ).then((res) => res.data)
}

function getNftItemDetailAPI({ nftId }) {
  const paramsIncludeFields = { includeFields: NFT_DETAIL_FIELDS }
  return AxiosClient.get(
    `${END_POINT.NFT.GET_DETAILS_NFT_ITEM(nftId)}${parseParamsToQueryString(paramsIncludeFields)}`
  ).then((res) => res.data)
}

export { getNftAllCollectionAPI, getNftAllItemAPI, getNftCollectionDetailAPI, getNftItemDetailAPI }
