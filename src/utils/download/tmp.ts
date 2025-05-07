import type { TemplateSdn } from '@/config/types'
import type { DownloadData } from '.'
import { storeToRefs } from 'pinia'
import { useCodeStore } from '@/store/modules/code'
import pinia from '@/store'
import { useTemplate } from '@/hooks/useTemplate'
const store = useCodeStore(pinia)
const { getCdnType, getCdnList } = storeToRefs(store)

const { onGetScriptType } = useTemplate()
const onGetCdnLinks = (data: DownloadData) => {
  const {
    template: { cdn },
  } = data
  return cdn[getCdnType.value as keyof TemplateSdn]
    .map((item) => {
      const baseUrl = getCdnList.value.find((i) => i.name === getCdnType.value)?.url
      const url = `${baseUrl}/${item.url}`
      if (item.type === 'style') {
        return `<link rel="stylesheet" href="${url}" />`
      } else if (item.type === 'script') {
        return `<script src="${url}" ></script>`
      }
      return ''
    })
    .filter(Boolean)
    .join('\n\t\t')
}
export const tmpHtml = (data: DownloadData) => {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${data.templateName}</title>
    ${onGetCdnLinks(data)}
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    ${data.html}
    <script ${onGetScriptType()} src="script.js"></script>
  </body>
</html>`
}

export const tmpReadme = (data: DownloadData) => {
  return `# ${data.templateName}
## 使用
1. 建议使用 vscode 打开项目
2. 直接打开 index.html 文件
3. 安装 Live Server 插件
4. 点击右下角的 Go Live 按钮或者右键点击选择 Open with Live server
5. 访问 http://127.0.0.1:5500/index.html
`
}
