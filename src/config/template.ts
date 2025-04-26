import {
  initTmpCssStr,
  initTmpDesignVueStr,
  initTmpEleStrV3,
  initTmpJsStrV2,
  initTmpJsStrV3,
  initTmpPrimevueStr,
  initTmpReactStr,
  initTmpSemiStr,
  initTmpVantStr,
  initTmpVueStr,
} from './template-str'

export interface Template {
  key: string
  type: string
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
    type: 'html',
    html: '<div class="#app">Hello World!</div>',
    css: initTmpCssStr(),
    js: 'console.log("Hello World!")',
    cdn: [],
  },
  {
    key: 'vue2',
    label: 'Vue 2',
    type: 'vue',
    html: initTmpVueStr(),
    css: initTmpCssStr(),
    js: initTmpJsStrV2(),
    cdn: [`<script src="https://cdn.jsdelivr.net/npm/vue@2.7.14"></script>`],
  },
  {
    key: 'vue3',
    label: 'Vue 3',
    type: 'vue',
    html: initTmpVueStr(),
    css: initTmpCssStr(),
    js: initTmpJsStrV3(),
    cdn: [`<script src="https://cdn.jsdelivr.net/npm/vue@3/dist/vue.global.prod.js"></script>`],
  },
  {
    key: 'vue3-element',
    label: 'Vue 3 + Element Plus',
    type: 'vue',
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
      `<script src="https://cdn.jsdelivr.net/npm/vue@3/dist/vue.global.prod.js"></script>`,
      `<script src="https://cdn.jsdelivr.net/npm/element-plus"></script>`,
      `<script src="https://cdn.jsdelivr.net/npm/@element-plus/icons-vue@2.3.1/dist/index.iife.min.js"></script>`,
    ],
  },
  {
    key: 'vant',
    label: 'Vue 3 + vant',
    type: 'vue',
    html: `<div id="app">
  <van-button type="primary">主要按钮</van-button>
  <van-button type="success">成功按钮</van-button>
  <van-button type="default">默认按钮</van-button>
  <van-button type="warning">警告按钮</van-button>
  <van-button type="danger">危险按钮</van-button>
</div>`,
    css: initTmpCssStr(),
    js: initTmpVantStr(),
    cdn: [
      `<link rel="stylesheet" href="https://fastly.jsdelivr.net/npm/vant@3/lib/index.css" />`,
      `<script src="https://cdn.jsdelivr.net/npm/vue@3/dist/vue.global.prod.js"></script>`,
      `<script src="https://fastly.jsdelivr.net/npm/vant@3/lib/vant.min.js"></script>`,
    ],
  },
  {
    key: 'primevue',
    label: 'Vue 3 + primevue',
    type: 'vue',
    html: `<div id="app">
  <p-button label="Primary"></p-button>
  <p-button label="Secondary" severity="secondary"></p-button>
  <p-button label="Success" severity="success"></p-button>
  <p-button label="Info" severity="info"></p-button>
  <p-button label="Warn" severity="warn"></p-button>
  <p-button label="Help" severity="help"></p-button>
  <p-button label="Danger" severity="danger"></p-button>
  <p-button label="Contrast" severity="contrast"></p-button>
</div>`,
    css: initTmpCssStr(),
    js: initTmpPrimevueStr(),
    cdn: [
      `<script src="https://cdn.jsdelivr.net/npm/vue@3/dist/vue.global.prod.js"></script>`,
      `<script src="https://cdn.jsdelivr.net/npm/primevue@4.3.3/umd/primevue.min.js"></script>`,
      `<script src="https://cdn.jsdelivr.net/npm/@primeuix/themes@1.0.3/umd/aura.min.js"></script>`,
    ],
  },
  {
    key: 'ant-design-vue',
    label: 'Vue 3 + ant-design-vue',
    type: 'vue',
    html: `<div id="app">
  <a-space wrap>
    <a-button type="primary">Primary Button</a-button>
    <a-button>Default Button</a-button>
    <a-button type="dashed">Dashed Button</a-button>
    <a-button type="text">Text Button</a-button>
    <a-button type="link">Link Button</a-button>
  </a-space>
</div>`,
    css: initTmpCssStr(),
    js: initTmpDesignVueStr(),
    cdn: [
      `<link href="https://cdn.jsdelivr.net/npm/ant-design-vue@4.2.6/dist/reset.min.css" rel="stylesheet">`,
      `<script src="https://unpkg.com/dayjs/dayjs.min.js"></script>`,
      `<script src="https://unpkg.com/dayjs/plugin/customParseFormat.js"></script>`,
      `<script src="https://unpkg.com/dayjs/plugin/weekday.js"></script>`,
      `<script src="https://unpkg.com/dayjs/plugin/localeData.js"></script>`,
      `<script src="https://unpkg.com/dayjs/plugin/weekOfYear.js"></script>`,
      `<script src="https://unpkg.com/dayjs/plugin/weekYear.js"></script>`,
      `<script src="https://unpkg.com/dayjs/plugin/advancedFormat.js"></script>`,
      `<script src="https://unpkg.com/dayjs/plugin/quarterOfYear.js"></script>`,
      `<script src="https://cdn.jsdelivr.net/npm/vue@3/dist/vue.global.prod.js"></script>`,
      `<script src="https://cdn.jsdelivr.net/npm/ant-design-vue@4.2.6/dist/antd.min.js"></script>`,
    ],
  },
  {
    key: 'react',
    label: 'React',
    type: 'react',
    html: `<div id="root"></div>`,
    css: initTmpCssStr(),
    js: initTmpReactStr(),
    cdn: [
      `<script src="https://cdn.jsdelivr.net/npm/react@18/umd/react.development.js"></script>`,
      `<script src="https://cdn.jsdelivr.net/npm/react-dom@18/umd/react-dom.development.js"></script>`,
      `<script src="https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js"></script>`,
    ],
  },
  {
    key: 'semi',
    label: 'React + Semi-design',
    type: 'react',
    html: `<div id="root"></div>`,
    css: initTmpCssStr(),
    js: initTmpSemiStr(),
    cdn: [
      `<script src="https://cdn.jsdelivr.net/npm/react@18/umd/react.development.js"></script>`,
      `<script src="https://cdn.jsdelivr.net/npm/react-dom@18/umd/react-dom.development.js"></script>`,
      `<script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>`,
      `<script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>`,
      `<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>`,
      `<script src="https://unpkg.com/@douyinfe/semi-ui@2.27.0/dist/umd/semi-ui.min.js"></script>`,
      `<link rel="stylesheet" href="https://unpkg.com/@douyinfe/semi-ui@2.27.0/dist/css/semi.css">`,
      `<script src="https://unpkg.com/@douyinfe/semi-icons@latest/dist/umd/semi-icons.min.js"></script>`,
      `<link rel="stylesheet" href="https://unpkg.com/@douyinfe/semi-icons@latest/dist/css/semi-icons.css">`,
      `<script src="https://unpkg.com/@douyinfe/semi-illustrations@latest/dist/umd/semi-illustrations.min.js"></script>`,
    ],
  },
]

export const onRenderHtml = (
  htmlCode: string,
  cssCode: string,
  jsCode: string,
  template: Template,
) => {
  return `
  <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        ${template.cdn.join('\n')}
        <style>${cssCode}</style>
      </head>
      <body>
        ${htmlCode}
        <script  ${template.type === 'react' ? 'type="text/babel"' : ''}>${jsCode}</script>
      </body>
    </html>`
}
