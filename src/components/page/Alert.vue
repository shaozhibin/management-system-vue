<template>
  <div>
    <el-alert title="成功提示的文案" type="success" center show-icon>
    </el-alert>
    <div style="margin-bottom: 20px;"></div>
    <el-alert title="消息提示的文案" type="info" center show-icon>
    </el-alert>
    <div style="margin-bottom: 20px;"></div>
    <el-alert title="警告提示的文案" type="warning" center show-icon>
    </el-alert>
    <div style="margin-bottom: 20px;"></div>
    <el-alert title="错误提示的文案" type="error" center show-icon>
    </el-alert>
    <div style="margin-top: 20px;"></div>
    <el-button type="text" @click="open2">点击打开 Message Box</el-button>

    <div style="margin-top: 20px;"></div>
    <el-button type="text" @click="open3">点击打开 Message Box</el-button>

  </div>
</template>
<script>
export default {
  methods: {
    open2() {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    open3() {
      this.$prompt('请输入邮箱', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputErrorMessage: '邮箱格式不正确',
          inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/
        })
        .then(({ value }) => {
          this.$message({
            type: 'success',
            message: '你的邮箱是: ' + value
          });
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });
        });
      }
    }
  }

</script>
