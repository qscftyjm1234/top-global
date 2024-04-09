
  
<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router';



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
            <div style="width: 100%; display: flex; justify-content: center; border-bottom: 1px solid #dcdfe6; background-color: rgba(255, 255, 255, 0.9);">
                <el-menu
                    style="max-width: 1200px; width: 100%; border-bottom: 0px; background-color:transparent"
                    class="el-menu-demo"
                    mode="horizontal"
                    :ellipsis="false"
                    :default-active="activeIndex"
                    @select="handleSelect"
                    >
                    <div style="display: flex; align-items: center;">
                        <NuxtLink to="/">
                            <el-avatar :size="48">
                                <img
                                    src="@/assets/images/logo.jpg"
                                /> 
                            </el-avatar>
                        </NuxtLink>
                        <div style="display: flex; margin-left: 16px;">
                            <div style="font-weight: bold;">TGE 邏捷運通有限公司</div>
                            <span style="font-size: 14px; vertical-align : text-bottom">（Top Global Express）</span>
                        </div>
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
<style scoped>
    .flex-grow {
        flex-grow: 1;
    }
    .text-decoration-none {
        text-decoration: none;
    }
</style>