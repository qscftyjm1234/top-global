<template>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
    >
      <el-menu-item index="0">
        <el-avatar :size="48">
            <img
                src="@/assets/images/logo.jpg"
            /> 
        </el-avatar>
        <!-- <img
          style="width: 100px"
          src="@/assets/images/logo.jpg"
          alt="Element logo"
        /> -->
      </el-menu-item>
      <div class="flex-grow" />
      <el-menu-item index="1" class="el-mr-1">關於我們</el-menu-item>
      <el-menu-item index="2">服務介紹及費用</el-menu-item>
      <el-menu-item index="3">禁運用品及限制</el-menu-item>
      <el-menu-item index="4">最新公告</el-menu-item>
      <el-menu-item index="5">單號查詢</el-menu-item>
    </el-menu>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  
  const activeIndex = ref('1')
  const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
  </script>
  
  <style>
  .flex-grow {
    flex-grow: 1;
  }
  </style>


<!--  
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid" style="width: 1440px">
        
        <nuxt-link to="/">LOGO</nuxt-link>
            LOGO
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="d-flex">
                <div class="title">TGE 邏捷運通有限公司</div>
                <span>（Top Global Express）</span>
            </div>
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0" id="navbar-nav">
                <li class="nav-item">
                    <nuxt-link to="/about">關於我們</nuxt-link>
                </li>
                <li class="nav-item">
                    <nuxt-link to="/server">服務介紹及費用</nuxt-link>
                </li>
                <li class="nav-item">
                    <nuxt-link to="/forbid">禁運用品及限制</nuxt-link>
                </li>
                <li class="nav-item">
                    <nuxt-link to="/news">最新公告</nuxt-link>
                </li>
                <li class="nav-item">
                    <nuxt-link to="/orderNum">單號查詢</nuxt-link>
                </li>
            </ul>
        </div>
    </div>
</nav>-->