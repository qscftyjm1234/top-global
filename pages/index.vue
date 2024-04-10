<script setup>
import { ref, onMounted } from 'vue';
const activeName = ref('1');


const fadeInElements = ref([]);
onMounted(() => {
    fadeInElements.value = Array.from(document.getElementsByClassName('fade-in'))
    document.addEventListener('scroll', handleScroll)
    handleScroll()
    fetch("https://api.unsplash.com/photos/?client_id=XeMLEo-cG4umamAaRPxahF5CC7nhdSYGtbKlmU1O7Sk")
    .then(async(res) => {
        const data = res.json();
        console.log(await data)
        return data;
    })
    .then((data) => {
        console.log(data);
    });    
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
}
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
    <section>
        <el-row justify="space-between" :gutter="20" class="wrap">
            <el-col :span="8">
                <el-card shadow="hover" style="border: 0px">
                    <img style="width: 100%" src="@/assets/images/home/card-img-01.jpg">
                    <h3 style="margin: 8px 0px">台灣到越南快遞超級優惠價</h3>
                    <el-text class="mx-1" type="info">生活用品只要230元，請假業務詢問，了解相關資訊。</el-text>
                </el-card>
            </el-col>
            <el-col :span="8">
                <el-card shadow="hover" style="border: 0px">
                    <img style="width: 100%" src="@/assets/images/home/card-img-02.jpg">
                    <h3 style="margin: 8px 0px">溝通超便利</h3>
                    <el-text class="mx-1" type="info">專業的外語業務，將為您方便解決問題。</el-text>
                </el-card>
            </el-col>
            <el-col :span="8">
                <el-card shadow="hover" style="border: 0px">
                    <img style="width: 100%" src="@/assets/images/home/card-img-03.jpg">
                    <h3 style="margin: 8px 0px">紀念 “婦女節”強檔活動</h3>
                    <el-text class="mx-1" type="info">感謝您為我們今天的成就做出的貢獻，推出超值優惠。</el-text>
                </el-card>
            </el-col>
        </el-row>
    </section>
    <section style="background-color: #f7f7f7">
      <el-row justify="space-between" :gutter="20" class="wrap">
          <el-col>
              <div class="title">
                  服務項目
              </div>
              <el-row :gutter="20">
                <el-col :span="12" style="margin-bottom: 20px">
                  <el-card style="border: 0px" :body-style="{ width: '100%', display: 'flex', padding: '0px' }">
                    <div style="min-width: 180px; width: 180px">
                        <img src="@/assets/images/home/card-img-04.jpg" style="width: 100%; height: 100%; object-fit: cover;" alt="...">
                    </div>
                    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 24px; width: 100%">
                        <h3 style="margin: 0px;">集運</h3>
                        <p>
                            將多個貨物集中在一起，以提高運輸效率和降低成本的運送
                        </p>
                    </div>
                  </el-card>
                </el-col>
                <el-col :span="12">
                  <el-card style="border: 0px" :body-style="{ width: '100%', display: 'flex', padding: '0px' }">
                    <div style="min-width: 180px; width: 180px">
                        <img src="@/assets/images/home/card-img-05.jpg" style="width: 100%; height: 100%; object-fit: cover;" alt="...">
                    </div>
                    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 24px; width: 100%">
                        <h3 style="margin: 0px;">專線快遞</h3>
                        <p>
                            專業、快速、安全的速遞服務
                        </p>
                    </div>
                  </el-card>
                </el-col>
                <el-col :span="12">
                  <el-card style="border: 0px" :body-style="{ width: '100%', display: 'flex', padding: '0px' }">
                    <div style="min-width: 180px; width: 180px">
                        <img src="@/assets/images/home/card-img-06.jpg" style="width: 100%; height: 100%; object-fit: cover;" alt="...">
                    </div>
                    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 24px; width: 100%">
                        <h3 style="margin: 0px;">海運空運</h3>
                        <p>
                            海運適合大批量貨物，穩定可靠；而空運則迅速高效，適合緊急時限的運送
                        </p>
                    </div>
                  </el-card>
                </el-col>
                <el-col :span="12">
                  <el-card style="border: 0px" :body-style="{ width: '100%', display: 'flex', padding: '0px' }">
                    <div style="min-width: 180px; width: 180px">
                        <img src="@/assets/images/home/card-img-07.png" style="width: 100%; height: 100%; object-fit: cover;" alt="...">
                    </div>
                    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 24px; width: 100%">
                        <h3 style="margin: 0px;">倉儲服務</h3>
                        <p>
                            安全、可靠、高效的貨物存儲與管理
                        </p>
                    </div>
                  </el-card>
                </el-col>
              </el-row>
          </el-col>
      </el-row>
    </section>
    <section>
      <el-row justify="space-between" :gutter="20" class="wrap">
          <el-col>
				<div class="title">
					常見問題
				</div>
				<div class="demo-collapse">
					<el-collapse v-model="activeName" accordion>
					<el-collapse-item title="公司收費為啥?" name="1">
						<div>
                            Consistent with real life: in line with the process and logic of real
                            life, and comply with languages and habits that the users are used to;
						</div>
						<div>
						Consistent within interface: all elements should be consistent, such
						as: design style, icons and texts, position of elements, etc.
						</div>
					</el-collapse-item>
					<el-collapse-item title="公司某某資訊為何?" name="2">
						<div>
						Operation feedback: enable the users to clearly perceive their
						operations by style updates and interactive effects;
						</div>
						<div>
						Visual feedback: reflect current state by updating or rearranging
						elements of the page.
						</div>
					</el-collapse-item>
					<el-collapse-item title="如何查詢貨物狀況?" name="3">
						<div>
						Simplify the process: keep operating process simple and intuitive;
						</div>
						<div>
						Definite and clear: enunciate your intentions clearly so that the
						users can quickly understand and make decisions;
						</div>
						<div>
						Easy to identify: the interface should be straightforward, which helps
						the users to identify and frees them from memorizing and recalling.
						</div>
					</el-collapse-item>
					<el-collapse-item title="服務國家?" name="4">
						<div>
						Decision making: giving advices about operations is acceptable, but do
						not make decisions for the users;
						</div>
						<div>
						Controlled consequences: users should be granted the freedom to
						operate, including canceling, aborting or terminating current
						operation.
						</div>
					</el-collapse-item>
					</el-collapse>
				</div>
          </el-col>
      </el-row>
    </section>
    <section>
      <el-row justify="space-between" :gutter="20" class="wrap">
          <el-col>
				<div class="title">
					流程
				</div>
				<el-tabs v-model="activeTabName" class="demo-tabs" @tab-click="handleClick">
					<el-tab-pane label="集運流程" name="first">
						<div class="step-card">
							<div class="step-num">
								1
							</div>
							<div class="step-content">
								<h2 style="margin-top: 0px">
									<strong>海外各地下單</strong>
								</h2>
								<p>
									內文內文內文內文內文內文內文內文內文內文內文內文內文內文內
									文內文內文內文內文內文內文內文內文內文
								</p>
							</div>
						</div>
					</el-tab-pane>
					<el-tab-pane label="進偶流程" name="second">
						
					</el-tab-pane>
					<el-tab-pane label="出口流程" name="third">
						
					</el-tab-pane>
				</el-tabs>
          </el-col>
      </el-row>
    </section>

    <div class='fade-in full-width'>13</div>
    <div class='fade-in full-width'>13</div>
    <div class='half-width fade-in'>13</div>
    <div class='half-width fade-in'>13</div>
</template>

<style scoped>
.wrap {
  width: 1080px;
  margin: 0px auto;
}
section {
  padding: 36px 0px; 
  display: flex; 
  justify-content: center
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
	padding: 64px 32px;
	background-size: cover; /* 确保图像覆盖整个容器 */
	background-position: center; /* 将背景图像置中 */
	border-radius: 16px;
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
}
.step-card .step-content p{
    margin: 0px;
}









.fade-in {
    background-color: #2ecc71;
    height: 500px;
    margin-bottom: 50px;
    opacity: 0;
    transition: 0.3s all ease-out;
    transform: scale(0.8);
    box-sizing: border-box;
    padding: 20px;
    display: inline-block;
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