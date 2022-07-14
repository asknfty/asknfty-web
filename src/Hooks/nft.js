import { useDispatch, useSelector } from "react-redux"

import saga from 'Modules/home/store/saga'
import reducer from 'Modules/home/store/reducer'
import { useInjectReducer, useInjectSaga } from "Stores"
import { makeNftCollection, makeNftCollectionDetail, makeNftAllItem, makeNftItemDetail } from "Modules/home/store/selectors"
import { getNftAllCollection, getNftAllItem, getDetailNftItem, getDetailNftCollection, deleteNftAllCollection } from "Modules/home/store/actions"
import { useHistory } from "react-router-dom"
import { ROUTE_NAMES } from "Routes/constant"

export const useGetNftAllCollection = () => {
    useInjectSaga({ key: 'nft', saga })
    useInjectReducer({ key: 'nft', reducer })
    const history = useHistory()

    const dispatch = useDispatch()

    const { data, isLoading, filter, pagination, queries } = useSelector(makeNftCollection())

    const getNftAllCollectionAction = (payload) => dispatch(getNftAllCollection(payload))
    const deleteNftAllCollectionAction = () => dispatch(deleteNftAllCollection())

    const goBackHome = async () => {
        await deleteNftAllCollectionAction()
        history.push(ROUTE_NAMES.HOME)
    }

    return {
        isLoading,
        data,
        filter,
        pagination,
        queries,
        getNftAllCollectionAction,
        deleteNftAllCollectionAction,
        goBackHome
    }
}

export const useGetNftAllItem = () => {
    useInjectSaga({ key: 'nft', saga })
    useInjectReducer({ key: 'nft', reducer })

    const dispatch = useDispatch()

    const { data, isLoading, pagination } = useSelector(makeNftAllItem())

    const getNftAllItemAction = (payload) => dispatch(getNftAllItem(payload))

    return {
        isLoading,
        data,
        pagination,
        getNftAllItemAction,
    }
}

export const useGetDetailNftCollection = () => {
    useInjectSaga({ key: 'nft', saga })
    useInjectReducer({ key: 'nft', reducer })

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
    useInjectSaga({ key: 'nft', saga })
    useInjectReducer({ key: 'nft', reducer })

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