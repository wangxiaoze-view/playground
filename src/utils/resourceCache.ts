import type { CdnType, TemplateItem } from '@/config/types'
import pinia from '@/store'
import { useCodeStore } from '@/store/modules/code'
import { storeToRefs } from 'pinia'

interface CachedResource {
  content: string
  headerType: string
  timestamp: number
}

const store = useCodeStore(pinia)
const { getCdnType, getCdnList } = storeToRefs(store)

export const cacheMap: Map<string, CachedResource> = new Map()

const getResource = async (url: string): Promise<string | null> => {
  const cached = cacheMap.get(url)
  if (cached) {
    return cached.content
  }

  try {
    const response = await fetch(url)
    if (!response.ok) return null

    const content = await response.text()
    const headerType = response.headers.get('content-type') || 'text/plain'

    cacheMap.set(url, {
      content,
      headerType,
      timestamp: Date.now(),
    })
    return content
  } catch {
    return null
  }
}
// 处理外部资源
export const processExternalResources = async (cdnList: CdnType[], isLoading = true) => {
  let css = []
  let js = []

  let loadingIndex = 0

  store.setLoading(isLoading)
  for (let i = 0; i < cdnList.length; i++) {
    const current = cdnList[i]
    loadingIndex++
    const cachedContent = await getResource(current.url)
    if (cachedContent) {
      if (current.type === 'style') {
        css.push(`<style>${cachedContent}</style>`)
      } else if (current.type === 'script') {
        js.push(`<script>${cachedContent}</script>`)
      }
    }
  }

  setTimeout(() => {
    store.setLoading(loadingIndex === cdnList.length ? false : true)
  }, 500)
  return [css.filter(Boolean), js.filter(Boolean)]
}

export const onInitTemplateCache = async (template: TemplateItem, isLoading = true) => {
  const { cdn } = template
  const cdnType = (name: string) => (['bootcdn', 'cdnjs'].includes(name) ? 'cdnjs' : name)
  const isExist = (name: string) => getCdnList.value.find((item) => item.name === cdnType(name))
  const cdnBase = isExist(getCdnType.value)?.url || isExist('jsdelivr')?.url
  const cdnList = cdn[cdnType(getCdnType.value) as keyof TemplateItem['cdn']]
    .map((item) => {
      let url = item.url.startsWith('https://') ? item.url : `${cdnBase}${item.url}`
      if (item.type === 'script') {
        return { type: 'script', url }
      } else if (item.type === 'style') {
        return { type: 'style', url }
      }
      return null
    })
    .filter(Boolean) as CdnType[]
  const [css, js] = await processExternalResources(cdnList, isLoading)
  return {
    css,
    js,
  }
}
