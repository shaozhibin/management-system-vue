<template>
  <div>
    <el-progress :text-inside="true" :stroke-width="18" :percentage="0"></el-progress>
    <div style="margin-top: 10px;"></div>
    <el-progress :text-inside="true" :stroke-width="18" :percentage="70"></el-progress>
    <div style="margin-top: 10px;"></div>
    <el-progress :text-inside="true" :stroke-width="18" :percentage="100" status="success"></el-progress>
    <div style="margin-top: 10px;"></div>
    <el-progress :text-inside="true" :stroke-width="18" :percentage="50" status="exception"></el-progress>
    <div style="margin-top: 10px;"></div>

    <el-progress type="circle" :percentage="0"></el-progress>
    <div style="margin-top: 10px;"></div>

    <el-progress type="circle" :percentage="25"></el-progress>
    <div style="margin-top: 10px;"></div>

    <el-progress type="circle" :percentage="100" status="success"></el-progress>
    <div style="margin-top: 10px;"></div>

    <el-progress type="circle" :percentage="50" status="exception"></el-progress>
  </div>
</template>
<style>


</style>
<script>
export default {
  data() {
    return {

    }
  }
}

</script>
