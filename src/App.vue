<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
import MHeader from './components/m-header/m-header'
import Tab from './components/tab/tab'
export default {
  name: 'App',
  components: {
    MHeader,
    Tab
  }
}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
}
</style>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "./common/stylus/variable"
  #app
    color: $color-theme
</style>
