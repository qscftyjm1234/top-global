<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-04-02 14:30:49
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-04-10 17:55:10
 * @FilePath: \top-glob\pages\Product.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script lang="ts" setup>
    import { ref, onMounted } from 'vue'
    import { isMobile } from '@/utils/tools.js' 

    onMounted(() => {
        isMobileLayout.value = isMobile();
    });
    const activeName = ref('1');
    const handleClick = (tab, event) => {
        console.log(tab, event)
    }
const isMobileLayout = ref(false);  
</script>
<template>
    <section>
        <div :class="isMobileLayout ? '' : 'wrap'">
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
                                <img style="max-width: 540px; width: 100%; margin-bottom: 20px" src="@/assets/images/server/server-img-01.png" /> 
                                <div class="content-title">一、體積(材積)計算方式</div>
                                <p>
                                    以<mark>公分(cm)</mark>為測量單位<br />
                                    到貨後實際量測包裹外箱的【 長ｘ寬ｘ高 (cm)／6000 = 材積重量 】<br />
                                    實際量測若遇小數點採無條件進位(未滿1公斤以1公斤計算)<br />
                                </p>
                                <hr />
                                <div class="content-title">二、重量計算方式</div>
                                <p>
                                    以<mark>公斤(kg)</mark>為測量單位<br />
                                    到貨後量測實際重量=實重重量<br />
                                    實際測量若遇小數點採無條件進位(未滿1公斤以1公斤計算)<br />
                                    ※快遞單件任兩邊不超過75CM。單件限重30KG。<br />
                                </p>
                             </section>
                        </el-tab-pane>
                        <el-tab-pane label="海運" name="7">
                            <section>
                                <!-- 這個圖片有誤要改這個圖片有誤要改這個圖片有誤要改這個圖片有誤要改 -->
                                <img style="max-width: 540px; width: 100%; margin-bottom: 20px" src="@/assets/images/server/server-img-01.png" /> 
                                <div class="content-title">一、體積(材積)計算方式</div>
                                <p>
                                    以<mark>公分(cm)</mark>為測量單位<br />
                                    到貨後實際量測包裹外箱的【 長ｘ寬ｘ高 (cm)／5000 = 材積重量 】<br />
                                    實際量測若遇小數點採無條件進位(未滿1公斤以1公斤計算)。<br />
                                </p>
                                <hr />
                                <div class="content-title">二、重量計算方式</div>
                                <p>
                                    以<mark>公斤(kg)</mark>為測量單位<br />
                                    到貨後量測實際重量=實重重量<br />
                                    實際測量若遇小數點採無條件進位(未滿1公斤以1公斤計算)。<br />
                                </p>
                            </section>
                        </el-tab-pane>
                        <el-tab-pane label="EMS 快遞" name="8">
                            <section>
                                <!-- 這個圖片有誤要改這個圖片有誤要改這個圖片有誤要改這個圖片有誤要改 -->
                                <img style="max-width: 540px; width: 100%; margin-bottom: 20px" src="@/assets/images/server/server-img-01.png" /> 
                                <div class="content-title">一、體積(材積)計算方式</div>
                                <p>
                                    以<mark>公分(cm)</mark>為測量單位<br />
                                    到貨後實際量測包裹外箱的【 長ｘ寬ｘ高 (cm)／6000 = 材積重量 】<br />
                                    實際量測若遇小數點採無條件進位(未滿1公斤以1公斤計算)。
                                </p>
                                <hr />
                                <div class="content-title">二、重量計算方式</div>
                                <p>
                                    以<mark>公斤(kg)</mark>為測量單位<br />
                                    到貨後量測實際重量=實重重量<br />
                                    實際測量若遇小數點採無條件進位(未滿1公斤以1公斤計算)<br />
                                    ※長+(寬+高)*2不能超過300公分。單件限重30KG。
                                </p>
                            </section>
                        </el-tab-pane>
                        <el-tab-pane label="加值費用" name="5">
                            <section>
                                <!-- 這個圖片有誤要改這個圖片有誤要改這個圖片有誤要改這個圖片有誤要改 -->
                                <div class="content-title">一、緩衝包材填充 (以箱為單位)</div>
                                <p>
                                    價格：<mark>50／箱</mark><br />
                                    <ul>
                                        <li>提供基本氣泡膜及緩衝用包材、封箱帶等填滿內部空間，可防止箱內物品晃動或碰撞。</li>
                                        <li>會略微增加包裹體積重量。。</li>
                                        <li>若包裹體積過大則需另外報價。。</li>
                                        <li>加值服務不提供確認及清點內容物服務，若需要確認包裹內容物，歡迎使用"拍照所有商品(NTD150/張)"服務。</li>
                                        <li>請注意加強包裝服務僅能降低破損概率，並不能完全避免破損。 易碎品、家具類、美妝品、液體、商產品包裝盒及部分等極度易損壞物品，即便填寫代運單時有勾選加強包裝等服務，運送過程若不幸損壞，海克力斯不予賠償。</li>
                                    </ul>
                                </p>
                                <img style="max-width: 540px; width: 100%; margin-bottom: 20px" src="@/assets/images/server/server-img-02.png" /> 
                                <hr />
                                <div class="content-title">二、外箱打膠膜/氣泡袋 (以箱為單位)</div>
                                <p>
                                    價格：<mark>100／箱</mark><br />
                                </p>
                                <img style="max-width: 540px; width: 100%; margin-bottom: 20px" src="@/assets/images/server/server-img-03.png" /> 
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
p { 
  line-height: 36px; /* 设置行高为每行高度的一半，使得文本垂直居中 */
  overflow: hidden; /* 如果文本超出容器高度，隐藏溢出部分 */
}
</style>