import { templates } from '@/config/template'
import type { TemplateItem } from '@/config/types'
import { useCodeStore } from '@/store/modules/code'
import { onInitTemplateCache } from '@/utils/resourceCache'
import { type ShareTemplateData } from '@/utils/share'
import { storeToRefs } from 'pinia'
import { computed, ref, nextTick } from 'vue'
import plIframe from '@/components/pl-iframe.vue'

export function useTemplate() {
  const srcdoc = ref('')

  const store = useCodeStore()
  const { getCurrrentTemplateKey, getIframeRef } = storeToRefs(store)

  const onGetRenderStr = () => {
    return onRenderHtml(store.htmlCode, store.cssCode, store.jsCode, onGetCurrentTemplate.value!)
  }

  // 切换模板
  const onGetCurrentTemplate = computed(() => {
    const parent = templates.find((item) => item.value === store.currrentTemplateKey[0])
    const child = parent?.children?.find((item) => item.value === store.currrentTemplateKey[1])
    return child
  })

  const onGetTmpParams = (type: 'cache' | 'no-cache'): ShareTemplateData => {
    return {
      html: type === 'cache' ? store.htmlCode : onGetCurrentTemplate.value!.html,
      css: type === 'cache' ? store.cssCode : onGetCurrentTemplate.value!.css,
      js: type === 'cache' ? store.jsCode : onGetCurrentTemplate.value!.js,
      template: store.currrentTemplateKey,
    }
  }
  const onChangeTemplate = (type: 'cache' | 'no-cache') => {
    store.onSetTemplateCode(onGetTmpParams(type))
    nextTick(() => {
      getIframeRef.value?.onInit(true)
    })
  }

  const onRenderHtml = async (
    htmlCode: string,
    cssCode: string,
    jsCode: string,
    template: TemplateItem,
    isLoading = true,
  ) => {
    const typeConfig = {
      React: `type="text/babel"`,
    }
    const typeModel = typeConfig[getCurrrentTemplateKey.value[0] as keyof typeof typeConfig] || ''
    const { css, js } = await onInitTemplateCache(template, isLoading)
    return `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>${cssCode}</style>
    ${css.map((i) => i).join('')}
    ${js.map((i) => i).join('')}
  </head>
  <body>
    ${htmlCode}
    <script ${typeModel}>${jsCode}</script>
  </body>
</html>`
  }

  const onRefreshRender = (code: string, tabName: string) => {
    store.onChangeEditor(code, tabName)
    nextTick(() => {
      getIframeRef.value?.onInit(false)
    })
  }

  return {
    store,
    srcdoc,
    templates,
    onChangeTemplate,
    onGetRenderStr,
    onGetCurrentTemplate,
    onRenderHtml,
    onRefreshRender,
    plIframe,
    onGetTmpParams,
  }
}
