import {
    CHECK_NETWORK
} from './constants'

export function checkNetwork(isOnline) {
    return {
        type: CHECK_NETWORK,
        isOnline
    }
}