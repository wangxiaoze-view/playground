<script lang="ts" setup>
import { ref } from 'vue'
import { ElMessage, ElDropdown, ElDropdownMenu, ElDropdownItem } from 'element-plus'
import { downloadProject } from '@/utils/download'
import { useCodeStore } from '@/store/modules/code'
import { useTemplate } from '@/hooks/useTemplate'

const store = useCodeStore()
const { templates } = useTemplate()
const isDownloading = ref(false)

const handleDownload = async (mode: 'simple' | 'project') => {
  try {
    ElMessage.warning('下载功能正在开发中...')
    // isDownloading.value = true

    // const currentTemplate = templates.find((t) => t.key === store.currrentTemplateKey)
    // if (!currentTemplate) {
    //   ElMessage.warning('未找到当前模板信息')
    //   return
    // }

    // const success = await downloadProject({
    //   html: store.htmlCode,
    //   css: store.cssCode,
    //   js: store.jsCode,
    //   template: store.currrentTemplateKey,
    //   templateName: currentTemplate.label,
    //   mode,
    // })

    // if (success) {
    //   ElMessage.success('项目下载成功')
    // } else {
    //   // ElMessage.error('项目下载失败')
    // }
  } catch (error) {
    ElMessage.error('项目下载失败')
  } finally {
    isDownloading.value = false
  }
}
</script>

<template>
  <el-dropdown trigger="click" @command="handleDownload">
    <el-button type="primary" :loading="isDownloading">
      <i class="ri-download-cloud-line icon-middle"></i>下载
    </el-button>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="simple">
          <i class="ri-file-line icon-middle"></i> 简单文件
        </el-dropdown-item>
        <el-dropdown-item command="project">
          <i class="ri-folder-zip-line icon-middle"></i> 工程化项目
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style lang="scss" scoped>
.icon-middle {
  margin-right: 6px;
}
</style>
