<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-04-02 14:30:49
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-04-09 09:38:29
 * @FilePath: \top-glob\pages\Product.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script lang="ts" setup>
    import { ref } from 'vue'
    const activeName = ref('1');
    const handleClick = (tab, event) => {
        console.log(tab, event)
    }
</script>
<template>
    <section>
        <div class="wrap">
            <div class="title">服務介紹及費用</div>
            <el-row justify="space-between" :gutter="20" style="align-items: center">
                <el-col :span="24">
                    <el-tabs
                        v-model="activeName"
                        type="card"
                        class="demo-tabs"
                        @tab-click="handleClick"
                    >
                        <el-tab-pane label="進口" name="1">
                            
                        </el-tab-pane>
                        <el-tab-pane label="出口" name="2">
                            
                        </el-tab-pane>
                        <el-tab-pane label="集運" name="3">
                            
                        </el-tab-pane>
                        <el-tab-pane label="費用" name="4">
                            
                        </el-tab-pane>
                        <el-tab-pane label="加值費用" name="5">
                            
                        </el-tab-pane>
                    </el-tabs>
                </el-col>
            </el-row>
        </div>
    </section>
</template>

<style scoped>
.wrap {
    width: 1080px;
    margin: 0px auto;
}
section {
    padding: 36px 0px;
}
.title {
    display: flex;
    align-items: center;
    line-height: 42px;
    font-size: 24px;
    font-weight: bold;
    color: rgb(32, 151, 219);
    margin-bottom: 24px;
}

.title::before {
    /* border-left: 2px solid rgb(32, 151, 219); */
    content: " ";
    display: inline-block;
    width: 4px;
    height: 24px;
    background-color: rgb(32, 151, 219);
    margin-right: 8px;
}
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}

</style>