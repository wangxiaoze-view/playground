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
    umami.track('event_playground_template', {
      href: window.location.href,
      name: store.currrentTemplateKey.join('-'),
      cdn: store.cdnType,
    })

    nextTick(() => {
      setTimeout(() => {
        getIframeRef.value?.onInit(true)
      }, 100)
    })
  }

  const onGetScriptType = () => {
    const typeConfig = {
      React: `type="text/babel"`,
    }
    return typeConfig[getCurrrentTemplateKey.value[0] as keyof typeof typeConfig] || ''
  }

  const onRenderHtml = async (
    htmlCode: string,
    cssCode: string,
    jsCode: string,
    template: TemplateItem,
    isLoading = true,
  ) => {
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
    <script ${onGetScriptType()}>${jsCode}</script>
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
    onGetScriptType,
  }
}
