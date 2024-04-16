<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-04-02 14:30:49
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-04-16 11:50:52
 * @FilePath: \top-glob\pages\Product.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

<script setup>
import { ref, reactive, onMounted } from 'vue';
import { isMobile } from '@/utils/tools.js' 
onMounted(() => {
    fadeInElements.value = Array.from(document.getElementsByClassName('fade-in'));
    document.addEventListener('scroll', handleScroll);
    handleScroll();    
	isMobileLayout.value = isMobile();
});
const isMobileLayout = ref(false);
const fadeInElements = ref([]);
const handleScroll = (evt) => {
    for (var i = 0; i < fadeInElements.value.length; i++) {
        var elem = fadeInElements.value[i]
        if (isElemVisible(elem)) {
            elem.style.opacity = '1'
            elem.style.transform = 'scale(1)'
            fadeInElements.value.splice(i, 1) // 只让它运行一次
        };
    };
};
const isElemVisible = (el) => {
  var rect = el.getBoundingClientRect()
  var elemTop = rect.top + 200 // 200 = buffer
  var elemBottom = rect.bottom
  return elemTop < window.innerHeight && elemBottom >= 0
};
const tagers = [
  { title: '安全', imgUrl: '2018-04-15',},
  { title: '信賴', imgUrl: '2018-04-15',},
  { title: '快速', imgUrl: '2018-04-15',},
  { title: '專業', imgUrl: '2018-04-15',},
  { title: '親民', imgUrl: '2018-04-15',},
]
</script>
<template>
    <section>
        <div :class="isMobileLayout ? '' : 'wrap'">
            <div class="title">關於我們</div>
            <el-row justify="space-between" :gutter="20" style="align-items: center;">
                <el-col :span="11" :xs="24">
                    <div style="display: flex; align-items: center">
                        <div
                            style="
                                width: 120px;
                                height: 120px;
                                margin-right: 20px;
                                overflow: hidden; 
                                border-radius: 16px;
                            "
                        >
                            <img
                                src="@/assets/images/logo.jpg"
                                style="width: 100%"
                            />
                        </div>
                        <div>
                            <h1 style="margin: 4px 0px">邏捷運通有限公司</h1>
                            <el-text class="mx-1" type="info"
                                >Top GlobaL Express</el-text
                            >
                        </div>
                    </div>
                    <p style="line-height: 2rem; margin-top: 24px">
                        <b>邏捷通運(TGE)</b>是一間台灣在地公司，成立於西元
                        2023年，從事越南、印尼與日本的物流]輸企業，提
                        供客戶最專業可靠的服務。 們的員工在業界歷都
                        已超過10年，擁k專業背景才能在物流界快速崛起。
                        除了秉持傳統物流的….更加融入了…是間創新的物流
                        公司。 們擁k…優勢，為每一個客戶量身打造，在
                        TGE，您就是 們的VIP。
                    </p>
                </el-col>
                <el-col :span="13" :xs="24">
                    <el-carousel :interval="2000" type="card" height="200">
                        <el-carousel-item style="overflow: hidden; border-radius: 16px">
                            <img src="@/assets/images/about/about-img-03.jpg" style="width: 100%; height: 100%; object-fit: cover" alt="">
                        </el-carousel-item>
                        <el-carousel-item style="overflow: hidden; border-radius: 16px">
                            <img src="@/assets/images/about/about-img-04.jpg" style="width: 100%; height: 100%; object-fit: cover" alt="">
                        </el-carousel-item>
                        <el-carousel-item style="overflow: hidden; border-radius: 16px">
                            <img src="@/assets/images/about/about-img-05.jpg" style="width: 100%; height: 100%; object-fit: cover" alt="">
                        </el-carousel-item>
                    </el-carousel>
                </el-col>
            </el-row>
            <hr style= "border:1px dashed #b8b8b8; margin: 24px 0px" />
            <div class="title">五大目標</div>
            <el-row justify="center" :gutter="24" style="margin: 64px 0px">
                <el-col :span="4" :xs="8" v-for="(item, index) in tagers" :key="index">
                    <div style="text-align: center" class="hoverItem">
                        <div class="circle fade-in">
                            <h2>{{ item.title }}</h2>
                            <!-- <img src="@/assets/images/about/about-img-05.jpg" style="width: 100%; height: 100%; object-fit: cover" alt=""> -->
                        </div>
                    </div>
                </el-col>
            </el-row>
            <div style="display: flex; width: 100%; margin: 48px 0px; border-radius: 50px; overflow: hidden" class="fade-in">
                <div style="width: 360px; aspect-ratio: 1/1; overflow: hidden">
                    <img style="width: 100%; height: 100%;object-fit: cover;" src="@/assets/images/about/about-img-01.jpg">
                </div>
                <div style="text-align: center; background-color: ghostwhite; width: 100%; display: flex; align-items: center; justify-content: center; flex-direction: column; padding: 20px 36px">
                    <h1 style="margin-bottom: 0px; color: firebrick;" :style="{ fontSize: isMobileLayout ? '20px' : '32px'}">"展現 職人精神"</h1>
                    <p>「在每個細節中流露著匠心，我們以職人的精神，專注於每一個步驟，為您提供卓越的品質和服務。」</p>
                </div>
            </div>
            <div style="display: flex; width: 100%; margin: 48px 0px; border-radius: 50px; overflow: hidden" class="fade-in">
                <div style="text-align: center; background-color: ghostwhite; width: 100%; display: flex; align-items: center; justify-content: center; flex-direction: column; padding: 20px 36px">
                    <h1 style="margin-bottom: 0px; color: firebrick; font-size: 20px">"貫徹 親民服務"</h1>
                    <p>「我們始終貫徹親民服務的理念，以親切專業的態度，為每位客戶提供貼心周到的服務，讓您感受到我們的用心與關懷。」</p>
                </div>
                <div style="width: 360px; aspect-ratio: 1/1; overflow: hidden">
                    <img style="width: 100%; height: 100%; object-fit: cover;" src="@/assets/images/about/about-img-02.webp">
                </div>
            </div>
        </div>
    </section>
    <div class="step-card">
        <div class="step-content">
            <h2 style="margin-top: 0px">
                <strong>科學管理 現代化實踐</strong>
            </h2>
            <p>
                科學管理，業務精準，提效降耗
            </p>
        </div>
    </div>
    <section>
        <div style="display: flex; justify-content: center; align-items: center; flex-direction: column; width: 100%; padding: 64px 0px" class="fade-in">
            <h2 style="margin-bottom: 20px; text-align: center;">邏捷通運為您  省時、省力，打造CP質最高的服務</h2>
            <div style="background-color: firebrick; width: 96px; height: 5px; margin-bottom: 20px"></div>
        </div>
    </section>
    <section>
        <div :class="isMobileLayout ? '' : 'wrap'">
            <hr style= "border:1px dashed #b8b8b8; margin: 24px 0px" />
            <h2>【聯絡我們】</h2>
            <p style="line-height: 2rem">
                歡迎您的觀看，有任何相關問題，歡迎來信請Email至 <a href="tyn@topglobal.com.tw" target="_blank">tyn@topglobal.com.tw</a> <br />
                或撥打04-23802660<br />
                或聯絡我們官方LINE @893ZLOWM<br />
                與我們連繫。謝謝！
            </p>
            <a href="https://lin.ee/lgoVP3a" style="cursor: pointer">
                <img src="https://scdn.line-apps.com/n/line_add_friends/btn/zh-Hant.png" alt="加入好友" height="48" border="0" target="_blank">
            </a>
        </div>
    </section>
</template>

<style scoped>
.wrap {
    width: 1080px;
    margin: 0px auto;
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
    border-radius: 50%;
    box-shadow: inset 5px 5px 10px rgba(83, 83, 83, 0.2); 
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 28px;
    font-weight: bold;
    aspect-ratio: 1/1;
    overflow: hidden;
    background-size: cover;
    color: white;
    background-color: #414141;
    margin: 0px;
}
.hoverItem {
    cursor: pointer;
    transition: 0.5s all ease;
}
.hoverItem:hover {
    transform: translateY(-20px);
}
.circle::before {
	content: ''; /* 伪元素内容为空 */
	position: absolute; /* 绝对定位 */
	top: 0;
	left: 0;
	width: 100%; /* 宽度100% */
	height: 100%; /* 高度100% */
	background-image: url("@/assets/images/about/123.jpg");
	background-size: cover; /* 图片铺满 */
	background-position: center; /* 图片居中 */
	opacity: 1; /* 透明度 */
	z-index: -1; /* 位于底部 */
	opacity: 0.4;
}

.step-card{
	position: relative;
	padding: 108px 32px;
	background-size: cover; /* 确保图像覆盖整个容器 */
	background-position: center; /* 将背景图像置中 */
	overflow: hidden;
	/* background-size: cover; */
	/* background-image: url("assets/images/home/step-img-01.jpg"); */
	background-color: rgba(255, 255, 255, 0.8);
}
.step-card::before {
	content: ''; /* 伪元素内容为空 */
	position: absolute; /* 绝对定位 */
	top: 0;
	left: 0;
	width: 100%; /* 宽度100% */
	height: 100%; /* 高度100% */
	background-image: url('assets/images/home/step-img-01.jpg'); /* 背景图片 */
	background-size: cover; /* 图片铺满 */
	background-position: center; /* 图片居中 */
	opacity: 1; /* 透明度 */
	z-index: -1; /* 位于底部 */
}
.step-content {
    text-align: center;
}
.fade-in {
    opacity: 0;
    transition: 0.5s all ease-out;
    transform: scale(0.8);
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>