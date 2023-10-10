/*
 * @Author: userG 1023536640@qq.com
 * @Date: 2023-09-25 19:46:41
 * @LastEditors: userG 1023536640@qq.com
 * @LastEditTime: 2023-09-26 15:12:20
 * @FilePath: \x-admin-web\src\store\getters.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  permission_routes: state => state.permission.routes
}
export default getters
