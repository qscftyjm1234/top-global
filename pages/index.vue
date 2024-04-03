<template>
    <!-- 沒有在layout放Nuxt page就直接走這 -->
    <div>

        <el-card style="max-width: 480px">
            <p v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</p>
        </el-card>
        <el-card style="max-width: 480px">
            <template #header>Yummy hamburger</template>
            <img
                src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                style="width: 100%"
            />
        </el-card>
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
      <el-badge :value="3" class="item">
        <el-button>replies</el-button>
      </el-badge>
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          Click Me
          <el-icon class="el-icon--right"><caret-bottom /></el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item class="clearfix">
              comments
              <el-badge class="mark" :value="12" />
            </el-dropdown-item>
            <el-dropdown-item class="clearfix">
              replies
              <el-badge class="mark" :value="3" />
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>

      <div style="max-width: 600px">
        <el-alert title="Success alert" type="success" />
        <el-alert title="Info alert" type="info" />
        <el-alert title="Warning alert" type="warning" />
        <el-alert title="Error alert" type="error" />
    </div>
    </div>
</template>

<style scoped>
.demonstration {
  color: var(--el-text-color-secondary);
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
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