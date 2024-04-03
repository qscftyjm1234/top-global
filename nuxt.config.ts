/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-04-02 13:07:08
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-04-03 18:02:43
 * @FilePath: \top-glob\nuxt.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// https://nuxt.com/docs/api/configuration/nuxt-config
const path = require('path');
import { resolve } from 'pathe';

// import AutoImport from 'unplugin-auto-import/vite';
// import Components from 'unplugin-vue-components/vite';
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
export default defineNuxtConfig({
  devtools: { enabled: true },
  // 輸出後更改資料夾
  modules: [
    '@element-plus/nuxt',
  ],
  css: ['element-plus/dist/index.css'], // import css

	alias: {
		'@': resolve(__dirname, './'),
	},
  router: {
    // base: '/top-global/',
    // base: '../',
  },

  // 更改輸出資料夾(因為要配合github page)
  nitro: {
    output: {
      publicDir: path.join(__dirname, 'docs')
    },
  },
  app: {
    // baseURL: '',
    head: {
      meta: [{ name: '邏捷運通', content: '邏捷運通' }],
    },
    // buildAssetsDir: 'static',
  }, 
  generate: {
    // 指定生成的文件目錄
    dir: 'docs',
  },

  // build: {
  //   // transplie: [/^element-plus/]
  //   publicPath: './_nuxt/',
  // },
	// alias: {
	// 	'@': resolve(__dirname, './'),
	// },
  // generate: {
  //   dir: './static'
  // },
  // experimental: {
  //   payloadExtraction: false   //启用此选项时（默认情况下）提取使用nuxt generate生成的页面的有效负载
  // },
});