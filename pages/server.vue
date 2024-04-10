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
                            <section>
                                <div class="content-title">一、服務國家</div>
                                <el-tag
                                    type="primary"
                                    effect="dark"
                                    class="tag"
                                    size="large"
                                >
                                    越南
                                </el-tag>
                                <el-tag
                                    type="primary"
                                    effect="dark"
                                    class="tag"
                                    size="large"
                                >
                                    印尼
                                </el-tag>
                                <el-tag
                                    type="primary"
                                    effect="dark"
                                    class="tag"
                                    size="large"
                                >
                                    泰國
                                </el-tag>
                                <!-- <el-check-tag type="primary" checked="true" class="tag">
                                    越南
                                </el-check-tag>
                                <el-check-tag type="primary" checked="true" class="tag">
                                    印尼
                                </el-check-tag>
                                <el-check-tag type="primary" checked="true" class="tag">
                                    泰國
                                </el-check-tag> -->
                             </section>
                        </el-tab-pane>
                        <el-tab-pane label="出口" name="2">
                            <section>
                                <div class="content-title">一、服務國家</div>
                                <el-tag
                                    type="primary"
                                    effect="dark"
                                    class="tag"
                                    size="large"
                                >
                                    越南
                                </el-tag>
                                <el-tag
                                    type="primary"
                                    effect="dark"
                                    class="tag"
                                    size="large"
                                >
                                    印尼
                                </el-tag>
                                <el-tag
                                    type="primary"
                                    effect="dark"
                                    class="tag"
                                    size="large"
                                >
                                    泰國
                                </el-tag>
                                <el-tag
                                    type="primary"
                                    effect="dark"
                                    class="tag"
                                    size="large"
                                >
                                    菲律賓
                                </el-tag>
                                <el-tag
                                    type="primary"
                                    effect="dark"
                                    class="tag"
                                    size="large"
                                >
                                    美國(重貨21KG以上)
                                </el-tag>
                             </section>
                        </el-tab-pane>
                        <el-tab-pane label="集貨進口" name="3">
                            <section>
                                <div class="content-title">一、服務國家</div>
                                <el-tag
                                    type="primary"
                                    effect="dark"
                                    class="tag"
                                    size="large"
                                >
                                    大陸
                                </el-tag>
                                <el-tag
                                    type="primary"
                                    effect="dark"
                                    class="tag"
                                    size="large"
                                >
                                    日本
                                </el-tag>
                             </section>
                        </el-tab-pane>
                        <el-tab-pane label="費用" name="4">
                            
                        </el-tab-pane>
                        <el-tab-pane label="快遞" name="6">
                            <section>
                                <div class="content-title">一、體積(材積)計算方式</div>
                                <p>
                                    內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文
                                </p>
                                <hr />
                                <div class="content-title">二、重量計算方式</div>
                                <p>
                                    內文內文內文內文內文內文內文內文內文內文內文
                                </p>
                             </section>
                        </el-tab-pane>
                        <el-tab-pane label="海運" name="7">
                            <section>
                                <div class="content-title">一、體積(材積)計算方式</div>
                                <p>
                                    內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文
                                </p>
                                <hr />
                                <div class="content-title">二、重量計算方式</div>
                                <p>
                                    內文內文內文內文內文內文內文內文內文內文內文
                                </p>
                            </section>
                        </el-tab-pane>
                        <el-tab-pane label="EMS 快遞" name="8">
                            <section>
                                <div class="content-title">一、體積(材積)計算方式</div>
                                <p>
                                    內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文
                                </p>
                                <hr />
                                <div class="content-title">二、重量計算方式</div>
                                <p>
                                    內文內文內文內文內文內文內文內文內文內文內文
                                </p>
                            </section>
                        </el-tab-pane>
                        <el-tab-pane label="加值費用" name="5">
                            <section>

                            </section>
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
.content-title {
    font-size: 28px;
    color: rgb(32, 151, 219);
    margin-bottom: 24px;
}

.title {
    display: flex;
    align-items: center;
    line-height: 42px;
    font-size: 24px;
    font-weight: bold;
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
hr {
    margin: 24px 0px;
}
.tag {
    margin-right: 12px;
}

</style>