import baseUrl from './url'
import fetch from './fetch'

export function getTest (obj) { // 测试例子
  return fetch.requestget(`${baseUrl}/getTest`, obj)
}
