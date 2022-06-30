export const parseParamsToQueryString = (params) => {
  const query = `?${Object.keys(params).map(key => `${key}=${params[key].toString()}`).join('&')}`
  return query
}