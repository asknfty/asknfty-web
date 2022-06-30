import { createSelector } from "reselect"
import { initialState } from "./reducer"

const selectNft = (state) => state.nft || initialState

const makeNftCollection = () => (
    createSelector(selectNft, (state) => state.nftAllCollection)
)

const makeNftItem = () => (
    createSelector(selectNft, (state) => state.nftAllItem)
)

const makeNftItemDetail = () => (
    createSelector(selectNft, (state) => state.nftItemDetail)
)

const makeNftCollectionDetail = () => (
    createSelector(selectNft, (state) => state.nftCollectionDetail)
)

export { selectNft, makeNftItem, makeNftCollection, makeNftItemDetail, makeNftCollectionDetail }