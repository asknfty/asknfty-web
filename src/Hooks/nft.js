import { useDispatch, useSelector } from "react-redux"

import saga from 'Modules/home/store/saga'
import reducer from 'Modules/home/store/reducer'
import { useInjectReducer, useInjectSaga } from "Stores"
import { makeNftCollection, makeNftCollectionDetail, makeNftItem, makeNftItemDetail } from "Modules/home/store/selectors"
import { getNftAllCollection, getNftAllItem, getDetailNftItem, getDetailNftCollection } from "Modules/home/store/actions"

export const useGetNftAllCollection = () => {
    useInjectSaga({ key: 'nftAllCollection', saga })
    useInjectReducer({ key: 'nftAllCollection', reducer })

    const dispatch = useDispatch()

    const { data, isLoading, filter, pagination } = useSelector(makeNftCollection())

    const getNftAllCollectionAction = (payload) => dispatch(getNftAllCollection(payload))

    return {
        isLoading,
        data,
        filter,
        pagination,
        getNftAllCollectionAction,
    }
}

export const useGetNftAllItem = () => {
    useInjectSaga({ key: 'nftAllItem', saga })
    useInjectReducer({ key: 'nftAllItem', reducer })

    const dispatch = useDispatch()

    const { data, isLoading, filter, pagination } = useSelector(makeNftItem())

    const getNftAllItemAction = (payload) => dispatch(getNftAllItem(payload))

    return {
        isLoading,
        data,
        filter,
        pagination,
        getNftAllItemAction,
    }
}

export const useGetDetailNftCollection = () => {
    useInjectSaga({ key: 'nftCollectionDetail', saga })
    useInjectReducer({ key: 'nftCollectionDetail', reducer })

    const dispatch = useDispatch()

    const { data, isLoading, error } = useSelector(makeNftCollectionDetail())

    const getDetailNftCollectionAction = (payload) => dispatch(getDetailNftCollection(payload))

    return {
        isLoading,
        data,
        error,
        getDetailNftCollectionAction
    }
}

export const useGetDetailNftItem = () => {
    useInjectSaga({ key: 'nftItemDetail', saga })
    useInjectReducer({ key: 'nftItemDetail', reducer })

    const dispatch = useDispatch()

    const { data, isLoading, error } = useSelector(makeNftItemDetail())

    const getDetailNftItemAction = (payload) => dispatch(getDetailNftItem(payload))

    return {
        isLoading,
        data,
        error,
        getDetailNftItemAction
    }
}