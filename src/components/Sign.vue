<template>
  <div class="page">
    <div>
      <h2>Sign Up</h2>
      <div class="flex-center">
        <div class="input-group input_content">
            <input type="text"
                class="form-control"
                placeholder="Enter your username"
                v-model="loginInfo.username">
        </div>
      </div>
      <div class="flex-center">
        <div class=" input-group input_content" >
            <input type="text"
                class="form-control"
                placeholder="Enter your password"
                v-model="loginInfo.password">
        </div>
      </div>
      <button class="btn btn-success" @click="submit">Access</button>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      loginInfo: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    submit () {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped lang="stylus">
</style>
