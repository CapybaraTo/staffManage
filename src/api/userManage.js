/*
 * @Author: userG 1023536640@qq.com
 * @Date: 2023-09-25 19:46:41
 * @LastEditors: userG 1023536640@qq.com
 * @LastEditTime: 2023-10-10 21:03:46
 * @FilePath: \x-admin-web\src\api\user.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from '@/utils/request'

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
        phone:searchModel.phone
      }
    });
  },
  // 新增
  addUser(user){
    return request({
      url:'/user',
      method:'post',
      data:user
    });
  },
  // 获取单条
  getUserById(id){
    return request({
      // url:'/user/' + id,
      url:`/user/${id}`,
      method:'get'
    });
  },
  // 保存
  saveUser(user){
    if(user.id == null || user.id == undefined){
      // 如果是新增，就调用新增的方法
      return this.addUser(user);
    }
    // 如果是修改，就调用更新的方法
    return this.updateUser(user);
  },
  // 更新
  updateUser(user){
    return request({
      url:'/user',
      method:'put',
      data:user
    });
  },
  deleteUserById(id){
    return request({
      url:`/user/${id}`,
      method:'delete'
    });
  }
}

