import { onRenderHtml, templates } from '@/config/template'
import { useCodeStore } from '@/store/modules/code'
import { parseShareLink, type ShareTemplateData } from '@/utils/share'
import { computed, onMounted, ref } from 'vue'

export function useTemplate() {
  const iframeRef = ref<HTMLIFrameElement | null>(null)

  const store = useCodeStore()
  const onGetRenderStr = () => {
    return onRenderHtml(store.htmlCode, store.cssCode, store.jsCode, onGetCurrentTemplate.value!)
  }

  // 切换模板
  const onGetCurrentTemplate = computed(() => {
    return templates.find((item) => item.key === store.currrentTemplateKey)
  })

  const onGetTmpParams = (): ShareTemplateData => {
    return {
      html: onGetCurrentTemplate.value!.html,
      css: onGetCurrentTemplate.value!.css,
      js: onGetCurrentTemplate.value!.js,
      template: store.currrentTemplateKey,
    }
  }
  const onChangeTemplate = () => {
    store.onSetTemplateCode(onGetTmpParams())
  }

  onMounted(() => {
    const shareData = parseShareLink()
    store.onSetTemplateCode(shareData ? shareData : onGetTmpParams())
  })
  return {
    store,
    iframeRef,
    templates,
    onChangeTemplate,
    onGetRenderStr,
  }
}
