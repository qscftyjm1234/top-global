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
    <img
            src="@/assets/images/logo.jpg"
        /> 
    <img
            src="@/assets/images/logo.jpg"
        /> 
    <div class="block text-center" style="height: 480px">
        <el-carousel height="auto" autoplay>
            <el-carousel-item style="height: 480px">
                <h3 class="small justify-center" text="2xl">height 100px</h3>
            </el-carousel-item>
            <el-carousel-item style="height: 480px">
                <h3 class="small justify-center" text="2xl">height 200px</h3>
            </el-carousel-item>
            <el-carousel-item style="height: 480px">
                <h3 class="small justify-center" text="2xl">height 300px</h3>
            </el-carousel-item>
        </el-carousel>
    </div>
    <el-row class="row-bg" justify="space-between">
        <el-col :span="6">
            <el-card>
                <img style="width: 100%" src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png">
                <p>描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述</p>
            </el-card>
        </el-col>
        <el-col :span="6">
            <el-card>
                <img style="width: 100%" src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png">
                <p>描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述</p>
            </el-card>
        </el-col>
        <el-col :span="6">
            <el-card>
                <img style="width: 100%" src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png">
                <p>描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述</p>
            </el-card>
        </el-col>
    </el-row>

    <div class="demo-collapse">
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item title="Consistency" name="1">
        <div>
          Consistent with real life: in line with the process and logic of real
          life, and comply with languages and habits that the users are used to;
        </div>
        <div>
          Consistent within interface: all elements should be consistent, such
          as: design style, icons and texts, position of elements, etc.
        </div>
      </el-collapse-item>
      <el-collapse-item title="Feedback" name="2">
        <div>
          Operation feedback: enable the users to clearly perceive their
          operations by style updates and interactive effects;
        </div>
        <div>
          Visual feedback: reflect current state by updating or rearranging
          elements of the page.
        </div>
      </el-collapse-item>
      <el-collapse-item title="Efficiency" name="3">
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
      <el-collapse-item title="Controllability" name="4">
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
    <el-button @click="ElMessage('hello')">button</el-button>
  <ElButton :icon="ElIconEditPen" type="success">button</ElButton>
  <LazyElButton type="warning">lazy button</LazyElButton>
   <div>
    <el-badge :value="12" class="item">
        <el-button>comments</el-button>
    </el-badge>
    <el-badge :value="3" class="item">
        <el-button>replies</el-button>
    </el-badge>
    <el-badge :value="1" class="item" type="primary">
        <el-button>comments</el-button>
    </el-badge>
    <el-badge :value="2" class="item" type="warning">
        <el-button>replies</el-button>
    </el-badge>
    <el-badge :value="1" class="item" color="green">
        <el-button>custom background</el-button>
    </el-badge>

    <div class="block text-center">
    <span class="demonstration"
      >Switch when indicator is hovered (default)</span
    >
    <el-carousel height="150px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small justify-center" text="2xl">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
  <div class="block text-center" m="t-4">
    <span class="demonstration">Switch when indicator is clicked</span>
    <el-carousel trigger="click" height="150px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small justify-center" text="2xl">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
   </div>
</template>

<style scoped>
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