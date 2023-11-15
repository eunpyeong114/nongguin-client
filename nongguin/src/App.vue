<template>
  <div id="top">
    <div id="main">
      <HeaderNav></HeaderNav>
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
  import HeaderNav from './components/common/HeaderNav.vue';
</script>

<style  scoped>
  #main{
    width: 60%;
  }
  #top{
    display: flex;
    justify-content: center;
  }
</style>