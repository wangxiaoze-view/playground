import * as monaco from 'monaco-editor'
import { nextTick, onBeforeUnmount, ref, type Ref } from 'vue'
let editor: monaco.editor.IStandaloneCodeEditor
export function useEditor() {
  const editorRef = ref<HTMLElement>()
  const onEditorInit = (options: { code: Ref<string>; language: string }) => {
    nextTick(() => {
      monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
        noSemanticValidation: true,
        noSyntaxValidation: false,
      })
      monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
        target: monaco.languages.typescript.ScriptTarget.ES2016,
        allowNonTsExtensions: true,
      })
      editor = monaco.editor.create(editorRef.value!, {
        value: options.code.value, // 编辑器初始显示文字
        language: options.language, // 语言支持自行查阅demo
        automaticLayout: true, // 自适应布局
        theme: 'vs-dark', // 官方自带三种主题vs, hc-black, or vs-dark
        foldingStrategy: 'indentation',
        renderLineHighlight: 'all', // 行亮
        selectOnLineNumbers: true, // 显示行号
        minimap: {
          enabled: false,
        },
        readOnly: false, // 只读
        fontSize: 16, // 字体大小
        scrollBeyondLastLine: false, // 取消代码后面一大段空白
        overviewRulerBorder: false, // 不要滚动条的边框
      })

      // console.log(editor)
      // 监听值的变化
      editor.onDidChangeModelContent(() => {
        options.code.value = editor.getValue()
      })
    })
    onBeforeUnmount(() => {
      editor.dispose()
    })
  }
  return {
    editorRef,
    onEditorInit,
  }
}
