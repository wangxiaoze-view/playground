import { initTmpCssStr } from '../template-str'
import type { TemplateItem } from '../types'

export default [
  {
    value: 'JavaScript',
    label: 'JavaScript',
    icon: 'iconfont icon-javascript-fill',
    html: `<div id="app">
    <h1>Hello JavaScript!</h1>
    <button>按钮</button>
</div>`,
    css: initTmpCssStr(),
    js: `if('addEventListener' in document){
  document.addEventListener('DOMContentLoaded', function(){

    // 在这里编写您的代码
    document.querySelector('button').addEventListener('click', function() {
      alert('Hello JavaScript!')
    })

    // false代表在冒泡阶段触发，true在捕获阶段触发
  }, false)
}`,
    cdn: {
      cdnjs: [],
      unpkg: [],
      jsdelivr: [],
    },
  },
  {
    value: 'JQuery',
    label: 'JQuery',
    icon: 'iconfont icon-jquery',
    html: `<div id="app">
    <h1>Hello JQuery!</h1>
    <button>按钮</button>
</div>`,
    css: initTmpCssStr(),
    js: `$(function () {

  // 在这里编写您的代码
  $('button').click(function() {
    alert('Hello JQuery!')
  })

});`,
    cdn: {
      cdnjs: [{ type: 'script', url: 'jquery/3.7.1/jquery.min.js' }],
      unpkg: [{ type: 'script', url: 'jquery@3.7.1/dist/jquery.min.js' }],
      jsdelivr: [{ type: 'script', url: 'jquery@3.7.1/dist/jquery.min.js' }],
    },
  },
] as TemplateItem[]
