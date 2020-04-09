<template>
    <div class="flex-center" style="width: 100%;">
        <div class="detail_card flex-center" >
            <el-row class="detail_content" type="flex" justify="space-around">
                <el-col :span="16">
                    <el-row>
                        <el-card shadow="hover">
                            <h5>文章标题</h5>
                            <el-row></el-row>
                        </el-card>
                    </el-row>
                </el-col>
                <el-col :span="6">
                    <el-row>
                        <el-card shadow="hover">
                            <h5>标签</h5>
                        </el-card>
                    </el-row>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'home',
        components: {},
        data () {
            return {}
        },
        mounted () {
            var name = 'the window'
            var object = {
                name: 'my object',
                getNameFunc: function () {
                    console.log(this.name)
                    return function () {
                        return this.name
                    }
                }
            }
            console.log(object.getNameFunc())
            var name1 = 'the window1'
            var object1 = {
                name: 'my object1',
                getNameFunc: function () {
                    var that = this
                    return function () {
                        return that.name
                    }
                }
            }
            console.log(object1.getNameFunc()())
        }
    }
</script>

<style scoped lang="stylus">
    .detail_card
        width 80%
        margin-top 40px
        flex-direction column
    .detail_content
        width 100%
    .detail_left
        width 60%
        height 250px
        background-color white
    .detail_right
        background-color black
</style>
