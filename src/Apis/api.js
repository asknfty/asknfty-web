/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-param-reassign */
/* eslint-disable symbol-description */
import axios from 'axios'
import JSONBig from 'json-bigint'
import { notification } from 'antd'
import i18next from 'I18n'

import { isEmpty, assign } from 'lodash'
import { STORAGE, getLocalStorage, IGNORE_ERROR_MESSAGES } from 'Utils'
import { store } from 'index'

i18next.loadNamespaces(['error_message'])

const singletonEnforcer = Symbol()
const BASE_URL = process.env.NODE_ENV === 'production' ? 'https://api.asknfty.com/nft/v1' : '/nft/v1'

export const MAINTENANCE = 'Maintainance'
export const ERROR_MESSAGE_SERAKU_REGEX = /^E.*:.*/g
class AxiosClient {
  constructor(enforcer) {
    if (enforcer !== singletonEnforcer) {
      throw new Error('Cannot initialize Axios client single instance')
    }

    this.axiosClient = axios.create({
      baseURL: BASE_URL,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }
    })

    this.getExistTokenOnLocalStorage()

    this.axiosClient.defaults.transformResponse = (data) => JSONBig.parse(data)

    this.axiosClient.interceptors.request.use(
      (configure) => {
        const token = getLocalStorage(STORAGE.USER_TOKEN)
        if (token) {
          configure.headers.Authorization = `Bearer ${token}`
        }
        const language = getLocalStorage(STORAGE.LANGUAGE)
        if (language) {
          configure.headers['Accept-Language'] = language
        }
        return configure
      }, (error) => Promise.reject(error)
    )

    this.axiosClient.interceptors.response.use(
      (response) => {
        const { status, data } = response
        return {
          status,
          data
        }
      },
      async (error) => {
        if (error.response) {
          let { data, status } = error.response
          if (data instanceof Blob) {
            data = JSON.parse(await data.text())
          }
          switch (status) {
            case 400:
              if (IGNORE_ERROR_MESSAGES.includes(data.error)) {
                store.dispatch({ type: data.error })
              } else if (data.error && data.error.match(ERROR_MESSAGE_SERAKU_REGEX)) {
                notification.error({
                  message: i18next.t('common:error'),
                  description: data.error,
                  duration: 2
                })
              } else {
                notification.error({
                  message: i18next.t('common:error'),
                  description: i18next.t(`error_message:${data.error}`),
                  duration: 2
                })
              }
              break
            case 500:
              break
            case 401:
              if (data.message === MAINTENANCE) {
                const isMaintainNoticeAdmin = true
                // signOut(isMaintainNoticeAdmin)
              } else {
                // signOut()
              }
              break
            case 404:
              break
            case 403:
              break
            default:
              break
          }
          throw data
        } else {
          throw error
        }
      }
    )
  }

  static get instance() {
    if (!this.axiosClientInstance) {
      this.axiosClientInstance = new AxiosClient(singletonEnforcer)
    }

    return this.axiosClientInstance
  }

  async getExistTokenOnLocalStorage() {
    const userToken = await getLocalStorage(STORAGE.USER_TOKEN)
    if (userToken) {
      this.setHeaderToken(userToken)
    }
  }

  setHeaderToken = async (userToken = null) => {
    this.axiosClient.defaults.headers.common.Authorization = `Bearer ${userToken}`
  }

  get = async (resource, slug = '', config = {}) => {
    let { headers } = config
    if (!headers) {
      headers = this.axiosClient.defaults.headers
    }
    slug += ''
    const requestURL = isEmpty(slug) ? `${resource}` : `${resource}/${slug}`
    return this.axiosClient.get(requestURL, {
      data: null,
      ...assign(config, { headers })
    })
  }

  post = async (resource, data, config = {}) => this.axiosClient.post(
    `${resource}`,
    data,
    assign(config, this.axiosClient.defaults.headers)
  )

  update = async (resource, data, config = {}) => this.axiosClient.put(
    `${resource}`,
    data,
    assign(config, this.axiosClient.defaults.headers)
  )

  put = async (resource, data, config = {}) => this.axiosClient.put(
    `${resource}`,
    data,
    assign(config, this.axiosClient.defaults.headers)
  )

  patch = async (resource, data, config = {}) => this.axiosClient.patch(
    `${resource}`,
    data,
    assign(config, this.axiosClient.defaults.headers)
  )

  delete = async (resource, data, config = {}) => this.axiosClient.delete(`${resource}`, {
    data,
    ...assign(config, { headers: this.axiosClient.defaults.headers })
  })

  download = (url, requestInfo, data) => {
    this.axiosClient.defaults.transformResponse = (dt) => dt

    const request = requestInfo?.method === 'POST' ? this.axiosClient.post : this.axiosClient.get
    if (requestInfo?.method === 'POST') {
      return request(BASE_URL + url,
        data,
        {
          baseURL: BASE_URL,
          method: 'GET',
          ...requestInfo,
          headers: {
            ...this.axiosClient.defaults.headers,
            ...requestInfo?.headers
          },
          responseType: 'blob'
        }).finally(() => {
          this.axiosClient.defaults.transformResponse = (dt) => JSONBig.parse(dt)
        })
    }
    return request(BASE_URL + url, {
      baseURL: BASE_URL,
      method: 'GET',
      ...requestInfo,
      headers: {
        ...this.axiosClient.defaults.headers,
        ...requestInfo?.headers
      },
      responseType: 'blob'
    }).finally(() => {
      this.axiosClient.defaults.transformResponse = (dt) => JSONBig.parse(dt)
    })
  }
}

export default AxiosClient.instance
