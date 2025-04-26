export const initTmpCssStr = () => {
  return `body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
  margin: 0;
  padding: 20px;
}
`
}

export const initTmpVueStr = () => {
  return `<div id="app">
  <h1>{{ message }}</h1>
  <button @click="count++">Count is: {{ count }}</button>
</div>
`
}

export const initTmpJsStrV2 = () => {
  return `new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue 2!',
    count: 0
  }
})
`
}

export const initTmpJsStrV3 = () => {
  return `const { createApp, ref } = Vue
const app = createApp({
  setup() {
    const message = ref('Hello Vue 3!')
    const count = ref(0)
    return {
      message,
      count
    }
  }
})
app.mount('#app')
`
}

export const initTmpEleStrV3 = () => {
  return `const { createApp } = Vue
const app = createApp({
  setup() {
    return {}
  }
})
app.use(ElementPlus)
app.mount('#app')
`
}

export const initTmpVantStr = () => {
  return `const { createApp } = Vue
const app = createApp({
  setup() {
    return {}
  }
})
app.use(vant)
app.mount('#app')
`
}

export const initTmpPrimevueStr = () => {
  return `const { createApp } = Vue
const app = createApp({
  setup() {
    return {}
  }
})
app.use(PrimeVue.Config, {
  theme: {
    // 主题配置
    preset: PrimeUIX.Themes.Aura
  }
});
// 在这里动态注册
app.component('p-button', PrimeVue.Button );
app.mount('#app')
`
}

export const initTmpDesignVueStr = () => {
  return `const { createApp } = Vue
const app = createApp({
  setup() {
    return {}
  }
})
app.use(antd)
app.mount('#app')
`
}

export const initTmpReactStr = () => {
  return `const { useState } = React
const { createRoot } = ReactDOM
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
}
const root = createRoot(document.getElementById('root'))
root.render(<App />)`
}

export const initTmpSemiStr = () => {
  return `const { Button } = SemiUI;
ReactDOM.render(
  <div>
    <Button theme='solid' type='primary' style={{ marginRight: 8 }}>深色主要</Button>
    <Button theme='solid' type='secondary' style={{ marginRight: 8 }}>深色次要</Button>
    <Button theme='solid' type='tertiary' style={{ marginRight: 8 }}>深色第三</Button>
    <Button theme='solid' type='warning' style={{ marginRight: 8 }}>深色警告</Button>
    <Button theme='solid' type='danger' style={{ marginRight: 8 }}>深色危险</Button>
  </div>,
  document.getElementById('root')
);`
}
