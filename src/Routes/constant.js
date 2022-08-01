export const ROUTE_NAMES = {
  DIRECTION: '/',
  HOME: '/search',
  LOADING: '/loading',
  ABOUT_US: '/about-us',
  COLLECTION_DETAIL: (collectionId) => `/collection-detail/${collectionId}`,
  NFT_DETAIL: (nftId) => `/nft-detail/${nftId}`
}