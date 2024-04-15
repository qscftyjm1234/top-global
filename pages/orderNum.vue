<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-04-02 16:59:12
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-04-15 14:36:53
 * @FilePath: \top-glob\pages\news.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script lang="ts" setup>
    import { isMobile } from '@/utils/tools.js' 
    onMounted(() => {
	    isMobileLayout.value = isMobile();
    });
    const isMobileLayout = ref(false);
    const activeName = ref('1');
    const handleClick = (tab, event) => {
        console.log(tab, event)
    };
    const activities = [
        {
            content: '已將貨物寄送本國物流',
            timestamp: '2018-04-15',
        },
        {
            content: '進入台灣機場',
            timestamp: '2018-04-13',
        },
        {
            content: '已送達他國物流中心',
            timestamp: '2018-04-11',
        },
    ];
    const input = ref('')
</script>
<template>
    <section>
        <div :class="isMobileLayout ? '' : 'wrap'">
            <div class="title">單號查詢</div>
            <el-row justify="space-between" :gutter="20" style="align-items: center">
                <el-col :span="24">
                    <el-tabs
                        v-model="activeName"
                        type="card"
                        class="demo-tabs"
                        @tab-click="handleClick"
                    >
                        <el-tab-pane label="集運單號查詢" name="1">
                            <section>
                                <div style="margin-bottom: 32px;">
                                    <el-input v-model="input" style="width: 240px; margin-right: 8px;" placeholder="請輸入集運單號" />
                                    <el-button type="primary">查詢</el-button>
                                </div>
                                <el-timeline style="max-width: 600px">
                                    <el-timeline-item
                                        v-for="(activity, index) in activities"
                                        :key="index"
                                        :timestamp="activity.timestamp"
                                        >
                                        {{ activity.content }}
                                    </el-timeline-item>
                                </el-timeline>
                            </section>
                        </el-tab-pane>
                        <el-tab-pane label="貨運單號查詢" name="2">
                            <section>
                                <div style="margin-bottom: 32px;">
                                    <el-input v-model="input" style="width: 240px; margin-right: 8px;" placeholder="請輸入集運單號" />
                                    <el-button type="primary">查詢</el-button>
                                </div>
                                <el-timeline style="max-width: 600px">
                                    <el-timeline-item
                                        v-for="(activity, index) in activities"
                                        :key="index"
                                        :timestamp="activity.timestamp"
                                        >
                                        {{ activity.content }}
                                    </el-timeline-item>
                                </el-timeline>
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

.text-limit {
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 设置最大行数 */
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.two-lines {
  height: 40px; /* 假设每行高度为20px，总高度为两行 */
  line-height: 20px; /* 设置行高为每行高度的一半，使得文本垂直居中 */
  overflow: hidden; /* 如果文本超出容器高度，隐藏溢出部分 */
}
</style>