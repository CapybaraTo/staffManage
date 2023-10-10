/*
 * @Author: userG 1023536640@qq.com
 * @Date: 2023-09-25 19:46:41
 * @LastEditors: userG 1023536640@qq.com
 * @LastEditTime: 2023-10-01 09:41:31
 * @FilePath: \x-admin-web\src\api\user.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
