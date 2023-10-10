<!--
 * @Author: userG 1023536640@qq.com
 * @Date: 2023-09-26 11:15:42
 * @LastEditors: userG 1023536640@qq.com
 * @LastEditTime: 2023-10-04 15:08:35
 * @FilePath: \x-admin-web\src\views\sys\user.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!--
 * @Author: userG 1023536640@qq.com
 * @Date: 2023-09-26 11:15:42
 * @LastEditors: userG 1023536640@qq.com
 * @LastEditTime: 2023-10-02 11:33:36
 * @FilePath: \x-admin-web\src\views\sys\user.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <!-- 搜索栏 -->
    <el-card id="search">
      <el-row>
        <el-col :span="20">
      <el-input v-model="input" placeholder="用户名"></el-input>
      <el-input v-model="input" placeholder="电话"></el-input>
      <el-button type="primary" round icon="el-icon-search">查询</el-button>
    </el-col>
    <el-col :span="4">

      <el-button type="primary" icon="el-icon-plus" circle></el-button>
    </el-col>
    </el-row>



    </el-card>


  </div>
</template>

<script>
export default {

}
</script>

<style>
#search .el-input{
  width: 200px;
  margin-right: 10px;
}
</style>
