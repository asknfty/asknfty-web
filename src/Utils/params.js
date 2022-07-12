const parseValue = (key, value) => {
  if (key === 'queries') {
    return `=collection_name__OR__description:${value}`
  }
  if (key === 'filters') {
    return `=collection.id:${value}`
  }
  return `=${value}`
}

export const parseParamsToQueryString = (params) => {
  const newParams = { ...params }
  const query = `?${Object.keys(newParams).map(key => `${key}${parseValue(key, newParams[key])}`).join('&')}`
  return query
}