<script lang="ts" setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { generateShareLink, copyToClipboard } from '@/utils/share'
import { useCodeStore } from '@/store/modules/code'
const isGenerating = ref(false)
const store = useCodeStore()
const handleShare = async () => {
  try {
    umami.track('event_playground_share', {
      href: window.location.href,
      name: store.currrentTemplateKey.join('-'),
    })

    isGenerating.value = true
    const shareLink = generateShareLink({
      html: store.htmlCode,
      css: store.cssCode,
      js: store.jsCode,
      template: store.currrentTemplateKey,
    })

    const success = await copyToClipboard(shareLink)
    if (success) {
      ElMessage.success('分享链接已复制到剪贴板')
    } else {
      ElMessage.error('复制失败')
    }
  } catch (error) {
    ElMessage.error('生成分享链接失败')
  } finally {
    isGenerating.value = false
  }
}
</script>

<template>
  <el-tooltip class="box-item" effect="light" content="分享" placement="bottom">
    <el-button type="primary" @click="handleShare"
      ><i class="ri-share-line icon-middle"></i>分享</el-button
    >
  </el-tooltip>
</template>

<style lang="scss" scoped>
.pl-share {
  padding: 16px;
  display: flex;
  justify-content: flex-end;
}

.icon-middle {
  margin-right: 6px;
}
</style>
