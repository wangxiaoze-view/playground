import {
  initTmpCssStr,
  initTmpEleStrV3,
  initTmpJsStrV2,
  initTmpJsStrV3,
  initTmpReactStr,
  initTmpVueStr,
} from './template-str'

export interface Template {
  key: string
  label: string
  html: string
  css: string
  js: string
  cdn: string[]
}
export const templates: Template[] = [
  {
    key: 'default',
    label: '默认模板',
    html: '<div class="#app">Hello World!</div>',
    css: initTmpCssStr(),
    js: 'console.log("Hello World!")',
    cdn: [],
  },
  {
    key: 'vue2',
    label: 'Vue 2',
    html: initTmpVueStr(),
    css: initTmpCssStr(),
    js: initTmpJsStrV2(),
    cdn: [`<script src="https://cdn.jsdelivr.net/npm/vue@2.7.14"></script>`],
  },
  {
    key: 'vue3',
    label: 'Vue 3',
    html: initTmpVueStr(),
    css: initTmpCssStr(),
    js: initTmpJsStrV3(),
    cdn: [`<script src="https://cdn.jsdelivr.net/npm/vue@3"></script>`],
  },
  {
    key: 'vue3-element',
    label: 'Vue 3 + Element Plus',
    html: `<div id="app">
  <el-button type="primary">Primary</el-button>
  <el-button type="success">Success</el-button>
  <el-button type="warning">Warning</el-button>
  <el-button type="danger">Danger</el-button>
</div>`,
    css: initTmpCssStr(),
    js: initTmpEleStrV3(),
    cdn: [
      `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/element-plus/dist/index.css" />`,
      `<script src="https://cdn.jsdelivr.net/npm/vue@3"></script>`,
      `<script src="https://cdn.jsdelivr.net/npm/element-plus"></script>`,
      `<script src="https://cdn.jsdelivr.net/npm/@element-plus/icons-vue@2.3.1/dist/index.iife.min.js"></script>`,
    ],
  },
  {
    key: 'react',
    label: 'React',
    html: `<div id="root"></div>`,
    css: initTmpCssStr(),
    js: initTmpReactStr(),
    cdn: [
      `<script src="https://cdn.jsdelivr.net/npm/react@18.3.1/umd/react.production.min.js"></script>`,
      `<script src="https://cdn.jsdelivr.net/npm/react-dom@18.3.1/umd/react-dom-test-utils.production.min.js"></script>`,
      `<script src="https://cdn.jsdelivr.net/npm/@babel/standalone@7.27.0/babel.min.js"></script>`,
    ],
  },
]

export const onRenderHtml = (htmlCode: string, cssCode: string, jsCode: string, cdn: string) => {
  return `
  <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        ${cdn}
        <style>${cssCode}</style>
      </head>
      <body>
        ${htmlCode}
        <script>${jsCode}</script>
      </body>
    </html>`
}
