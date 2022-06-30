import { createSelector } from "reselect"
import { initialState } from "./reducer"

const selectGlobalState = state => state.globalState || initialState

const makeSelectorError = () =>
    createSelector(
        selectGlobalState,
        state => state.error
    )

const makeSelectLoading = () =>
    createSelector(
        selectGlobalState,
        state => state.isLoading
    )