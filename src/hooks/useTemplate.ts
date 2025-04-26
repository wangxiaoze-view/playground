import { onRenderHtml, type Template, templates } from '@/config/template'
import { computed, onMounted, ref } from 'vue'

export function useTemplate() {
  const iframeRef = ref<HTMLIFrameElement | null>(null)

  const currrentTemplateKey = ref('default')

  const htmlCode = ref('')
  const cssCode = ref('')
  const jsCode = ref('')

  const onGetRenderStr = () => {
    const current = onGetCurrentTemplate.value
    return onRenderHtml(htmlCode.value, cssCode.value, jsCode.value, current?.cdn.join('')!)
  }

  // 更新editor
  const onChangeEditor = (code: string, tabName: string) => {
    switch (tabName) {
      case 'html':
        htmlCode.value = code
        break
      case 'css':
        cssCode.value = code
        break
      case 'javascript':
        jsCode.value = code
        break
    }
  }

  // 切换模板
  const onGetCurrentTemplate = computed(() => {
    return templates.find((item) => item.key === currrentTemplateKey.value)
  })
  const onChangeTemplate = () => {
    onInitTemplate(onGetCurrentTemplate.value!)
  }
  const onInitTemplate = (template: Template) => {
    htmlCode.value = template.html
    cssCode.value = template.css
    jsCode.value = template.js
  }

  onMounted(() => {
    onInitTemplate(onGetCurrentTemplate.value!)
  })
  return {
    iframeRef,
    htmlCode,
    cssCode,
    jsCode,
    // onUpdatePreview,
    onChangeEditor,
    currrentTemplateKey,
    onInitTemplate,
    templates,
    onChangeTemplate,
    onGetRenderStr,
  }
}
