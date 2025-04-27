interface CachedResource {
  content: string
  type: string
  timestamp: number
}

const CACHE_EXPIRY = 24 * 60 * 60 * 1000 // 24小时

export class ResourceCache {
  private static instance: ResourceCache
  private cache: Map<string, CachedResource>

  private constructor() {
    this.cache = new Map()
    this.loadFromStorage()
  }

  public static getInstance(): ResourceCache {
    if (!ResourceCache.instance) {
      ResourceCache.instance = new ResourceCache()
    }
    return ResourceCache.instance
  }

  private loadFromStorage() {
    try {
      const stored = localStorage.getItem('resource-cache')
      if (stored) {
        const parsed = JSON.parse(stored)
        this.cache = new Map(Object.entries(parsed))
        this.cleanupExpired()
      }
    } catch (error) {
      console.error('Failed to load cache from storage:', error)
    }
  }

  private saveToStorage() {
    try {
      const serialized = JSON.stringify(Object.fromEntries(this.cache))
      localStorage.setItem('resource-cache', serialized)
    } catch (error) {
      console.error('Failed to save cache to storage:', error)
    }
  }

  private cleanupExpired() {
    const now = Date.now()
    for (const [url, resource] of this.cache.entries()) {
      if (now - resource.timestamp > CACHE_EXPIRY) {
        this.cache.delete(url)
      }
    }
    this.saveToStorage()
  }

  public async getResource(url: string): Promise<string | null> {
    const cached = this.cache.get(url)
    if (cached && Date.now() - cached.timestamp < CACHE_EXPIRY) {
      return cached.content
    }

    try {
      const response = await fetch(url)
      if (!response.ok) return null

      const content = await response.text()
      const type = response.headers.get('content-type') || 'text/plain'

      this.cache.set(url, {
        content,
        type,
        timestamp: Date.now(),
      })

      this.saveToStorage()
      return content
    } catch (error) {
      console.error('Failed to fetch resource:', error)
      return null
    }
  }

  public clearCache() {
    this.cache.clear()
    localStorage.removeItem('resource-cache')
  }
}
export const resourceCache = ResourceCache.getInstance()

// 处理外部资源
export const processExternalResources = async (content: string, type: 'css' | 'js') => {
  const regex = type === 'css' ? /url\(['"]?([^'")]+)['"]?\)/g : /src=['"]([^'"]+)['"]/g
  let processedContent = content
  const matches = content.matchAll(regex)

  for (const match of matches) {
    const url = match[1]
    if (url.startsWith('http')) {
      const cachedContent = await resourceCache.getResource(url)
      console.log(cachedContent, 12)
      if (cachedContent) {
        if (type === 'css') {
          processedContent = processedContent.replace(
            `url('${url}')`,
            `url('data:text/css;base64,${btoa(cachedContent)}')`,
          )
        } else {
          processedContent = processedContent.replace(
            `src="${url}"`,
            `src="data:text/javascript;base64,${JSON.stringify(cachedContent)}"`,
          )
        }
      }
    }
  }

  return processedContent
}

// 处理 CDN 资源
export const processCDNResources = async (cdnType: string) => {
  const cdnUrls = {
    css:
      cdnType === 'unpkg'
        ? 'https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css'
        : 'https://cdn.jsdelivr.net/npm/tailwindcss@^2/dist/tailwind.min.css',
    js:
      cdnType === 'unpkg'
        ? 'https://unpkg.com/vue@3/dist/vue.global.js'
        : 'https://cdn.jsdelivr.net/npm/vue@3/dist/vue.global.js',
  }

  const [cssContent, jsContent] = await Promise.all([
    resourceCache.getResource(cdnUrls.css),
    resourceCache.getResource(cdnUrls.js),
  ])
  return {
    css: cssContent
      ? `<style>${cssContent}</style>`
      : `<link href="${cdnUrls.css}" rel="stylesheet">`,
    js: jsContent ? `<script>${jsContent}</script>` : `<script src="${cdnUrls.js}"></script>`,
  }
}
