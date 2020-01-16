<template>
    <div>
        <nav>
            <div class="title flex-bt">
              <ul class="flex-bt">
                <li class="top-font flex-center">JSY</li>
              </ul>
              <ul class="flex-bt">
                <li class="flex-center">
                    <router-link class="top-font" :to="{name: 'home'}">首页</router-link>
                </li>
                <li class="flex-center">
                    <router-link class="top-font" :to="{name: 'login'}">归档</router-link>
                </li>
                <li class="flex-center">
                    <router-link class="top-font" :to="{name: 'sign'}">关于</router-link>
                </li>
              </ul>
            </div>
        </nav>
        <div>
            <router-view/>
        </div>
    </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data () {
    return {

    }
  }
}
</script>

<style scoped lang="stylus">
  .title
    width 100%
    height 60px
    background-color white
    border 1px solid #e6e6e6

  .title ul:last-child
    width 200px

  .title ul li
    height 60px
    width 60px
    list-style none

  .top-font
    color #a9a9a9
    text-decoration none

  .router-link-active
    text-decoration none
    color #000

  .page .input_content
    width 25%
    margin-bottom 10px

</style>
