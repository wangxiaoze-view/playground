import type { ShareTemplateData } from '@/utils/share'
import { defineStore } from 'pinia'

export const useCodeStore = defineStore('code', {
  state: () => ({
    htmlCode: '',
    cssCode: '',
    jsCode: '',
    currrentTemplateKey: 'default',
  }),
  getters: {},
  actions: {
    onSetTemplateCode(template: ShareTemplateData) {
      this.htmlCode = template.html
      this.cssCode = template.css
      this.jsCode = template.js
      this.currrentTemplateKey = template.template
    },

    onChangeEditor(code: string, tabName: string) {
      switch (tabName) {
        case 'html':
          this.htmlCode = code
          break
        case 'css':
          this.cssCode = code
          break
        case 'javascript':
          this.jsCode = code
          break
      }
    },
  },
})
