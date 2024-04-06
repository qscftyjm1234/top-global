<script setup>
import { ref, onMounted } from 'vue';
const activeName = ref('1');

onMounted(() => {
    console.log('133131')
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
</script>
<template>
    <div class="block text-center">
        <el-carousel autoplay>
            <el-carousel-item>
                <img style="width: 100%; height: 100%;" src="@/assets/images/home/banner-1.jpg">
            </el-carousel-item>
            <el-carousel-item>
                <img style="width: 100%; height: 100%;" src="@/assets/images/home/banner-1.jpg">
            </el-carousel-item>
            <el-carousel-item>
                <img style="width: 100%; height: 100%;" src="@/assets/images/home/banner-1.jpg">
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
</style>