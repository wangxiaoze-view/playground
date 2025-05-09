<script lang="ts" setup>
import { ElMessage } from 'element-plus'
import { downloadProject } from '@/utils/download'
import { useCodeStore } from '@/store/modules/code'
import { useTemplate } from '@/hooks/useTemplate'
import { useLoading } from 'functional-helpers/hooks'

const store = useCodeStore()
const { templates } = useTemplate()
const { loading, setLoading } = useLoading()

const handleDownload = async () => {
  try {
    window.umami?.track('event_playground_download', {
      href: window.location.href,
      name: store.currrentTemplateKey.join('-'),
      cdn: store.cdnType,
    })
    setLoading(true)
    const parent = templates.find((t) => t.value === store.currrentTemplateKey[0])
    const child = parent?.children?.find((t) => t.value === store.currrentTemplateKey[1])
    if (!child) return ElMessage.warning('未找到当前模板信息')
    const success = await downloadProject({
      html: store.htmlCode,
      css: store.cssCode,
      js: store.jsCode,
      template: child,
      templateName: store.currrentTemplateKey.join('-'),
    })
    if (!success) return ElMessage.error('项目下载失败')
    ElMessage.success('项目下载成功')
  } catch (error) {
    ElMessage.error('项目下载失败')
  } finally {
    setLoading(false)
  }
}
</script>

<template>
  <el-button type="primary" :loading="loading" @click="handleDownload">
    <i class="ri-download-cloud-line icon-middle"></i>下载
  </el-button>
</template>

<style lang="scss" scoped>
.icon-middle {
  margin-right: 6px;
}
</style>
