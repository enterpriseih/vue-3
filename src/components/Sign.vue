<template>
  <div class="page">
    <div>
      <h2>Sign Up</h2>
      <userLogin ref="userLogin"></userLogin>
      <el-button type="success" @click="submit">Access</el-button>
    </div>
  </div>
</template>

<script>

import userLogin from './UserLogin.vue'

export default {
  name: '',
  components: {
    userLogin
  },
  data () {
    return {
      userInfo: {}
    }
  },
  methods: {
    submit () {
      this.userInfo = this.$refs.userLogin.getUserInfo()
      console.log(this.userInfo);
      if (this.userInfo.username !== '' && this.userInfo.password !== '') {
        this.$message({
          message: '注册成功',
          type: 'success'
        })
      } else {
        this.$message({
          message: '账号密码不能为空',
          type: 'warning'
        })
        return false
      }
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped lang="stylus">
</style>
