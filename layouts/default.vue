<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-04-02 14:32:23
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-04-16 09:57:36
 * @FilePath: \top-glob\layouts\default.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup>
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// You might choose this based on an API call or logged-in status
const layout = "main-content";

const nuxtApp = useNuxtApp()
// console.log(nuxtApp)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  nuxtApp.vueApp.component(key, component)
}
</script>
<template>
    <!-- 首先創建在根目錄一個layouts的資料夾，並新增default.vue，<NuxtPage>代表page資料夾裡面所有的.vue，不使用<NuxtPage>，那麼會看不到page的內容。 -->
    <div>
        <Header />
		<NuxtPage></NuxtPage>
        <Footer />
    </div>
</template>