<template>
  <div>
      <el-menu :default-active="activeIndex" class="d-flex" mode="horizontal" :router="true" type="flex">
        <el-menu-item class="mr-auto">JSY</el-menu-item>
        <el-menu-item index="/home">首页</el-menu-item>
        <el-menu-item index="/archive">归档</el-menu-item>
        <el-menu-item index="/about">关于</el-menu-item>
<!--        <el-submenu>-->
<!--          <template slot="title">语言</template>-->
<!--          <el-menu-item @click="toggleLang('zh')">中文</el-menu-item>-->
<!--          <el-menu-item @click="toggleLang('en')">English</el-menu-item>-->
<!--        </el-submenu>-->
      </el-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '/home'
    }
  },
  methods: {
    // toggleLang (lang) {
    //   if (lang === 'zh') {
    //     localStorage.setItem('locale', 'zh')
    //     this.$i18n.locale = localStorage.getItem('locale')
    //     this.$message({
    //       message: '切换为中文！',
    //       type: 'success'
    //     })
    //   } else if (lang === 'en') {
    //     localStorage.setItem('locale', 'en')
    //     this.$i18n.locale = localStorage.getItem('locale')
    //     this.$message({
    //       message: 'Switch to English!',
    //       type: 'success'
    //     })
    //   }
    // }
  }
}
</script>

<style scoped lang="stylus">
  .d-flex
    display flex!important

  .mr-auto
    margin-right auto!important
</style>
