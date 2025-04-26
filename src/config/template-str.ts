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

export const initTmpReactStr = () => {
  return `onst { useState } = React
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
ReactDOM.render(<App />, document.getElementById('root'));
`
}
