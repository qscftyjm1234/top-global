<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-04-02 15:13:17
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-04-16 11:29:58
 * @FilePath: \top-glob\components\Header.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

  
<script setup>
import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router';
import 'element-plus/theme-chalk/display.css'
import { isMobile } from '@/utils/tools.js' 
onMounted(() => {
    isMobileLayout.value = isMobile();
});
const isMobileLayout = ref(false);

const currentRoute = useRoute();
const activeIndex = ref('1');

const handleSelect = (key, keyPath) => {
};

const tanfarIndex = (routeName) => {
    switch(routeName) {
        case "index":
            return "0";
        case "about":
            return "1";
        case "server":
            return "2";
        case "forbid":
            return "3";
        case "news":
            return "4";
        case "orderNum":
            return "5";
    }
};

watch(
    () => currentRoute.name,
    (to, from) => {
        activeIndex.value = tanfarIndex(currentRoute.name);
    }, {
        immediate: true,
    }
);
</script>
    <template>
        <el-affix :offset="0">
            <div 
                style="width: 100%; display: flex; justify-content: center; border-bottom: 1px solid #dcdfe6; background-color: rgba(255, 255, 255, 0.9);"
                class="header"
            >
            <el-menu
                style="max-width: 1200px; width: 100%; border-bottom: 0px; background-color: transparent; padding: 12px"
                class="el-menu-demo"
                mode="horizontal"
                :ellipsis="true"
                :default-active="activeIndex"
                @select="handleSelect"
            >
                    <div style="display: flex; align-items: center;">
                        <NuxtLink to="/" style="display: flex; align-items: center; margin-right: 8px">
                            <el-avatar :size="48">
                                <img
                                    src="@/assets/images/logo.jpg"
                                /> 
                            </el-avatar>
                        </NuxtLink>
                        <div style="display: flex; align-items: center;">TGE 邏捷運通有限公司</div>
                        <span class="hidden-sm-and-down" style="display: flex; align-items: center; font-size: 14px;">（Top Global Express）</span>
                    </div>
                    <div class="flex-grow"></div>
                    <el-menu-item index="1" class="el-mr-1" >
                        <NuxtLink to="/about" class="text-decoration-none">
                            <b>關於我們</b>
                        </NuxtLink>
                    </el-menu-item>
                    <el-menu-item index="2">
                        <NuxtLink to="/server" class="text-decoration-none">
                            <b>服務介紹及費用</b>
                        </NuxtLink>
                    </el-menu-item>
                    <el-menu-item index="3">
                        <NuxtLink to="/forbid" class="text-decoration-none">
                            <b>禁運用品及限制</b>
                        </NuxtLink>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <NuxtLink to="/news" class="text-decoration-none">
                            <b>最新公告</b>
                        </NuxtLink>
                    </el-menu-item>
                    <el-menu-item index="5">
                        <NuxtLink to="/orderNum" class="text-decoration-none"><b>單號查詢</b></NuxtLink>
                    </el-menu-item>
                </el-menu>
            </div>
        </el-affix>
    </template>
<style>
    .flex-grow {
        flex-grow: 1;
    }
    .text-decoration-none {
        text-decoration: none;
    }
    .header .menu .el-sub-menu {
        margin-left: 0 auto !important;
    }
    .header .menu .el-sub-menu .el-sub-menu__title {
        padding: 0px 20px !important;
    }
</style>