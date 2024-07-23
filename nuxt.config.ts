/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-04-02 13:07:08
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-07-23 11:55:38
 * @FilePath: \top-glob\nuxt.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const path = require('path');

export default defineNuxtConfig({
  head: {
    meta: [
      { 'http-equiv': 'Content-Security-Policy', content: 'upgrade-insecure-requests' },
    ],
  },
  app: {
    baseURL: '/top-global/', // 配置應用程序的基本 API 請求 URL
    base: '/top-global/',
    buildAssetsDir: '/static/',
  },
  router: {
    base: '/top-global/',
  },
  devtools: { enabled: true },
  modules: [
    '@element-plus/nuxt',
  ],
  "compilerOptions": {
    "types": [
      "@nuxt/types",
      "@nuxt/http"
    ]
  },
  css: ['element-plus/dist/index.css', '@/assets/styles/index.css'], // import css
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


  // serverMiddleware: {
  //   '/api': {
  //     target: 'http://jingya.api.8bami.com',
  //     pathRewrite: { '^/api': '' },
  //     changeOrigin: true,
  //   },
    
    axios: {
      // @nuxtjs/axios模块中已内置了proxy支持，此处开启即可。
      proxy: true
    },
    proxy: {
      '/api': {
        target: 'http://jingya.api.8bami.com',  // 后端 API 的 HTTPS 地址
        pathRewrite: {
          '^/api': '' // 删除url中的/api
       },
        changeOrigin: true
      }
    }
});