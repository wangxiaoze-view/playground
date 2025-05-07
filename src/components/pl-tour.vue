<script lang="ts" setup>
import { useAppStore } from '@/store/modules/app'
import { onMounted, ref } from 'vue'

const store = useAppStore()

const tabTarget = ref()
const editorTarget = ref()
const iframeTarget = ref()
const templateTarget = ref()
const toolTarget = ref()
onMounted(() => {
  tabTarget.value = document.querySelector('.pl-content-left--header .tab')
  editorTarget.value = document.querySelector('.pl-content-left--editor')
  iframeTarget.value = document.querySelector('.pl-content-right--editor')
  templateTarget.value = document.querySelector('.pl-content-left--header .tool-template')
  toolTarget.value = document.querySelector('.pl-header-tool')
})
</script>

<template>
  <el-tour v-model="store.isTour" @finish="store.onSetTour(false)" @close="store.onSetTour(false)">
    <el-tour-step
      :target="tabTarget"
      title="代码模块"
      description="在这里您可以任意切换需要的代码模块"
    />
    <el-tour-step
      placement="right"
      :target="editorTarget"
      title="代码编写"
      description="在这里您可以任意编写您的代码"
    />
    <el-tour-step
      placement="left"
      :target="iframeTarget"
      title="效果预览"
      description="当您编写完成之后，可以在这里预览您的效果"
    />
    <el-tour-step
      :target="templateTarget"
      title="切换模板"
      description="当然您可以任意切换不同的模板，在这里您可以查看不同的模板效果"
    />
    <el-tour-step :target="toolTarget" title="其它操作">
      <template #default>
        在这里您可以使用不同的操作，比如下载代码、分享代码等，如果您对使用方法不太了解，可以在这里查看使用教程，或者查看更新日志。如页面加载缓存您可以切换CDN进行配置！
        <br />
        <br />
        如果您觉得本项目对您有帮助，欢迎给我们点个赞哦~
      </template>
    </el-tour-step>
  </el-tour>
</template>

<style lang="scss" scoped>
//
</style>
