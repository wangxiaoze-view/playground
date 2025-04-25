import { ref } from 'vue'

type CodeTab = {
  name: string
  icon: string
}
const codeTab: CodeTab[] = [
  { name: 'html', icon: 'ri-html5-fill icon icon-middle' },
  { name: 'css', icon: 'ri-css3-fill icon icon-middle' },
  { name: 'javascript', icon: 'ri-javascript-fill icon icon-middle' },
]
export function useTab() {
  const initCodeTab = ref('html')

  const onChangeCodeTab = (name: string) => {
    initCodeTab.value = name
  }
  return {
    initCodeTab,
    codeTab,
    onChangeCodeTab,
  }
}
