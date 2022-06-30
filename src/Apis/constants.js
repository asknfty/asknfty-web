const END_POINT = {
    //nft
    NFT: {
        // search nft collection with queries, filters, sorts
        GET_ALL_NFT_COLLECTION: 'nft-collections',
        // get details collection with id
        GET_DETAILS_NFT_COLLECTION: (nftCollectionsId) => `nft-collections/${nftCollectionsId}`,
        // get details nft item
        GET_DETAILS_NFT_ITEM: (nftId) => `nfts/${nftId}`,
        // search nft item with queries, filters, sorts
        GET_ALL_NFT_ITEM: 'nfts'
    }
}

export default END_POINT