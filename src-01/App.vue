<template>
  <div >
    <h2>我的第一个vue组件化项目</h2>
    <img src="./assets/logo.png" alt="logo" class="logo">
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
  .logo {
    height:100px;
    width:100px
  }
</style>
