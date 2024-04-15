<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-04-02 14:30:49
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-04-11 11:57:13
 * @FilePath: \top-glob\pages\Product.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script lang="ts" setup>
    import { ref, reactive, onMounted } from 'vue';
    import img02 from '@/assets/images/forbid/forbid-img-02.jpg';
    import img03 from '@/assets/images/forbid/forbid-img-03.jpg';
    import img04 from '@/assets/images/forbid/forbid-img-04.jpg';
    import img05 from '@/assets/images/forbid/forbid-img-05.jpg';
    import img06 from '@/assets/images/forbid/forbid-img-06.jpg';
    import img07 from '@/assets/images/forbid/forbid-img-07.jpg';
    import img08 from '@/assets/images/forbid/forbid-img-08.jpg';
    import img09 from '@/assets/images/forbid/forbid-img-09.jpg';
    onMounted(() => {
        fadeInElements.value = Array.from(document.getElementsByClassName('fade-in'));
        document.addEventListener('scroll', handleScroll);
        handleScroll();
    })
    const fadeInElements = ref([]);
    const handleScroll = (evt) => {
        for (var i = 0; i < fadeInElements.value.length; i++) {
        var elem = fadeInElements.value[i]
        if (isElemVisible(elem)) {
            elem.style.opacity = '1'
            elem.style.transform = 'scale(1)'
            fadeInElements.value.splice(i, 1) // 只让它运行一次
        }
        }
    };
    const isElemVisible = (el) => {
        var rect = el.getBoundingClientRect()
        var elemTop = rect.top + 200 // 200 = buffer
        var elemBottom = rect.bottom
        return elemTop < window.innerHeight && elemBottom >= 0
    };
    const forbidGoods = ref([
        { title: "火藥類", content: "煙火、爆竹、火藥、彈藥等", imgUrl: img06, },
        { title: "易燃液體", content: "打火機油、油漆、指甲油、美甲凝膠、酒精、稀釋劑、塗料、光漆、香水、精油等。", imgUrl: img02, },
        { title: "氧化性物", content: "漂白劑、過氧化氫、個人用小型氧氣製造機、染髮劑等", imgUrl: img03, },
        { title: "高壓易燃氣體", content: "高壓噴霧罐、打火機補充瓦斯、潛水用氧氣罐、露營用瓦斯爐罐裝瓦斯、滅火器、高壓除塵空氣罐、攜帶式氧氣瓶、氦氣(笑氣)瓶、瓦斯暖爐汽車懸吊系統等", imgUrl: img04, },
        { title: "易燃物質", content: "火柴、打火機、木炭、各式暖爐(石油、煤油、柴油....等)。", imgUrl: img05, },
        { title: "毒性物質", content: "農藥、氯仿、水蒸式殺蟲劑等", imgUrl: img06, },
        { title: "腐蝕性物質", content: "水銀、液態電池等", imgUrl: img07, },
        { title: "放射性物質", content: "鈾、鈽、銫、鍍、核廢料等", imgUrl: img09, },
        { 
            title: "其他", 
            content: "磁鐵、引擎、乾冰、石綿、菸類、毒品、麻藥、精神藥品、猥褻物品、彩券、空氣槍、模造刀(美術刀)、家畜飼料、植物、生鮮食品、活體動物(活盛頓條約)、含有血液的製劑品、寶石、鑽石(包含加工品)、偽造貨幣、郵票或印花、個人文件、有價證券、國寶、重要文化遺產、重要美術品、拷貝光碟、盜版光碟、產地不明之物品、信用卡、商品票券(演唱會門票等)、機票等", 
            imgUrl: img08,
        },
    ]);
        
    
    const activeName = ref('1');
    const handleClick = (tab, event) => {
        console.log(tab, event)
    };
</script>
<template>
    <section>
        <div class="wrap">
            <div class="title">禁運物品及限制</div>
            <el-row justify="space-between" :gutter="20" style="align-items: center">
                <el-col :span="24">
                    <el-tabs
                        v-model="activeName"
                        type="card"
                        class="demo-tabs"
                        @tab-click="handleClick"
                    >
                        <el-tab-pane label="禁運物品" name="1">
                            <section>
                                <div style="display: flex; align-items: center; flex-direction: column; width: 100%; margin-bottom: 48px">
                                    <strong style="margin-bottom: 20px; font-size: 28px; color: firebrick; font-weight: bold">＂請注意以下為禁運物品＂</strong>
                                    <div style="background-color: firebrick; width: 96px; height: 5px; margin-bottom: 20px"></div>
                                    <el-text style="font-size: 16px" type="info">
                                        <el-icon><InfoFilled /></el-icon>海關列屬違禁品之品項不得寄送，寄送貨物裏若查有相關違禁物品，一律報警處理。
                                    </el-text>
                                </div>
                                <!-- 禁運商品 -->
                                <el-row :gutter="20" style="border-radius: 8px">
                                    <el-col :span="6" v-for="item in forbidGoods">
                                        <el-card shadow="hover" style="border: 0px; margin-bottom: 0px" class="fade-in">
                                            <div class="circle">
                                                <img style="width: 100%; height: 100%; object-fit: cover;" :src="item.imgUrl">
                                            </div>
                                            <div style="padding: 12px; text-align: center;">
                                                <h3 style="margin: 0px 0px 8px 0px">{{ item.title }}</h3>
                                                <el-text class="mx-1 text-limit two-lines" type="info">{{ item.content }}</el-text>
                                            </div>
                                        </el-card>
                                    </el-col>
                                </el-row>
                            </section>
                        </el-tab-pane>
                        <el-tab-pane label="限制" name="2">
                            <h2>等待提供，或移除</h2>
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

.circle {
    overflow: hidden;
    width: 100%;
    border-radius: 50%;
    aspect-ratio: 1/1;
}
</style>