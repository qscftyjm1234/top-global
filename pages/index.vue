<script setup>
import { ref, reactive, onMounted } from 'vue';
import goodsImg01 from '@/assets/images/home/goods-img-01.jpg';
import goodsImg02 from '@/assets/images/home/goods-img-02.jpg';
import goodsImg03 from '@/assets/images/home/goods-img-03.jpg';
import goodsImg04 from '@/assets/images/home/goods-img-04.jpg';
import newsImg01 from '@/assets/images/news/card-img-01.jpg';
import newsImg02 from '@/assets/images/news/card-img-02.jpg';
import newsImg03 from '@/assets/images/news/card-img-03.jpg';
import { isMobile } from '@/utils/tools.js' 
const activeName = ref('1');
const fadeInElements = ref([]);
const isMobileLayout = ref(false);
onMounted(() => {
    fadeInElements.value = Array.from(document.getElementsByClassName('fade-in'));
    document.addEventListener('scroll', handleScroll);
    handleScroll();
    fetch("https://api.unsplash.com/photos/?client_id=XeMLEo-cG4umamAaRPxahF5CC7nhdSYGtbKlmU1O7Sk")
    .then(async(res) => {
        const data = res.json();
        return data;
    })
    .then((data) => {
        console.log(data);
    });    
	isMobileLayout.value = isMobile();
})
const handleScroll = (evt) => {
    for (var i = 0; i < fadeInElements.value.length; i++) {
    var elem = fadeInElements.value[i]
    if (isElemVisible(elem)) {
        elem.style.opacity = '1'
        elem.style.transform = 'scale(1)'
        fadeInElements.value.splice(i, 1) // 只让它运行一次
    }
    }
}
const isElemVisible = (el) => {
  var rect = el.getBoundingClientRect()
  var elemTop = rect.top + 200 // 200 = buffer
  var elemBottom = rect.bottom
  return elemTop < window.innerHeight && elemBottom >= 0
}

const activeTabName = ref('first')

const handleClick = (tab, event) => {
  console.log(tab, event)
};

const goodsServers = reactive([
	{ title: "空運快遞", content: "迅速將您的包裹送達全球，提供高效、安全的國際運輸服務。", imgUrl: goodsImg01 },
	{ title: "專業貨運服務", content: "專業、快速，完美處理您的物流需求。", imgUrl: goodsImg02 },
	{ title: "集運海運", content: "全球物流解決方案，海運專業服務。", imgUrl: goodsImg03 },
	{ title: "多國進出口服務", content: "精準物流方案，專業解決您的進出口需求。", imgUrl: goodsImg04 },
]);
// 流程
const steps = reactive([
	{ title: "下單前請先確認商品是否可以進口?" },
	{ title: "申請EZ WAY實名認證" },
	{ title: "下單後請告知我們您的運單號碼" },
	{ title: "告知我們您的實名認證+收件資訊(姓名、電話、地址、身分證)" },
	{ title: "貨到台灣會通知付款(運費+稅金)" },
	{ title: "確認款項後就可以發貨質送到家" },
]);
// 最新消息
const news = reactive([
	{
		imgUrl: newsImg01,
		title: '清明連假',
		content: '4/4~4/7 有連續假期。',
		fbUrl: 'https://www.facebook.com/photo.php?fbid=333397176402219&set=pb.100091958164533.-2207520000&type=3',
		date: "2024-04-11",
	},
	{
		imgUrl: newsImg02,
		title: '越南生活用品快遞 只要230元',
		content: '每週三跟週五發貨，有興趣寄送的請洽業務。',
		fbUrl: 'https://www.facebook.com/photo/?fbid=325322593876344&set=pb.100091958164533.-2207520000',
		date: "2024-04-11",
	},
	{
		imgUrl: newsImg03,
		title: '紀念 “婦女節” ',
		content: 'TGE向廣大客戶致以最美好的祝福！ 祝福全世界的女性朋友們每天都過得快快樂樂🎉。',
		fbUrl: 'https://www.facebook.com/photo.php?fbid=319334087808528&set=pb.100091958164533.-2207520000&type=3',
		date: "2024-04-11",
	},
])
// 問題
const questions = reactive([
	{ title: "服務國家?", content: "包含越南、印尼、泰國、大陸、日本、菲律賓、美國等等，更多詳細內容可詢問小編喔!!", name: 1 },
	{ title: "如何聯絡我們?", content: "<a href='https://line.me/R/ti/p/@893zlowm' target='_blan'>https://line.me/R/ti/p/@893zlowm</a>  或透過搜尋ID：@893ZLOWM，歡迎詢問我們唷!", name: 2 },
])
</script>
<template>
    <div class="block text-center">
        <el-carousel autoplay height="auto">
            <el-carousel-item style="width: 100%; height: auto;">
                <img style="width: 100%; height: auto;" src="@/assets/images/home/banner-1.jpg">
            </el-carousel-item>
            <el-carousel-item style="width: 100%; height: auto;">
                <img style="width: 100%; height: auto;" src="@/assets/images/home/banner-1.jpg">
            </el-carousel-item>
        </el-carousel>
    </div>
    <section style="position: relative;">
		<!-- <img src="@/assets/images/home/bg-01.png" alt="" style="position: absolute; right: 0; top: 0"> -->
		<div class="wrap">
			
			<div class="title">
				最新消息
			</div>
			<el-row :gutter="20" style="align-items: center; border-radius: 8px">
				<el-col :span="8" :xs="24" v-for="item in news">
					<!-- 桌基板 -->
					<!-- <el-card shadow="hover" :body-style="{ width: '100%', padding: '0px' }" style="border: 0px; margin-bottom: 20px" class="fade-in">
						<img style="width: 100%" :src="item.imgUrl">
						<div style="padding: 12px">
							<h3 style="margin: 0px 0px 8px 0px">{{ item.title }}</h3>
							<el-text class="mx-1 text-limit two-lines" type="info">{{ item.content }}</el-text>
							<div style="display: flex; justify-content: space-between; align-items: center; margin-top: 12px">
								<el-text class="" type="info">{{ item.date }}</el-text>
								<a :href="item.fbUrl" style="">
									<el-button type="primary" plain>
										前往貼文
									</el-button>
								</a>
							</div>
						</div>
					</el-card> -->
					<!-- 手機板 -->
					<el-card shadow="hover" :body-style="{ width: '100%', padding: '0px', display: 'flex', flexWrap: 'nowrap' }" style="border: 0px; margin-bottom: 20px; width: 100%" class="fade-in">
						<el-row>
							<el-col :span="6">
								<img style="width: 100%" :src="item.imgUrl">
							</el-col>
							<el-col :span="18">
								<div style="padding: 8px">
									<h3 style="margin: 0px 0px 8px 0px">{{ item.title }}</h3>
									<el-text class="mx-1 text-limit two-lines" type="info">{{ item.content }}</el-text>
									<div style="display: flex;  width: 100%; justify-content: space-between; align-items: center; margin-top: 12px">
										<el-text class="" type="info">{{ item.date }}</el-text>
										<a :href="item.fbUrl" style="">
											<el-button type="primary" plain>
												前往貼文
											</el-button>
										</a>
									</div>
								</div>
							</el-col>
						</el-row>
					</el-card>
				</el-col>
			</el-row>
			<div style="text-align: center; margin-top: 32px">
				<NuxtLink to="/news" class="text-decoration-none">
					<el-button type="primary" round>查看更多公告<el-icon><ArrowRightBold /></el-icon></el-button>
				</NuxtLink>
			</div>
		</div>
    </section>
    <section style="background-color: #f7f7f7">
		<div>
			<el-row justify="space-between" :gutter="20" :class="isMobileLayout ? '' : 'wrap'">
				<el-col>
					<div class="title">
						服務項目
					</div>
					<el-row :gutter="20">
						<el-col :span="12" :xs="24" style="margin-bottom: 20px" v-for="item in goodsServers">
							<el-card style="border: 0px; height: 100%;" :body-style="{ width: '100%', display: 'flex', padding: '0px' }" class="fade-in">
								<div style="min-width: 180px; width: 180px; height: 100%;" :style="{ maxWidth: isMobileLayout ? '120px': '180px' }">
									<img :src="item.imgUrl" style="width: 100%; vertical-align: middle; aspect-ratio: 1/1; object-fit: cover;">
								</div>
								<div style="display: flex; flex-direction: column; justify-content: center; padding: 0px 16px; width: 100%">
									<h2 style="margin: 0px;">{{ item.title }}</h2>
									<p><el-text class="mx-1" type="info">{{ item.content }}</el-text></p>
								</div>
							</el-card>
						</el-col>
					</el-row>
				</el-col>
			</el-row>
			<div style="text-align: center; margin-top: 32px">
				<NuxtLink to="/server" class="text-decoration-none">
					<el-button type="primary" round href="#">查看更多服務項目<el-icon><ArrowRightBold /></el-icon></el-button>
				</NuxtLink>
			</div>
		</div>
    </section>
    <section>
      <el-row justify="space-between" :gutter="20" class="wrap">
          <el-col>
				<div class="title">
					常見問題
				</div>
				<div class="demo-collapse">
					<el-collapse v-model="activeName" accordion>
						<el-collapse-item :title="item.title" :name="item.name" v-for="item in questions">
							<div style="font-size: 16px;" v-html="item.content"></div>
						</el-collapse-item>
					</el-collapse>
				</div>
          </el-col>
      </el-row>
    </section>
    <section>
      <el-row justify="space-between" :gutter="20" :class="isMobileLayout ? '' : 'wrap'">
          <el-col>
				<div class="title">
					流程
				</div>
				<el-tabs v-model="activeTabName" class="demo-tabs" @tab-click="handleClick">
					<el-tab-pane label="集運流程" name="first">
						<div class="step-card fade-in" style="margin: 16px 0px" v-for="(item, index) in steps">
							<div class="step-num">
								{{ index + 1 }}.
							</div>
							<div class="step-content">
								<h2 style="margin: 0px">
									<strong>{{ item.title }}</strong>
								</h2>
							</div>
						</div>
					</el-tab-pane>
					<el-tab-pane label="進口流程" name="second">
						等待提供，或移除
					</el-tab-pane>
					<el-tab-pane label="出口流程" name="third">
						等待提供，或移除
					</el-tab-pane>
				</el-tabs>
          </el-col>
      </el-row>
    </section>
</template>

<style scoped>
.wrap {
  width: 1080px;
  margin: 0px auto imo !important;
}
section {
  padding: 36px 0px;
  display: flex;
  justify-content: center;
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
.step-card{
	position: relative;
	display: flex;
	border-radius: 8px;
	padding: 32px;
	background-size: cover; /* 确保图像覆盖整个容器 */
	background-position: center; /* 将背景图像置中 */
	border-radius: 16px;
	overflow: hidden;
	background-color: rgba(255, 255, 255, 0.8);
	box-shadow: inset 5px 5px 10px rgba(194, 194, 194, 0.2);
}
.step-card::before {
	content: ''; /* 伪元素内容为空 */
	position: absolute; /* 绝对定位 */
	top: 0;
	left: 0;
	width: 100%; /* 宽度100% */
	height: 100%; /* 高度100% */
	background-image: url('assets/images/home/step-img-02.jpg'); /* 背景图片 */
	background-size: cover; /* 图片铺满 */
	background-position: center; /* 图片居中 */
	opacity: 1; /* 透明度 */
	z-index: -1; /* 位于底部 */
	opacity: 0.1;
}

.step-card .step-num {
    margin-right: 28px;
    -webkit-text-stroke: 1px rgb(140, 140, 140);
    color: transparent;
    font-size: 64px;
    font-weight: 600;
    line-height: 0.8;
    font-style: italic;
    flex-shrink: 0;
    width: 35px;
    text-align: center;
}

.step-card .step-content {
    display: flex;
    flex-direction: column;
	align-items: center;
	justify-content: center;
}
.step-card .step-content p{
    margin: 0px;
}

.fade-in {
    opacity: 0;
    transition: 1.2s all ease-out;
    transform: scale(0.8);
    /* background-color: #2ecc71;
    height: 500px;
    margin-bottom: 50px;
    opacity: 0;
    transition: 0.3s all ease-out;
    transform: scale(0.8);
    box-sizing: border-box;
    padding: 20px;
    display: inline-block; */
  }
  .full-width{
    width: 100%;
  }

  .half-width {
    width: 47.5%;
  }

  .half-width:nth-of-type(2n + 1) {
    margin-right: 2.5%;
  }

  .half-width:nth-of-type(2n) {
    margin-left: 2.5%;
  }
</style>