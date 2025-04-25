<script setup lang="ts">
import plHeader from './components/pl-header.vue'
import plContent from './components/pl-content.vue'
</script>

<template>
  <div class="root theme-bg">
    <el-config-provider>
      <plHeader />
      <plContent />
    </el-config-provider>
  </div>
</template>

<style scoped lang="scss"></style>
