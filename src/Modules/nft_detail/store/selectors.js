import { createSelector } from "reselect"
import { initialState } from "./reducer"

const selectNftDetail = (state) => state.nftDetail || initialState

const makeSelectNftDetail = () => createSelector(selectNftDetail, (state) => state)

export { selectNftDetail, makeSelectNftDetail }