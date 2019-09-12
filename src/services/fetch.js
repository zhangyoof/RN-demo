/**
 * Fetch service
 * @file 数据请求器
 * @module app/services/fetch
 * @author Surmon <https://github.com/surmon-china>
 */

import { stringify } from 'query-string'
import appUrlConfig from './appPortalConfig'

// 构造参数
export function formatURL(url, params): string {
  let query = ''
  if (params && Object.keys(params).length) {
    query = url.includes('?')
      ? `&${stringify(params)}`
      : `?${stringify(params)}`
  }
  return `${url}${query}`
}

// 请求服务
export function httpService(url: string, options) {
  const defaultOptions = {
    // url: url,
    // offline: false,
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      // 'Authorization': 'eyJhbGciOiJIUzI1NiJ9.eyJhY2NvdW50SWQiOiJmNWVmNGNlZDIzYWE0YWRhYjQyODdjM2I0NjlhNjIwNyIsImVtYWlsIjoiMTM3NTE0MzAwMDZAMTM2LmNvbSIsIm5hbWUiOiJ6c2jkuJrkuLvlrqHmoLjkurowMSIsInVzZXJuYW1lIjoieWVzMDAxIiwicGhvbmVOdW1iZXIiOiIxMzc1MTQzMDAwNiIsImFjY291bnRUeXBlIjoiUEVSU09OQUwiLCJ1c2VySWQiOiI2N2Q3ZTYyNTI3OWY0ZmM3OGI5OGE0ZmQxYWZmZjYxZCIsImNvbXBhbnlJZCI6ImFlNTY4MzMxNGU1YzQ4YjNiOGViMWRmMmRhYzRjNmZhIiwiY29tcGFueU5hbWUiOiLmlrDkuJrkuLso5LiJ6YOo5LiT55SoKSIsImV4cCI6MTU2NzcxNzI1OX0.yRsQlIK8OSDXU50wHfQlZizspYLPLbKCCtTlmdw_VE8'
    },
    ...options
  };
  console.log(defaultOptions)
  return fetch(url, defaultOptions)
    .then(response => response.json())
    .catch(error => {
      const text = appUrlConfig.toast.networkError;
      // showToast(text)
      console.warn(`${text}：`, `url：${url}`, error)
    })
}


export function get(url: string, getParams){
  return httpService(formatURL(url, getParams), { method: 'GET' })
}

export function post(url: string, data) {
  return httpService(url, { method: 'POST', body: data })
}

export function put(url: string, data){
  return httpService(url, { method: 'PUT', body: JSON.stringify(data) })
}

export function patch(url: string, data) {
  return httpService(url, { method: 'PATCH', body: JSON.stringify(data) })
}

export function remove(url: string, data) {
  return httpService(url, { method: 'DELETE', body: JSON.stringify(data) })
}

export default {
  get,
  post,
  put,
  patch,
  remove
}
