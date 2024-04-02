/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-04-02 13:07:08
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-04-02 17:41:54
 * @FilePath: \top-glob\nuxt.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// https://nuxt.com/docs/api/configuration/nuxt-config
const path = require('path');
import { resolve } from 'pathe'
export default defineNuxtConfig({
  devtools: { enabled: true },
  // 輸出後更改資料夾
  nitro: {
    output: {
      publicDir: path.join(__dirname, 'docs')
    },
  },
  app: {
    baseURL: '/top-global/',
    head: {
      meta: [{ name: '邏捷運通', content: '邏捷運通' }],
    },
  },
  modules: [
    '@element-plus/nuxt'
  ],
  // elementPlus: { /** Options */ }
  css: ['element-plus/dist/index.css', 'assets/styles/index.scss'],
	alias: {
		'@': resolve(__dirname, './'),
	},
});