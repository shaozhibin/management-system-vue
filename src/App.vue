<template>
  <div id="app">
    <v-header></v-header>
    <v-sidebar></v-sidebar>
    <div class="content">
          <transition name="move" mode="out-in"><router-view></router-view></transition>
    </div>
  </div>
</template>

<script>
import vHeader from './components/iframe/Header'
import vSidebar from './components/iframe/Sidebar'
export default {
  name: 'App',
  components: {
    vHeader,vSidebar
  }
}
</script>

<style>
.content{
    background: none repeat scroll 0 0 #fff;
    position: absolute;
    left: 200px;
    right: 0;
    top: 70px;
    bottom:0;
    width: auto;
    padding:20px;
    box-sizing: border-box;
    overflow-y: scroll;
}
.el-breadcrumb {
  margin-bottom: 20px;
}
.el-breadcrumb__inner {
  font-weight: 500;
  color: #303133;
}
</style>
