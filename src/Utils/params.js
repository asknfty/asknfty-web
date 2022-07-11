const parseValue = (key, value) => {
  if (key === 'queries') {
    return `=collection_name__OR__description:${value}`
  }
  if (key === 'sorts' || key === 'filters') {
    return `=${value.map(sort => sort)}`
  }
  return `=${value}`
}

export const parseParamsToQueryString = (params) => {
  let query = '?'
  Object.keys(params).forEach((key) => {
    if (`${params[key]}`.length) {
      query = `${query}&${key}${parseValue(key, params[key])}`
    }
  })
  // const query = `?${Object.keys(params).map(key => `${key}${parseValue(key, params[key])}`).join('&')}`
  return query
}