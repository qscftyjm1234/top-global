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

            <el-row justify="space-between" :gutter="20">
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
    display: flex;
    justify-content: center;
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
</style>