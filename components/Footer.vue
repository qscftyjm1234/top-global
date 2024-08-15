<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-04-02 15:56:22
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-08-14 23:16:38
 * @FilePath: \top-glob\components\Footer.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

<script setup>
import { onMounted } from "vue";
import { isMobile } from '@/utils/tools.js' 
onMounted(() => {
	isMobileLayout.value = isMobile();
    setInterval(function() {
        bounceLogo(); // 调用让logo弹跳的函数
    }, 5000); // 5000毫秒 = 5秒，你可以根据需要调整间隔时间
});
const isMobileLayout = ref(false);

const bounceLogo = () => {
    var logo = document.querySelector('.logo');
    logo.style.animation = 'none'; // 先清除现有动画
    setTimeout(function() {
        logo.style.animation = 'bounce 3s infinite'; // 再重新应用动画
    }, 1000); // 等待10毫秒后重新应用动画，避免浏览器优化
}
</script>
<template>
    <div>
        <div 
            style="display: flex; justify-content: center; color: white; background: linear-gradient(to bottom, #333333 0%, #595959 100%); padding: 36px"
            :style="{ flexDirection: isMobileLayout ? 'column': 'row', padding: isMobileLayout ? '8px': '36px' }"
        >
            <div style="text-align: center; padding: 0px 32px">
                <el-avatar :size="64">
                    <img
                        src="@/assets/images/logo.jpg"
                    /> 
                </el-avatar>
                <h4 style="margin: 8px 0px">TGE 邏捷運通有限公司</h4>
                <p style="color: #dbdbdb; margin: 8px 0px; font-size: 14px">Top Global Express</p>
            </div>
            <div style="padding: 0px 16px; display: flex;">
                <div style="padding: 0px 16px">
                    <div style="color: #dbdbdb">
                        <el-icon style="margin-right: 4px"><PhoneFilled /></el-icon>
                        聯絡我們
                    </div>
                    <ul>
                        <li>
                            Tel: 03-3230090
                        </li>
                        <li>
                            Email: tyn@topglobal.com.tw
                        </li>
                        <li>
                            Add: 桃園市桃園區春日路1171號4樓
                        </li>
                        <li>
                            <div style="display: flex; align-items: center">
                                <div style="width: 32px; margin-right: 12px">
                                    <a href="https://lin.ee/lgoVP3a" target="_blank">
                                        <img style="width: 100%" src="@/assets/images/footer/line.jpg" />  
                                    </a>
                                </div>
                                <div style="width: 32px; margin-right: 12px">
                                    <a href="https://www.facebook.com/topglobal.ltd?locale=zh_TW">
                                        <img style="width: 100%" src="@/assets/images/footer/fb.png" />
                                    </a>
                                </div>
                                <div style="width: 32px; margin-right: 12px">
                                    <a href="https://www.instagram.com/tge_global_express/">
                                        <img style="width: 100%" src="@/assets/images/footer/ig.jpg" />
                                    </a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div style="padding: 0px 16px">
                    <div style="color: #dbdbdb">
                        <el-icon style="margin-right: 4px"><Headset /></el-icon>
                        客服時間
                    </div>
                    <ul>
                        <li>
                            週一至週五 9點～18點
                        </li>
                    </ul>
                </div>
                <div style="padding: 0px 16px" v-if="!isMobileLayout">
                    <div style="color: #dbdbdb">
                        <el-icon style="margin-right: 4px"><OfficeBuilding /></el-icon>
                        公司位置
                    </div>
                    <ul>
                        <li>
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.5712305863913!2d121.30653177592563!3d25.014681439068205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34681e4cd0b02939%3A0xf3e7402685e239e!2zMzMw5qGD5ZyS5biC5qGD5ZyS5Y2A5pil5pel6LevMTE3MeiZnzQ!5e0!3m2!1szh-TW!2stw!4v1712651770637!5m2!1szh-TW!2stw"
                                width="280" 
                                height="auto" 
                                style="border:0;" 
                                allowfullscreen="" 
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade">
                            </iframe>
                        </li>
                    </ul>
                </div>
            </div>
            <div style="text-align: center; margin-top: 8px;" v-if="isMobileLayout">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.5712305863913!2d121.30653177592563!3d25.014681439068205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34681e4cd0b02939%3A0xf3e7402685e239e!2zMzMw5qGD5ZyS5biC5qGD5ZyS5Y2A5pil5pel6LevMTE3MeiZnzQ!5e0!3m2!1szh-TW!2stw!4v1712651770637!5m2!1szh-TW!2stw"
                    width="100%" 
                    height="auto" 
                    style="border:0;" 
                    allowfullscreen="" 
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
        <div style="text-align: center; background-color: #333; color: #dbdbdb; padding: 12px 0px; font-size: 12px">
            Copyright 2024 © 邏捷運通有限公司 All Rights Reserved
        </div>
        <el-affix :offset="0" style="position: fixed; bottom: 20px; right: 20px;">
            <div style="width: 48px; margin-right: 12px" class="logo">
                <a href="https://lin.ee/lgoVP3a" target="_blank">
                    <img style="width: 100%" src="@/assets/images/footer/line.jpg" /> 
                </a>
            </div>
        </el-affix>
    </div>
</template>

<style scoped>
ul {
    margin: 0px;
    padding: 0px;
    list-style: none;
    font-size: 14px;
}
ul li {
    margin: 8px 0px;
}

.logo {
  /* transform: translateX(-50%); */
  animation: bounce 2s infinite; /* 动画持续时间为2秒，无限循环 */
}

@keyframes bounce {
    0%, 100% {
        transform: translateY(0); /* 初始位置 */
    }
    50% {
        ransform: translateY(-15px); /* 上弹效果 */
    }
}
</style>