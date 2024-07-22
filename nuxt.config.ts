/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-04-02 13:07:08
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-07-22 15:17:12
 * @FilePath: \top-glob\nuxt.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const path = require('path');

export default defineNuxtConfig({
  head: {
    meta: [
      { 
        charset: 'utf-8' 
      },
      { 
        name: 'viewport', 
        content: 'width=device-width, initial-scale=1' 
      },
      {
        'http-equiv': 'Content-Security-Policy',
        content: 'upgrade-insecure-requests'
      }
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


  axios: {
    proxy: true, // 啟用代理
    // prefix: '/api', // API 路徑的前綴
  },
  serverMiddleware: {
    '/api': {
      target: 'http://jingya.api.8bami.com',
      pathRewrite: { '^/api': '' }, // 可选：路径重写，如果 API 地址不包含 /api 前缀
      changeOrigin: true, // 设置跨域请求头，允许跨域
      secure: false, // 在开发环境中，通常不需要使用 HTTPS，可以关闭安全检查
    },
  },
});