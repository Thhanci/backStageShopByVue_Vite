<script setup>
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>

  <!-- <HelloWorld /> -->

  <div>
    <button class="btn">按钮</button>
  </div>

  <br>
    <button class="inline bg-purple-500 text-indigo-50 px-4 py-2 rounded">按钮</button>
  <br>

  <span>
    <button class="bg-purple-500">按钮</button>
  </span>
  
<!-- 
  <div class="button-row">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </div> -->

</template>


<style>
.btn{
  @apply inline bg-purple-500 text-indigo-50 px-4 py-2 rounded-full
    transition-all duration-3000 hover:(bg-green-300) focus:(ring-8 ring-blue-300);
}
</style>