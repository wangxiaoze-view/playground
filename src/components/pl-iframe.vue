<script lang="ts" setup>
import { useTemplate } from '@/hooks/useTemplate'
import { parseShareLink } from '@/utils/share'
import { onMounted, ref } from 'vue'

const { store, srcdoc, onRenderHtml, onGetCurrentTemplate, onGetTmpParams } = useTemplate()

const iframeRef = ref<HTMLIFrameElement | null>(null)
const onInit = async (isLoading = true) => {
  srcdoc.value = await onRenderHtml(
    store.htmlCode,
    store.cssCode,
    store.jsCode,
    onGetCurrentTemplate.value!,
    isLoading,
  )
}
onMounted(() => {
  const shareData = parseShareLink()
  store.onSetTemplateCode(shareData ? shareData : onGetTmpParams('no-cache'))
})

defineExpose({
  onInit,
})
</script>

<template>
  <iframe
    ref="iframeRef"
    src="about:blank"
    frameborder="0"
    loading="lazy"
    :srcdoc="srcdoc"
  ></iframe>
</template>

<style lang="scss" scoped>
//
</style>
