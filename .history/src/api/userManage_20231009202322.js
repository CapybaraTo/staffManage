/*
 * @Author: userG 1023536640@qq.com
 * @Date: 2023-09-25 19:46:41
 * @LastEditors: userG 1023536640@qq.com
 * @LastEditTime: 2023-10-09 20:23:22
 * @FilePath: \x-admin-web\src\api\user.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from '@/utils/request'
import { search } from 'core-js/fn/symbol';

export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

// 可以把多个方法全写在这里面
export default {
  getUserList(searchModel){
    return request({
      url:'/user/list',
      method:'get',
      params:{
        pageNo:searchModel.pageNo,
        pageSize:searchModel.pageSize,
        username:searchModel.username,
        phone:searchModel.phone,
      }
    });
  }
}

