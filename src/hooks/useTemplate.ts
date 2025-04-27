import { onRenderHtml, templates } from '@/config/template'
import { useCodeStore } from '@/store/modules/code'
import { parseShareLink, type ShareTemplateData } from '@/utils/share'
import { computed, onMounted, ref, watch, nextTick } from 'vue'

export function useTemplate() {
  const iframeRef = ref<HTMLIFrameElement | null>(null)

  const store = useCodeStore()

  const onGetRenderStr = () => {
    return onRenderHtml(store.htmlCode, store.cssCode, store.jsCode, onGetCurrentTemplate.value!)
  }

  // 切换模板
  const onGetCurrentTemplate = computed(() => {
    const parent = templates.find((item) => item.value === store.currrentTemplateKey[0])
    const child = parent?.children?.find((item) => item.value === store.currrentTemplateKey[1])
    return child
  })

  const onGetTmpParams = computed((): ShareTemplateData => {
    return {
      html: onGetCurrentTemplate.value!.html,
      css: onGetCurrentTemplate.value!.css,
      js: onGetCurrentTemplate.value!.js,
      template: store.currrentTemplateKey,
    }
  })
  const onChangeTemplate = () => {
    store.setLoading(true)
    store.onSetTemplateCode(onGetTmpParams.value)
  }

  const onIframeLoad = () => {
    setTimeout(() => {
      store.setLoading(false)
    }, 500)
  }

  onMounted(() => {
    const shareData = parseShareLink()
    store.onSetTemplateCode(shareData ? shareData : onGetTmpParams.value)
    iframeRef.value?.addEventListener('load', onIframeLoad)
  })
  return {
    store,
    iframeRef,
    templates,
    onChangeTemplate,
    onGetRenderStr,
    onIframeLoad,
  }
}
