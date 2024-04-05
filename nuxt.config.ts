const path = require('path');

export default defineNuxtConfig({
  app: {
    baseURL: '/top-global/', // 配置應用程序的基本 API 請求 URL
    base: '/top-global/',
    buildAssetsDir: '/static/',
  },
  devtools: { enabled: true },
  modules: [
    '@element-plus/nuxt',
  ],
  css: ['element-plus/dist/index.css'], // import css
  build: {
    publicDir: 'static', // 靜態資源的輸出目錄
  },
  nitro: {
    output: {
      publicDir: path.join(__dirname, 'docs') // 輸出文件夾設置為 docs
    },
  },
  generate: {
    publicPath: '/' // 生成的檔案的公共路徑
  },
});