// // 处理外部资源
// const processExternalResources = async (content: string, type: 'css' | 'js') => {
//   const regex = type === 'css' ? /url\(['"]?([^'")]+)['"]?\)/g : /src=['"]([^'"]+)['"]/g
//   let processedContent = content
//   const matches = content.matchAll(regex)

//   for (const match of matches) {
//     const url = match[1]
//     if (url.startsWith('http')) {
//       const cachedContent = await resourceCache.getResource(url)
//       if (cachedContent) {
//         if (type === 'css') {
//           processedContent = processedContent.replace(
//             `url('${url}')`,
//             `url('data:text/css;base64,${btoa(cachedContent)}')`,
//           )
//         } else {
//           processedContent = processedContent.replace(
//             `src="${url}"`,
//             `src="data:text/javascript;base64,${btoa(cachedContent)}"`,
//           )
//         }
//       }
//     }
//   }

//   return processedContent
// }

// // 处理 CDN 资源
// const processCDNResources = async (cdnType: string) => {
//   const cdnUrls = {
//     css:
//       cdnType === 'unpkg'
//         ? 'https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css'
//         : 'https://cdn.jsdelivr.net/npm/tailwindcss@^2/dist/tailwind.min.css',
//     js:
//       cdnType === 'unpkg'
//         ? 'https://unpkg.com/vue@3/dist/vue.global.js'
//         : 'https://cdn.jsdelivr.net/npm/vue@3/dist/vue.global.js',
//   }

//   const [cssContent, jsContent] = await Promise.all([
//     resourceCache.getResource(cdnUrls.css),
//     resourceCache.getResource(cdnUrls.js),
//   ])

//   return {
//     css: cssContent
//       ? `<style>${cssContent}</style>`
//       : `<link href="${cdnUrls.css}" rel="stylesheet">`,
//     js: jsContent ? `<script>${jsContent}</script>` : `<script src="${cdnUrls.js}"></script>`,
//   }
// }

// // 生成最终的 HTML 内容
// const generateFinalHtml = async (template: any, cdnType: string) => {
//   const { html, css, js } = template
//   const [processedCss, processedJs, cdnResources] = await Promise.all([
//     processExternalResources(css, 'css'),
//     processExternalResources(js, 'js'),
//     processCDNResources(cdnType),
//   ])
// }

// watch(
//   () => [store.currentTemplate, store.cdnType],
//   async ([template, cdnType]) => {
//     try {
//       renderStr.value = await generateFinalHtml(template, cdnType)
//     } catch (error) {
//       console.error('Failed to generate HTML:', error)
//     }
//   },
//   { immediate: true },
// )
