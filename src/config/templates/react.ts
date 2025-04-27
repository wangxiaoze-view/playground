import { initTmpCssStr } from '../template-str'
import type { TemplateItem } from '../types'

export default [
  {
    value: 'JavaScript',
    label: 'JavaScript',
    icon: 'ri-reactjs-line',
    html: '<div id="app"></div>',
    css: initTmpCssStr(),
    js: `const { useState } = React;
const { createRoot } = ReactDOM;
function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>Hello React!</h1>
      <button onClick={() => setCount(count + 1)}>
        Count is: {count}
      </button>
    </div>
  )
};
const root = createRoot(document.getElementById('app'));
root.render(<App />);`,
    cdn: {
      cdnjs: [
        { type: 'script', url: 'react/18.0.0/umd/react.production.min.js' },
        { type: 'script', url: 'react-dom/18.0.0/umd/react-dom.production.min.js' },
        { type: 'script', url: 'babel-standalone/6.26.0/babel.min.js' },
      ],
      unpkg: [
        { type: 'script', url: 'react@18.0.0/umd/react.production.min.js' },
        { type: 'script', url: 'react-dom@18.0.0/umd/react-dom.production.min.js' },
        { type: 'script', url: '@babel/standalone/babel.min.js' },
      ],
      jsdelivr: [
        { type: 'script', url: 'react@18/umd/react.development.js' },
        { type: 'script', url: 'react-dom@18/umd/react-dom.development.js' },
        { type: 'script', url: '@babel/standalone/babel.min.js' },
      ],
    },
  },
  {
    value: 'Semi',
    label: 'Semi',
    icon: 'iconfont icon-semi-icons-semi_logo',
    html: '<div id="app"></div>',
    css: initTmpCssStr(),
    js: `const { Button } = SemiUI;
ReactDOM.render(
  <div>
    <h1>Hello Semi!</h1>
    <Button theme='solid' type='primary' style={{ marginRight: 8 }}>深色主要</Button>
    <Button theme='solid' type='secondary' style={{ marginRight: 8 }}>深色次要</Button>
    <Button theme='solid' type='tertiary' style={{ marginRight: 8 }}>深色第三</Button>
    <Button theme='solid' type='warning' style={{ marginRight: 8 }}>深色警告</Button>
    <Button theme='solid' type='danger' style={{ marginRight: 8 }}>深色危险</Button>
  </div>,
  document.getElementById('app')
);`,
    cdn: {
      cdnjs: [
        { type: 'script', url: 'react/18.0.0/umd/react.production.min.js' },
        { type: 'script', url: 'react-dom/18.0.0/umd/react-dom.production.min.js' },
        { type: 'script', url: 'babel-standalone/6.26.0/babel.min.js' },
        // cdn 不存在
        {
          type: 'style',
          url: 'https://cdn.jsdelivr.net/npm/@douyinfe/semi-ui@2.27.0/dist/css/semi.css',
        },
        {
          type: 'style',
          url: 'https://cdn.jsdelivr.net/npm/@douyinfe/semi-icons@latest/dist/css/semi-icons.css',
        },
        {
          type: 'script',
          url: 'https://cdn.jsdelivr.net/npm/@douyinfe/semi-ui@2.27.0/dist/umd/semi-ui.min.js',
        },
        {
          type: 'script',
          url: 'https://cdn.jsdelivr.net/npm/@douyinfe/semi-icons@latest/dist/umd/semi-icons.min.js',
        },
        {
          type: 'script',
          url: 'https://cdn.jsdelivr.net/npm/@douyinfe/semi-illustrations@latest/dist/umd/semi-illustrations.min.js',
        },
      ],
      unpkg: [
        { type: 'script', url: 'react@16.14.0/umd/react.development.js' },
        { type: 'script', url: 'react-dom@16.14.0/umd/react-dom.development.js' },
        { type: 'script', url: 'babel-standalone@6.15.0/babel.min.js' },
        { type: 'style', url: '@douyinfe/semi-ui@2.27.0/dist/css/semi.css' },
        { type: 'style', url: '@douyinfe/semi-icons@2.78.0/dist/css/semi-icons.css' },
        { type: 'script', url: '@douyinfe/semi-ui@2.27.0/dist/umd/semi-ui.min.js' },
        { type: 'script', url: '@douyinfe/semi-icons@2.78.0/dist/umd/semi-icons.min.js' },
        {
          type: 'script',
          url: '@douyinfe/semi-illustrations@2.78.0/dist/umd/semi-illustrations.min.js',
        },
      ],
      jsdelivr: [
        { type: 'script', url: 'react@16/umd/react.development.js' },
        { type: 'script', url: 'react-dom@16/umd/react-dom.development.js' },
        { type: 'script', url: 'babel-standalone@6.15.0/babel.min.js' },
        { type: 'style', url: '@douyinfe/semi-ui@2.27.0/dist/css/semi.css' },
        { type: 'style', url: '@douyinfe/semi-icons@latest/dist/css/semi-icons.css' },
        { type: 'script', url: '@douyinfe/semi-ui@2.27.0/dist/umd/semi-ui.min.js' },
        { type: 'script', url: '@douyinfe/semi-icons@latest/dist/umd/semi-icons.min.js' },
        {
          type: 'script',
          url: '@douyinfe/semi-illustrations@latest/dist/umd/semi-illustrations.min.js',
        },
      ],
    },
  },

  // ant-design
  {
    value: 'Ant-Design',
    label: 'Ant-Design',
    icon: 'iconfont icon-a-antd1',
    html: '<div id="app"></div>',
    css: initTmpCssStr(),
    js: `const { Button, Flex } = antd;
ReactDOM.render(
  <div>
    <h1>Hello Semi!</h1>
    <Flex gap="small" wrap>
      <Button type="primary">Primary Button</Button>
      <Button>Default Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <Button type="text">Text Button</Button>
      <Button type="link">Link Button</Button>
    </Flex>
  </div>,
  document.getElementById('app')
);`,
    cdn: {
      cdnjs: [
        // cdn文件可能存在问题，那么这里用 jsdelivr
        { type: 'style', url: 'https://cdn.jsdelivr.net/npm/antd@5.24.8/dist/reset.min.css' },
        { type: 'script', url: 'react/18.0.0/umd/react.production.min.js' },
        { type: 'script', url: 'react-dom/18.0.0/umd/react-dom.production.min.js' },
        { type: 'script', url: 'babel-standalone/6.26.0/babel.min.js' },
        { type: 'script', url: 'dayjs/1.11.7/dayjs.min.js' },
        { type: 'script', url: 'dayjs/1.11.7/plugin/customParseFormat.min.js' },
        { type: 'script', url: 'dayjs/1.11.7/plugin/weekday.min.js' },
        { type: 'script', url: 'dayjs/1.11.7/plugin/localeData.min.js' },
        { type: 'script', url: 'dayjs/1.11.7/plugin/weekOfYear.min.js' },
        { type: 'script', url: 'dayjs/1.11.7/plugin/weekYear.min.js' },
        { type: 'script', url: 'dayjs/1.11.7/plugin/advancedFormat.min.js' },
        { type: 'script', url: 'dayjs/1.11.7/plugin/quarterOfYear.min.js' },
        { type: 'script', url: 'https://cdn.jsdelivr.net/npm/antd@5.24.8/dist/antd.min.js' },
      ],
      unpkg: [
        { type: 'style', url: 'antd@5.24.8/dist/reset.css' },
        { type: 'script', url: 'react@16.14.0/umd/react.development.js' },
        { type: 'script', url: 'react-dom@16.14.0/umd/react-dom.development.js' },
        { type: 'script', url: 'babel-standalone@6.26.0/babel.min.js' },
        { type: 'script', url: 'dayjs@1.11.13/dayjs.min.js' },
        { type: 'script', url: 'dayjs@1.11.13/plugin/customParseFormat.js' },
        { type: 'script', url: 'dayjs@1.11.13/plugin/weekday.js' },
        { type: 'script', url: 'dayjs@1.11.13/plugin/localeData.js' },
        { type: 'script', url: 'dayjs@1.11.13/plugin/weekOfYear.js' },
        { type: 'script', url: 'dayjs@1.11.13/plugin/weekYear.js' },
        { type: 'script', url: 'dayjs@1.11.13/plugin/advancedFormat.js' },
        { type: 'script', url: 'dayjs@1.11.13/plugin/quarterOfYear.js' },
        { type: 'script', url: 'antd@5.24.8/dist/antd.min.js' },
      ],
      jsdelivr: [
        { type: 'style', url: 'antd@5.24.8/dist/reset.min.css' },
        { type: 'script', url: 'react@16/umd/react.development.js' },
        { type: 'script', url: 'react-dom@16/umd/react-dom.development.js' },
        { type: 'script', url: 'babel-standalone@6.15.0/babel.min.js' },
        { type: 'script', url: 'dayjs@1.11.7/dayjs.min.js' },
        { type: 'script', url: 'dayjs@1.11.7/plugin/customParseFormat.min.js' },
        { type: 'script', url: 'dayjs@1.11.7/plugin/weekday.min.js' },
        { type: 'script', url: 'dayjs@1.11.7/plugin/localeData.min.js' },
        { type: 'script', url: 'dayjs@1.11.7/plugin/weekOfYear.min.js' },
        { type: 'script', url: 'dayjs@1.11.7/plugin/weekYear.min.js' },
        { type: 'script', url: 'dayjs@1.11.7/plugin/advancedFormat.min.js' },
        { type: 'script', url: 'dayjs@1.11.7/plugin/quarterOfYear.min.js' },
        { type: 'script', url: 'antd@5.24.8/dist/antd.min.js' },
      ],
    },
  },
] as TemplateItem[]
