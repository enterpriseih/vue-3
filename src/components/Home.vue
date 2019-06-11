<template>
  <div class="page">
    <router-view />
    <ul>
      <li><router-link :to="{name: 'List'}"></router-link></li>
      <li><router-link :to="{name: 'User'}"></router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data() {
    return {

    }
  }
}
</script>

<style scoped lang="stylus">
</style>
