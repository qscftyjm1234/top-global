<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-04-02 14:30:49
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-04-02 14:30:56
 * @FilePath: \top-glob\pages\Product.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <section>
        <div class="wrap">
            <div class="title">關於我們</div>
            <el-row justify="space-between" :gutter="20" style="align-items: center">
                <el-col :span="11">
                    <div style="display: flex; align-items: center">
                        <div
                            style="
                                width: 120px;
                                height: 120px;
                                margin-right: 20px;
                            "
                        >
                            <img
                                src="@/assets/images/logo.jpg"
                                style="width: 100%"
                            />
                        </div>
                        <div>
                            <h3 style="margin: 4px 0px">邏捷運通有限公司</h3>
                            <el-text class="mx-1" type="info"
                                >Top GlobaL Express</el-text
                            >
                        </div>
                    </div>
                    <p style="line-height: 1.5rem; margin-top: 24px">
                        <b>邏捷通運(TGE)</b>是一間台灣在地公司，成立於西元
                        2023年，從事越南、印尼與日本的物流]輸企業，提
                        供客戶最專業可靠的服務。 們的員工在業界歷都
                        已超過10年，擁k專業背景才能在物流界快速崛起。
                        除了秉持傳統物流的….更加融入了…是間創新的物流
                        公司。 們擁k…優勢，為每一個客戶量身打造，在
                        TGE，您就是 們的VIP。
                    </p>
                </el-col>
                <el-col :span="13">
                    <el-row justify="center" :gutter="40">
                        <el-col :span="8">
                            <div class="circle">
                                安全
                            </div>
                        </el-col>
                        <el-col :span="8">
                            <div class="circle">
                                信賴
                            </div>
                        </el-col>
                        <el-col :span="8">
                            <div class="circle">
                                快速
                            </div>
                        </el-col>
                        <el-col :span="8">
                            <div class="circle">
                                專業
                            </div>
                        </el-col>
                        <el-col :span="8">
                            <div class="circle">
                                親民
                            </div>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
            <div style="display: flex; width: 100%; margin: 36px 0px">
                <div style="width: 360px">
                    <img style="width: 100%" src="@/assets/images/home/card-img-01.jpg">
                </div>
                <div style="text-align: center; background-color: ghostwhite; width: 100%; display: flex; align-items: center; justify-content: center; flex-direction: column; padding: 20px 36px">
                    <h1 style="margin-bottom: 0px; color: firebrick; font-size: 32px">"展現 職人精神"</h1>
                    <p>「在每個細節中流露著匠心，我們以職人的精神，專注於每一個步驟，為您提供卓越的品質和服務。」</p>
                </div>
            </div>
            <div style="display: flex; width: 100%; margin: 36px 0px">
                <div style="text-align: center; background-color: ghostwhite; width: 100%; display: flex; align-items: center; justify-content: center; flex-direction: column; padding: 20px 36px">
                    <h1 style="margin-bottom: 0px; color: firebrick; font-size: 32px">"貫徹 親民服務"</h1>
                    <p>「我們始終貫徹親民服務的理念，以親切專業的態度，為每位客戶提供貼心周到的服務，讓您感受到我們的用心與關懷。」</p>
                </div>
                <div style="width: 360px">
                    <img style="width: 100%" src="@/assets/images/home/card-img-01.jpg">
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
                內文內文內文內文內文內文內文內文內文內文內文內文內文內文內
                文內文內文內文內文內文內文內文內文內文
            </p>
        </div>
    </div>
    <div style="display: flex; justify-content: center; align-items: center; flex-direction: column; width: 100%; padding: 108px 0px">
        <h2 style="margin-bottom: 32px">邏捷通運為您  達到審時 CP值高的服務</h2>
        <div style="background-color: rgb(32, 151, 219); width: 240px; height: 6px;"></div>
    </div>
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
    color: rgb(32, 151, 219);
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
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2); 
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 28px;
    font-weight: bold;
    aspect-ratio: 1/1;
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
</style>