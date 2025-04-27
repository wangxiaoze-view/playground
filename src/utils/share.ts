import { compressToEncodedURIComponent, decompressFromEncodedURIComponent } from 'lz-string'

export interface ShareTemplateData {
  template: string[]
  html: string
  css: string
  js: string
}

/**
 * 生成分享链接
 */
export function generateShareLink(data: ShareTemplateData): string {
  const compressed = compressToEncodedURIComponent(JSON.stringify(data))
  return `${window.location.origin}${window.location.pathname}?code=${compressed}`
}

/**
 * 解析分享链接
 */
export function parseShareLink(): ShareTemplateData | null {
  const urlParams = new URLSearchParams(window.location.search)
  const code = urlParams.get('code')

  if (!code) return null

  try {
    const decompressed = decompressFromEncodedURIComponent(code)
    return JSON.parse(decompressed)
  } catch (error) {
    console.error('Failed to parse share link:', error)
    return null
  }
}

/**
 * 复制到剪贴板
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch (error) {
    console.error('Failed to copy to clipboard:', error)
    return false
  }
}
