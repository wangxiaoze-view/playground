import { useComputedNum, useCssVar } from 'functional-helpers/hooks'
import { defineStore } from 'pinia'
import { ref } from 'vue'

const { toNumber } = useComputedNum()

export function hexToRgba(hex: string, n = 1) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? `rgba(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}, ${n})`
    : null
}

export const useThemeStore = defineStore('theme', {
  state: () => ({
    themeColor: '#292929',
  }),
  getters: {
    getThemeColor: (state) => state.themeColor,
  },
  actions: {
    onSetThemeColor(color: string) {
      this.themeColor = color
      this.onInitThemeColorr()
    },
    onInitThemeColorr() {
      const el = ref<HTMLElement | null>(null)
      // 使用hooks去修改
      useCssVar('--el-color-primary', el).value = useCssVar('--el-color-primary-dark-2', el).value =
        this.themeColor
      // element的好像只有 --el-color-primary-light-3/5/7/8/9， 这里暂时写到9
      for (let i = 1; i <= 9; i++) {
        const color = hexToRgba(this.themeColor, toNumber(1 - i * 0.1))
        if (color) useCssVar(`--el-color-primary-light-${i}`, el).value = color
      }
    },
  },
})
