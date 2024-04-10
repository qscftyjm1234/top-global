<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-04-02 16:59:12
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-04-10 14:54:06
 * @FilePath: \top-glob\pages\news.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script lang="ts" setup>
    import { ref, reactive } from 'vue';
    import cardImg01 from '@/assets/images/news/card-img-01.jpg';
    import cardImg02 from '@/assets/images/news/card-img-02.jpg';
    import cardImg03 from '@/assets/images/news/card-img-03.jpg';
    import cardImg04 from '@/assets/images/news/card-img-04.jpg';
    const news = reactive([
        {
            imgUrl: cardImg01,
            title: '清明連假',
            content: '4/4~4/7 有連續假期。',
            fbUrl: 'https://www.facebook.com/photo.php?fbid=333397176402219&set=pb.100091958164533.-2207520000&type=3',
        },
        {
            imgUrl: cardImg02,
            title: '越南生活用品快遞 只要230元',
            content: '每週三跟週五發貨，有興趣寄送的請洽業務。',
            fbUrl: 'https://www.facebook.com/photo/?fbid=325322593876344&set=pb.100091958164533.-2207520000',
        },
        {
            imgUrl: cardImg03,
            title: '紀念 “婦女節” ',
            content: 'TGE向廣大客戶致以最美好的祝福！ 祝福全世界的女性朋友們每天都過得快快樂樂🎉。',
            fbUrl: 'https://www.facebook.com/photo.php?fbid=319334087808528&set=pb.100091958164533.-2207520000&type=3',
        },
        {
            imgUrl: cardImg04,
            title: '元旦放假通知',
            content: 'TGE 謝謝各位夥伴們跟著我們一起走完了2023年接下來我們要一起迎接2024年 🎇🎆🎇🎆。',
            fbUrl: 'https://www.facebook.com/photo.php?fbid=278238605251410&set=pb.100091958164533.-2207520000&type=3',
        },
    ])
</script>
<template>
    <section>
        <div class="wrap">
            <div class="title">最新公告</div>
            <el-row :gutter="20" style="align-items: center; border-radius: 8px">
                <el-col :span="8" v-for="item in news">
                    <el-card shadow="hover" :body-style="{ width: '100%', padding: '0px' }" style="border: 0px; margin-bottom: 20px">
                        <img style="width: 100%" :src="item.imgUrl">
                        <div style="padding: 12px">
                            <h3 style="margin: 0px 0px 8px 0px">{{ item.title }}</h3>
                            <el-text class="mx-1 text-limit two-lines" type="info">{{ item.content }}</el-text>
                            <div style="text-align: right; margin-top: 12px">
                                <a :href="item.fbUrl" style="">
                                    <el-button type="primary" plain>
                                        前往貼文
                                    </el-button>
                                </a>
                            </div>
                        </div>
                    </el-card>
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