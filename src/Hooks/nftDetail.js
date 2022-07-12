import { useDispatch, useSelector } from "react-redux"
import { useInjectReducer, useInjectSaga } from "Stores"

import saga from 'Modules/nft_detail/store/saga'
import reducer from 'Modules/nft_detail/store/reducer'
import { makeSelectNftDetail } from "Modules/nft_detail/store/selectors"
import { getNftDetail } from "Modules/nft_detail/store/actions"

export const useGetNftDetail = () => {
    useInjectSaga({ key: 'nftDetail', saga })
    useInjectReducer({ key: 'nftDetail', reducer })

    const dispatch = useDispatch()

    const { data, isLoading, error } = useSelector(makeSelectNftDetail())

    const getNftDetailAction = (payload) => dispatch(getNftDetail(payload))

    return {
        isLoading,
        data,
        error,
        getNftDetailAction
    }
}