import type { ShareTemplateData } from '@/utils/share'
import { defineStore } from 'pinia'

export const useCodeStore = defineStore('code', {
  state: () => ({
    htmlCode: '',
    cssCode: '',
    jsCode: '',
    currrentTemplateKey: ['default', 'JavaScript'],
    cdnType: 'jsdelivr',
    cdnList: [
      { name: 'bootcdn', url: 'https://cdn.bootcdn.net/ajax/libs/' },
      { name: 'unpkg', url: 'https://unpkg.com/' },
      { name: 'jsdelivr', url: 'https://cdn.jsdelivr.net/npm/' },
      { name: 'cdnjs', url: 'https://cdnjs.cloudflare.com/ajax/libs/' },
    ],
    loading: false,
    iframeRef: '' as any,
  }),
  getters: {
    getCdnType: (state) => state.cdnType,
    getCurrrentTemplateKey: (state) => state.currrentTemplateKey,
    getLoading: (state) => state.loading,
    getCdnList: (state) => state.cdnList,
    getIframeRef: (state) => state.iframeRef,
  },
  actions: {
    setIframeRef(ref: any) {
      if (ref) this.iframeRef = ref
    },
    setLoading(loading: boolean) {
      this.loading = loading
    },
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
