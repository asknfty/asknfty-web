export const NFT_OPTIONS = [
  { label: 'NFT Collection', value: 'NFT Collection' },
  { label: 'NFT Item', value: 'NFT Item' }
]

export const FILTER_KEYS = {
  CONTRACT_DEPLOYMENT: 'contract_deployment_at',
  FLOOR_PRICE: 'floor_price_wei_24h',
  TOTAL_VOLUME: 'total_volume_wei',
  VOLUME_24H: 'volume_wei_24h',
  EXCHANGE_VOLUME_CHANGE_24H: 'exchange_volume_change_24h',
  MARKET_CAP: 'market_cap_wei'
}

export const SORT_KEYS = {
  CONTRACT_DEPLOYMENT: '-contract_deployment_at',
  FLOOR_PRICE: 'floor_price_wei_24h',
  TOTAL_VOLUME: 'total_volume_wei',
  VOLUME_24H: 'volume_wei_24h',
  EXCHANGE_VOLUME_CHANGE_24H: 'exchange_volume_change_24h',
  MARKET_CAP: '-market_cap_wei',
  RELEVANCE: 'relevance'
}

export const FILTER_OPTIONS = [
  {
    label: 'Contract Deployment',
    key: FILTER_KEYS.CONTRACT_DEPLOYMENT
  },
  {
    label: 'Floor Prize',
    key: FILTER_KEYS.FLOOR_PRICE
  },
  {
    label: 'Total Volume',
    key: FILTER_KEYS.TOTAL_VOLUME
  },
  {
    label: 'Volume (24h)',
    key: FILTER_KEYS.VOLUME_24H
  },
  {
    label: 'Exchange Volume Change (24h)',
    key: FILTER_KEYS.EXCHANGE_VOLUME_CHANGE_24H
  },
  {
    label: 'Market Cap',
    key: FILTER_KEYS.MARKET_CAP
  }
]

export const SORT_OPTIONS = [
  {
    label: 'Contract Deployment',
    key: SORT_KEYS.CONTRACT_DEPLOYMENT
  },
  {
    label: 'Floor Prize',
    key: SORT_KEYS.FLOOR_PRICE
  },
  {
    label: 'Total Volume',
    key: SORT_KEYS.TOTAL_VOLUME
  },
  {
    label: 'Volume (24h)',
    key: SORT_KEYS.VOLUME_24H
  },
  {
    label: 'Exchange Volume Change (24h)',
    key: SORT_KEYS.EXCHANGE_VOLUME_CHANGE_24H
  },
  {
    label: 'Market Cap',
    key: SORT_KEYS.MARKET_CAP
  },
  {
    label: 'Relevance',
    key: SORT_KEYS.RELEVANCE
  }
]

export const GET_LABEL_BY_VALUE = {
  '-contract_deployment_at': 'Contract Deployment',
  'floor_price_wei_24h': 'Floor Prize',
  'total_volume_wei': 'Total Volume',
  'volume_wei_24h': 'Volume (24h)',
  'exchange_volume_change_24h': 'Exchange Volume Change (24h)',
  '-market_cap_wei': 'Market Cap',
  'relevance': 'Relevance'
}