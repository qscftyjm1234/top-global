/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-04-02 13:07:08
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-07-15 16:54:01
 * @FilePath: \top-glob\nuxt.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const path = require('path');

export default defineNuxtConfig({
  server: {
    // 代理設置
    proxy: {
      '/api/': {
        target: 'http://jingya.api.8bami.com',
        pathRewrite: { '^/api/': '/v1/user/member/waybill/' },
        changeOrigin: true,
        secure: false
      }
    }
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
  head: {
    meta: [
      {
        httpEquiv: 'Content-Security-Policy',
        content: 'upgrade-insecure-requests'
      }
      // 其它 meta 标签
    ]
  }
});