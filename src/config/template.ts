import defaultTemplate from './templates/default'
import vue2Template from './templates/vue2'
import vue3Template from './templates/vue3'
import reactTemplate from './templates/react'
import type { Template, TemplateItem } from './types'
import { useCodeStore } from '@/store/modules/code'
import { storeToRefs } from 'pinia'
import pinia from '@/store'

const store = useCodeStore(pinia)
const { getCdnType, getCurrrentTemplateKey, getCdnList } = storeToRefs(store)

export const templates: Template[] = [
  { value: 'default', label: '默认模板', icon: 'ri-list-indefinite', children: defaultTemplate },
  { value: 'Vue2', label: 'Vue2', icon: 'ri-vuejs-line', children: vue2Template },
  { value: 'Vue3', label: 'Vue3', icon: 'ri-vuejs-fill', children: vue3Template },
  { value: 'React', label: 'React', icon: 'ri-reactjs-line', children: reactTemplate },
]
export const onRenderHtml = (
  htmlCode: string,
  cssCode: string,
  jsCode: string,
  template: TemplateItem,
) => {
  const cdnType = (name: string) => (['bootcdn', 'cdnjs'].includes(name) ? 'cdnjs' : name)
  const cdnList = template.cdn[cdnType(getCdnType.value) as keyof TemplateItem['cdn']]
  const typeConfig = {
    React: `type="text/babel"`,
  }
  const typeModel = typeConfig[getCurrrentTemplateKey.value[0] as keyof typeof typeConfig] || ''
  const isExist = (name: string) => getCdnList.value.find((item) => item.name === cdnType(name))
  const cdnBase = isExist(getCdnType.value)?.url || isExist('jsdelivr')?.url
  const cdns = cdnList
    .map((item) => {
      let url = item.url.startsWith('https://') ? item.url : `${cdnBase}${item.url}`
      if (item.type === 'script') {
        return `<script src="${url}" ></script>`
      } else if (item.type === 'style') {
        return `<link rel="stylesheet" href="${url}" >`
      }
    })
    .filter(Boolean)
    .join(`\n`)
  return `
  <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>${cssCode}</style>
        ${cdns}
      </head>
      <body>
        ${htmlCode}
        <script ${typeModel}>${jsCode}</script>
      </body>
    </html>`
}
