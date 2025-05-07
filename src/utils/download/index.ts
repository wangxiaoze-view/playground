import JSZip from 'jszip'
import { saveAs } from 'file-saver'
import { tmpHtml, tmpReadme } from './tmp'
import type { TemplateItem } from '@/config/types'

export interface DownloadData {
  html: string
  css: string
  js: string
  template: TemplateItem
  templateName: string
}

export async function downloadProject(data: DownloadData) {
  try {
    const zip = new JSZip()
    zip.file('index.html', tmpHtml(data))
    zip.file('styles.css', data.css)
    zip.file('script.js', data.js)
    zip.file('README.md', tmpReadme(data))
    const content = await zip.generateAsync({ type: 'blob' })
    saveAs(content, `${data.templateName}.zip`)
    return true
  } catch (error) {
    return false
  }
}
