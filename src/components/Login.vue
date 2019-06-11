<template>
  <div class="page">
    <div @click="login">登录</div>
    <div @click="reg">注册</div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data () {
    return {}
  },
  methods: {
    login () {
      this.$router.push('/home')
    },
    reg () {
      this.$router.push('/home/user')
    }
  }
}
</script>

<style scoped >
</style>
