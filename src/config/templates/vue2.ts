import { initTmpCssStr } from '../template-str'
import type { TemplateItem } from '../types'

export default [
  {
    value: 'Element-Ui',
    label: 'Element-Ui',
    icon: 'iconfont icon-elementui',
    html: `<div id="app">
  <h1>{{ message }}</h1>
  <el-row>
    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
  </el-row>
</div>
`,
    css: initTmpCssStr(),
    js: `new Vue({
  el: '#app',
  data: {
    message: 'Element-Ui!'
  }
});`,
    cdn: {
      cdnjs: [
        { type: 'style', url: 'element-ui/2.15.6/theme-chalk/index.min.css' },
        { type: 'script', url: 'vue/2.7.9/vue.min.js' },
        { type: 'script', url: 'element-ui/2.15.6/index.min.js' },
      ],
      unpkg: [
        { type: 'style', url: 'element-ui@2.15.6/lib/theme-chalk/index.css' },
        { type: 'script', url: 'vue@2.7.9/dist/vue.min.js' },
        { type: 'script', url: 'element-ui@2.15.6/lib/index.js' },
      ],
      jsdelivr: [
        { type: 'style', url: 'element-ui@2.15.6/lib/theme-chalk/index.min.css' },
        { type: 'script', url: 'vue@2.7.9/dist/vue.min.js' },
        { type: 'script', url: 'element-ui@2.15.6/lib/index.min.js' },
      ],
    },
  },
] as TemplateItem[]
