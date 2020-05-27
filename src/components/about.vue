<template>
    <div class="flex-center" style="width: 100%;">
        <div class="detail_card flex-center" >
            <el-row class="detail_content" type="flex" justify="space-around">
                <el-col :span="16">
                    <el-row>
                        <el-card shadow="hover">
                            <h5>关于自己</h5>
                            <el-row></el-row>
                        </el-card>
                    </el-row>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'about'
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
