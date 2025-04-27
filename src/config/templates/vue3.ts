import { initTmpCssStr } from '../template-str'
import type { TemplateItem } from '../types'

const onGetVue3Cdn = {
  unpkg: 'vue@3.5.13/dist/vue.global.js',
  jsdelivr: 'vue@3',
  cdnjs: 'vue/3.5.13/vue.global.min.js',
}

export default [
  {
    value: 'Element-Plus',
    label: 'Element-Plus',
    icon: 'iconfont icon-element-plus',
    html: `<div id="app">
  <h1>{{ message }}</h1>
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </el-row>
</div>`,
    css: initTmpCssStr(),
    js: `const { createApp, ref } = Vue;
const app = createApp({
  setup() {
    const message = ref('Hello Element-Plus!')
    return {
      message,
    }
  }
});
app.use(ElementPlus);
app.mount('#app')`,
    cdn: {
      cdnjs: [
        { type: 'style', url: 'element-plus/2.9.4/index.min.css' },
        { type: 'script', url: onGetVue3Cdn.cdnjs },
        { type: 'script', url: 'element-plus/2.9.4/index.full.min.js' },
      ],
      unpkg: [
        { type: 'style', url: 'element-plus@2.9.9/dist/index.css' },
        { type: 'script', url: onGetVue3Cdn.unpkg },
        { type: 'script', url: 'element-plus@2.9.9/dist/index.full.js' },
      ],
      jsdelivr: [
        { type: 'style', url: 'element-plus/dist/index.css' },
        { type: 'script', url: onGetVue3Cdn.jsdelivr },
        { type: 'script', url: 'element-plus' },
      ],
    },
  },

  {
    value: 'Primevue',
    label: 'Primevue',
    icon: 'ri-vuejs-line',
    html: `<div id="app">
  <h1>{{ message }}</h1>
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
    js: `const { createApp, ref } = Vue;
const app = createApp({
  setup() {
    const message = ref('Hello Primevue!')
    return {
      message,
    }
  }
});
app.use(PrimeVue.Config, {
  theme: {
    // 主题配置
    preset: PrimeUIX.Themes.Aura
  }
});
// 在这里动态注册
app.component('p-button', PrimeVue.Button );
app.mount('#app');`,
    cdn: {
      cdnjs: [
        { type: 'script', url: onGetVue3Cdn.cdnjs },
        { type: 'script', url: 'primevue/4.3.0/umd/primevue.min.js' },
        // cdn 不存在@primeuix/themes
        {
          type: 'script',
          url: 'https://cdn.jsdelivr.net/npm/@primeuix/themes@1.0.3/umd/aura.min.js',
        },
      ],
      unpkg: [
        { type: 'script', url: onGetVue3Cdn.unpkg },
        { type: 'script', url: 'primevue@4.3.3/umd/primevue.min.js' },
        { type: 'script', url: '@primeuix/themes@1.0.3/umd/aura.js' },
      ],
      jsdelivr: [
        { type: 'script', url: onGetVue3Cdn.jsdelivr },
        { type: 'script', url: 'primevue@4' },
        { type: 'script', url: '@primeuix/themes/umd/aura.min.js' },
      ],
    },
  },

  {
    value: 'Ant Design Vue',
    label: 'Ant Design Vue',
    icon: 'iconfont icon-antd',
    html: `<div id="app">
  <h1>{{ message }}</h1>
  <a-space wrap>
    <a-button type="primary">Primary Button</a-button>
    <a-button>Default Button</a-button>
    <a-button type="dashed">Dashed Button</a-button>
    <a-button type="text">Text Button</a-button>
    <a-button type="link">Link Button</a-button>
  </a-space>
</div>`,
    css: initTmpCssStr(),
    js: `const { createApp, ref } = Vue;
const app = createApp({
  setup() {
    const message = ref('Hello Ant Design Vue!')
    return {
      message,
    }
  }
});
app.use(antd);
app.mount('#app');`,
    cdn: {
      cdnjs: [
        { type: 'style', url: 'ant-design-vue/3.2.6/antd.min.css' },
        { type: 'script', url: 'dayjs/1.11.7/dayjs.min.js' },
        { type: 'script', url: 'dayjs/1.11.7/plugin/customParseFormat.min.js' },
        { type: 'script', url: 'dayjs/1.11.7/plugin/weekday.min.js' },
        { type: 'script', url: 'dayjs/1.11.7/plugin/localeData.min.js' },
        { type: 'script', url: 'dayjs/1.11.7/plugin/weekOfYear.min.js' },
        { type: 'script', url: 'dayjs/1.11.7/plugin/weekYear.min.js' },
        { type: 'script', url: 'dayjs/1.11.7/plugin/advancedFormat.min.js' },
        { type: 'script', url: 'dayjs/1.11.7/plugin/quarterOfYear.min.js' },
        { type: 'script', url: onGetVue3Cdn.cdnjs },
        { type: 'script', url: 'ant-design-vue/3.2.6/antd.min.js' },
      ],
      unpkg: [
        { type: 'style', url: 'ant-design-vue@4.2.6/dist/reset.css' },
        { type: 'script', url: 'dayjs@1.11.13/dayjs.min.js' },
        { type: 'script', url: 'dayjs@1.11.13/plugin/customParseFormat.js' },
        { type: 'script', url: 'dayjs@1.11.13/plugin/weekday.js' },
        { type: 'script', url: 'dayjs@1.11.13/plugin/localeData.js' },
        { type: 'script', url: 'dayjs@1.11.13/plugin/weekOfYear.js' },
        { type: 'script', url: 'dayjs@1.11.13/plugin/weekYear.js' },
        { type: 'script', url: 'dayjs@1.11.13/plugin/advancedFormat.js' },
        { type: 'script', url: 'dayjs@1.11.13/plugin/quarterOfYear.js' },
        { type: 'script', url: onGetVue3Cdn.unpkg },
        { type: 'script', url: 'ant-design-vue@4.2.6/dist/antd.min.js' },
      ],
      jsdelivr: [
        { type: 'style', url: 'ant-design-vue/dist/reset.css' },
        { type: 'script', url: 'dayjs@1.11.7/dayjs.min.js' },
        { type: 'script', url: 'dayjs@1.11.7/plugin/customParseFormat.min.js' },
        { type: 'script', url: 'dayjs@1.11.7/plugin/weekday.min.js' },
        { type: 'script', url: 'dayjs@1.11.7/plugin/localeData.min.js' },
        { type: 'script', url: 'dayjs@1.11.7/plugin/weekOfYear.min.js' },
        { type: 'script', url: 'dayjs@1.11.7/plugin/weekYear.min.js' },
        { type: 'script', url: 'dayjs@1.11.7/plugin/advancedFormat.min.js' },
        { type: 'script', url: 'dayjs@1.11.7/plugin/quarterOfYear.min.js' },
        { type: 'script', url: onGetVue3Cdn.jsdelivr },
        { type: 'script', url: 'ant-design-vue@4.2.6/dist/antd.min.js' },
      ],
    },
  },

  {
    value: 'Vant',
    label: 'Vant',
    icon: 'iconfont icon-vant',
    html: `<div id="app">
  <h1>{{ message }}</h1>
  <van-button type="primary">主要按钮</van-button>
  <van-button type="success">成功按钮</van-button>
  <van-button type="default">默认按钮</van-button>
  <van-button type="danger">危险按钮</van-button>
  <van-button type="warning">警告按钮</van-button>
</div>`,
    css: initTmpCssStr(),
    js: `const { createApp, ref } = Vue;
const app = createApp({
  setup() {
    const message = ref('Hello Vant4!')
    return {
      message,
    }
  }
});
app.use(vant);
app.mount('#app');`,
    cdn: {
      cdnjs: [
        { type: 'style', url: 'vant/4.9.15/index.min.css' },
        { type: 'script', url: onGetVue3Cdn.cdnjs },
        { type: 'script', url: 'vant/4.9.15/vant.min.js' },
      ],
      unpkg: [
        { type: 'style', url: 'vant@4.4.0/lib/index.css' },
        { type: 'script', url: onGetVue3Cdn.unpkg },
        { type: 'script', url: 'vant@4.9.19/lib/vant.min.js' },
      ],
      jsdelivr: [
        { type: 'style', url: 'vant@4/lib/index.css' },
        { type: 'script', url: onGetVue3Cdn.jsdelivr },
        { type: 'script', url: 'vant@4/lib/vant.min.js' },
      ],
    },
  },
] as TemplateItem[]
