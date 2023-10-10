<!--
 * @Author: userG 1023536640@qq.com
 * @Date: 2023-09-26 11:15:42
 * @LastEditors: userG 1023536640@qq.com
 * @LastEditTime: 2023-10-10 18:16:51
 * @FilePath: \x-admin-web\src\views\sys\user.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <!-- 搜索栏 -->
    <el-card id="search">
      <el-row>
        <el-col :span="20">
          <el-input v-model="searchModel.username" placeholder="用户名"></el-input>
          <el-input v-model="searchModel.phone" placeholder="电话"></el-input>
          <el-button @click="getUserList" type="primary" round icon="el-icon-search">查询</el-button>
        </el-col>
        <el-col :span="4" align = "right">
          <el-button @click="openEditUI" type="primary" icon="el-icon-plus" circle></el-button>
        </el-col>
      </el-row>
     </el-card>
     <!-- 结果列表 -->
     <el-card>
      <el-table :data="userList" stripe style="width: 100%">
        <!-- type="index"就是生成的序号，每翻一页都是从1开始  用插值表达式来计算 -->
        <el-table-column label="#" width="80">
          <!-- (pagenumber - 1) * pagesize + 当前行的索引index + 1 -->
          <!-- slot-scope作用域插槽  scope.$index 拿到当前行的索引号-->
          <template slot-scope="scope">
          {{ (searchModel.pageNo - 1)*searchModel.pageSize + scope.$index + 1 }}
        </template>
        </el-table-column>
        <el-table-column prop="id" label="用户ID" width="180"></el-table-column>
        <el-table-column prop="username" label="用户名" width="180"></el-table-column>
        <el-table-column prop="phone" label="电话" width="180"></el-table-column>
        <el-table-column prop="email" label="邮箱"></el-table-column>
        <el-table-column label="操作" width="180"></el-table-column>
      </el-table>

     </el-card>
     <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="searchModel.pageNo"
          :page-sizes="[5,10, 20, 50]"
          :page-size="searchModel.pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total">
      </el-pagination>

      <!-- 新增 -->
      <!-- 新增和修改用同一个对话框 复用  :title="title"  加冒号就属性绑定了，后面的title就是个变量了-->
      <el-dialog @close="clearForm" :title="title" :visible.sync="dialogFormVisible">
        <el-form :model="userForm" :rules="rules">
          <!-- :rules="rules"绑定规则 里面的变量名和prop中的保持一致 对应看的是prop中的变量 -->
          <el-form-item label="用户名" prop="username" :label-width="formLabelWidth">
            <el-input v-model="userForm.username" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="登录密码" prop="password" :label-width="formLabelWidth">
            <!-- type="password" 输入变为密文形式 -->
            <el-input type="password" v-model="userForm.password" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="联系电话" :label-width="formLabelWidth">
            <el-input v-model="userForm.phone" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="电子邮件" prop="email" :label-width="formLabelWidth">
            <el-input v-model="userForm.email" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="用户状态" :label-width="formLabelWidth">
            <!-- :active-value="1" :inactive-value="0" 绑定激活状态为数值1 冒号是确保双引号里是数值，要不然就是字符串 -->
            <el-switch v-model="userForm.status" :active-value="1" :inactive-value="0"></el-switch>
          </el-form-item>
      </el-form>
      <!-- 点关闭 点取消 点确定时需要清理数据 -->
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import userApi from '@/api/userManage'
export default {
  data(){
    var checkEmail = (rule, value, callback) => {
      var reg = /^[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*\.[a-z](2,}$/
        if (!reg.test(value)) {
          return callback(new Error('邮箱格式错误'));
        }
        callback();
      };
    return {
      formLabelWidth:'130px',
      userForm:{

      },
      dialogFormVisible:false,
      title:"",
      total:0,
      searchModel: {
        pageNo: 1,
        pageSize: 10
      },
      userList:[],
      // trigger: 'blur' 触发器，什么时候触发 blur 失去焦点的时候触发
      rules:{
        username:[
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 50, message: '长度在 3 到 50 个字符', trigger: 'blur' }
          ],
        password:[
            { required: true, message: '请输入初始密码', trigger: 'blur' },
            { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
        ],
        email:[
            { required: true, message: '请输入电子邮件', trigger: 'blur' },
            { validator:checkEmail, trigger: 'blur' }
        ],
      }
    }
  },
  methods:{
    clearForm(){
      this.userForm = {};
    },
    openEditUI(){
      this.title = '新增用户';
      this.dialogFormVisible = true;
    },
    handleSizeChange(pageSize){
      this.searchModel.pageSize = pageSize;
      this.getUserList();

    },
    handleCurrentChange(pageNo){
      this.searchModel.pageNo = pageNo;
      this.getUserList();
    },
    getUserList(){
      userApi.getUserList(this.searchModel).then((response) => {
        this.userList = response.data.rows;
        console.log(response.data.rows);
        console.log(this.userList);
        this.total = response.data.total;
      })
    }
  },
  created(){
    this.getUserList();
  }
}
</script>

<style>
#search .el-input{
  width: 200px;
  margin-right: 10px;
}

.el-dialog .el-input{
  width: 85%;
}
</style>
