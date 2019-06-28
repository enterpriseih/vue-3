<template>
  <div class="page">
    <div class="flex-center">
      <div class="input_content">
        <el-input
          placeholder="Enter your username"
          v-model="userInfo.username"
        ></el-input>
      </div>
    </div>
    <div class="flex-center">
      <div class="input_content">
        <el-input
          placeholder="Enter your password"
          v-model="userInfo.password"
        ></el-input>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data () {
    return {
      userInfo: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    getUserInfo () {
      return this.userInfo
    }
  }
}
</script>

<style scoped lang="stylus">
</style>
